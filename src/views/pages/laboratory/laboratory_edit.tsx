import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps } from "react-router";
import { LaboratoryController } from "../../../controllers/laboratory/laboratory_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import countries from "../../../core/json/countries.json";
import {
  Equipment,
  LabManager,
  Media,
} from "../../../data/models/responses/laboratory/laboratory_by_id_res";
import { UpdateLaboratoryReq } from "../../../data/models/requests/laboratory/laboratory_update_req";
import { AppRoutes } from "../../../core/constants";
type StateType = {
  id: number;
  title: string;
  categoryId: number;
  webSite: string;
  description: string;
  removedManagersId: string[];
  addedManagersId: string[];
  removedMedia: number[];
  company: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  creatorUserId: string;
  phone: string;
  countryId: number;
  files: Array<File>;
  listCategory: Array<{ label: string; value: number } | {}>;
  listmanagers: Array<{ label: string; value: number } | {}>;
  listCountry: Array<{ label: string; value: number } | {}>;
  Managers: LabManager[];
  media: Media[];
  equipments: Equipment[];
  teams: Equipment[];
  members: LabManager[];
  External: string;
  ExternalUrl: Array<string>;
  loading:boolean
};
interface RouteParams {
  id: string;
}
export class LaboratoryPageEdit extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new LaboratoryController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state: StateType = {
    id: 0,
    title: "",
    categoryId: 0,
    webSite: "",
    description: "",
    removedManagersId: [],
    addedManagersId: [],
    removedMedia: [],
    company: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    creatorUserId: "",
    phone: "",
    countryId: 0,
    files: [],
    listCategory: [],
    listmanagers: [],
    listCountry: [],
    Managers: [],
    media: [],
    equipments: [],
    teams: [],
    members: [],
    External: "",
    ExternalUrl: [],
    loading: false
  };
  componentDidMount() {
    this.controller.getLaboratoryById(
      { id: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          title: res.title,
          categoryId: res.categoryId,
          webSite: res.webSite,
          description: res.description,
          addressLine1: res.addressLine1,
          addressLine2: res.addressLine2,
          Managers: res.labManagers,
          media: res.media,
          equipments: res.equipments,
          members: res.members,
          company:res.company,
          zipCode:res.zipCode,
          phone:res.phone
        });
      }
    );
    this.controller.getLaboratorySearch((res) => {
      this.setState({
        listmanagers: res.managers.map((item) => {
          return {
            label: item.firstName + " " + item.lastName,
            value: item.id,
          };
        }),
        listCategory: res.categories.map((item) => {
          return { label: item.title, value: item.id };
        }),
        listCountry: countries.map((item) => {
          return { label: item.englishName, value: item.id };
        }),
      });
    });
  }
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    this.setState({ [target]: e.value });
  }
  handelSelectManager(e: Array<{ label: string; value: number }>) {
    this.setState({ addedManagersId: e.map((item) => item.value) });
  }
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelRemoveMedia(id: number) {
    this.setState({
      removedMedia: [...this.state.removedMedia, id],
      media: this.state.media.filter((item) => item.id !== id),
    });
  }
  handelRemoveManagers(id: string) {
    this.setState({
      removedManagersId: [...this.state.removedManagersId, id],
      Managers: this.state.Managers.filter((item) => item.id !== id),
    });
  }
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl];
    Url.push(this.state.External);
    this.setState({
      ExternalUrl: Url,
      External: "",
    });
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  UpdateLaboratory() {
    const body: UpdateLaboratoryReq = {
      id: parseInt(this.props.match.params.id),
      title: this.state.title,
      categoryId: this.state.categoryId,
      webSite: this.state.webSite,
      description: this.state.description,
      removedManagersId: this.state.removedManagersId,
      addedManagersId: this.state.addedManagersId,
      removedMedia: this.state.removedMedia,
      company: this.state.company,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      creatorUserId: this.state.creatorUserId,
      phone: this.state.phone,
      countryId: this.state.countryId,
    };
    this.setState({
      loading: true,
    });
    this.controller.updateLaboratory(
      body,
      (res) => {
        if (this.state.files.length || this.state.ExternalUrl.length) {
          this.handelUpload(res.id);
        } else {
          this.setState({
            loading: false,
          });
          this.props.history.push(
            `${AppRoutes.profile_laboratory.replace(
              ":id",
              res.id?.toString() ?? ""
            )}`
          );
        }
      },
      (err) => {
        this.setState({
          loading: false,
        });
      }
    );
    if (this.validator.allValid()) {
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  async handelUpload(id: number) {
    const formData = new FormData();
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i];
      formData.append("Files", file);
    }
    for (let i = 0; i < this.state.ExternalUrl.length; i++) {
      const file = this.state.ExternalUrl[i];
      formData.append("ExternalUrls", file);
    }
    formData.append("UseCase", "1");
    formData.append("LaboratoryId", id.toString());

    await this.UploadController.UloadMedia(
      formData,
      (res) => {
        this.setState({
          loading: false,
        });
      },
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon
          type={ThemeCircleIcon.dark}
          width="22px"
          height="22px"
          onClick={() => {
            this.handelDeleteFile(file);
          }}
        >
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            Edit Laboratory
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Laboratory Name:"
                  popQuestion="hellow"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Laboratory Name",
                    this.state.title,
                    "required"
                  )}
                  value={this.state.title}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Category:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <div className="d-flex justify-content-between align-items-center">
                  <SelectComponent
                    items={this.state.listCategory}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2 w-100"
                    isMulti={false}
                    onChange={(e) => {
                      this.handelChangeSelect(e, "categoryId");
                    }}
                  ></SelectComponent>
                  <CircleIcon
                    width="36px"
                    height="36px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="18px"
                    color="#ffffff"
                    className="mx-2 px-3"
                  >
                    <i className="fas fa-list"></i>
                  </CircleIcon>
                </div>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label=" Website:"
                  popQuestion=" Website:"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("webSite", e.target.value);
                  }}
                  value={this.state.webSite}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Description:"
                  popQuestion="Description:"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                  value={this.state.description}
                ></InputComponent>
              </div>
              <div className="item">
                <SelectComponent
                  label=" Lab Manager(s):"
                  popQuestion=" Lab Manager(s):"
                  optional="optional"
                  items={this.state.listmanagers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  onChange={(e) => {
                    this.handelSelectManager(e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert
                text=" No Member Has Been Added Yet! (You will automatically be added
                to this research)"
              ></BoxAlert>
              <div className="teams mb-3 mt-3 team-edit">
                <BoxListScroll
                default_photo="/Images/icons/user.svg"
                  items={this.state.Managers}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    this.handelRemoveManagers(value);
                  }}
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachments
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="15px"
                    className="mx-2"
                  ></MainButton>
                  <CircleIcon
                    width="20px"
                    height="20px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="transparent"
                    border="1px solid #D5D5D5"
                    fontSize="10px"
                    color="#D5D5D5"
                  >
                    <i className="fas fa-question"></i>
                  </CircleIcon>
                </span>
                <Dropzone onDrop={this.onDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="container fileUploadBox">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <MainButton
                          type={MainButtonType.light}
                          minHeight="30px"
                          minWidth="179px"
                          fontSize="14px"
                          borderRadius="50px"
                          backgroundColor="#fff"
                          border="1px solid #707070"
                          color="#707070"
                          className="mt-4"
                          children={
                            <div className="d-flex justify-content-between align-items-center">
                              <img
                                src="/Images/icons/cloud_computing.svg"
                                alt="sssss"
                                height="20"
                              />{" "}
                              <span className="flex-fill">
                                Browse Local Files
                              </span>
                            </div>
                          }
                        ></MainButton>
                        <p>Or drag and drop files here</p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
                <ul className="file-list mt-3">
                  {this.state.media
                    .filter((item) => item.externalUrl === null)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center mb-1"
                      >
                        <img
                          src={`/images/icons/${item.inputDataType.isMedia()}`}
                          alt=""
                          className="mx-2"
                          width={20}
                          height={20}
                        />{" "}
                        {item.name}
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                          className="mx-3 pointer"
                          onClick={() => {
                            this.handelRemoveMedia(item.id!);
                          }}
                        >
                          <img
                            src="/images/icons/garbage_can.svg"
                            alt="radvix"
                            width={15}
                            height={15}
                          />
                        </CircleIcon>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                  className="mx-2"
                  onChange={(e) => {
                    this.handleChange("External", e.target.value);
                  }}
                ></InputComponent>
                <CircleIcon
                  width="36px"
                  height="36px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#9D9D9D"
                  fontSize="18px"
                  color="#ffffff"
                  className="px-3"
                  onClick={() => {
                    this.addExternalUrl();
                  }}
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <ul className="file-list mt-3">
                {this.state.media
                  .filter((item) => item.externalUrl)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="my-2 d-flex flex-column flex-md-row"
                    >
                      <MainButton
                        children={item.externalUrl}
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                        className="text-truncate"
                      ></MainButton>
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="22px"
                        height="22px"
                        className="mx-3"
                        onClick={() => {
                          this.handelRemoveMedia(item.id!);
                        }}
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </li>
                  ))}
                {this.state.ExternalUrl.map((item) => (
                  <li className="my-2 d-flex flex-column flex-md-row">
                    <MainButton
                      children={item}
                      type={MainButtonType.dark}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#F5F5F5"
                      color="#096BFF"
                    ></MainButton>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3 pointer"
                      onClick={() => this.handelDeleteExternalLink(item)}
                    >
                      <img
                        src="/images/icons/garbage_can.svg"
                        alt="radvix"
                        width={15}
                        height={15}
                      />
                    </CircleIcon>
                  </li>
                ))}
              </ul>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label={
                    <span>
                      Address: <br /> Institution/Company
                    </span>
                  }
                  popQuestion="Address"
                  value={this.state.company}
                  onChange={(e) => {
                    this.handleChange("company", e.target.value);
                  }}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label=" Address Line 1"
                  popQuestion=" Address Line 1"
                  inValid={this.validator.message(
                    "Address Line 1",
                    this.state.addressLine1,
                    "required"
                  )}
                  onChange={(e) => {
                    this.handleChange("addressLine1", e.target.value);
                  }}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Address Line 2"
                  popQuestion="Address Line 2"
                  inValid={this.validator.message(
                    "Address Line 2",
                    this.state.addressLine2,
                    "required"
                  )}
                  onChange={(e) => {
                    this.handleChange("addressLine2", e.target.value);
                  }}
                ></InputComponent>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="City"
                    onChange={(e) => {
                      this.handleChange("city", e.target.value);
                    }}
                  ></InputComponent>
                </div>
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="State/Province"
                    onChange={(e) => {
                      this.handleChange("state", e.target.value);
                    }}
                  ></InputComponent>
                </div>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label=" ZIP/Postal Code"
                    inValid={this.validator.message(
                      "ZIP/Postal Code",
                      this.state.zipCode,
                      "required"
                    )}
                    onChange={(e) => {
                      this.handleChange("zipCode", e.target.value);
                    }}
                    value={this.state.zipCode}
                  ></InputComponent>
                </div>
                <div className="item col-md-6">
                  <InputComponent
                    type={InputType.text}
                    label="Phone"
                    inValid={this.validator.message(
                      "Phone",
                      this.state.phone,
                      "required"
                    )}
                    value={this.state.phone}
                  ></InputComponent>
                </div>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.listCountry}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Country"
                  onChange={(e) => {
                    this.handelChangeSelect(e, "countryId");
                  }}
                ></SelectComponent>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Start Over"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Save"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.UpdateLaboratory();
                }}
                loading={this.state.loading}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
