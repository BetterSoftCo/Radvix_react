import React, { Fragment } from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import Dropzone from "react-dropzone";
import { RadioGroup } from "../../components/radio_group";
import {
  Laboratory,
  Media,
} from "../../../data/models/responses/equipment/get_equipment_by_id_res";
import { RouteComponentProps } from "react-router";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { EquipmentController } from "../../../controllers/equipment/equipment_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { AppConstants, AppRoutes } from "../../../core/constants";
import { EditEquipmentReq } from "../../../data/models/requests/equipment/equipment_update_req";
type StateType = {
  id: number;
  title: string;
  description: string;
  manufacturer: string;
  model: string;
  technicianName: string;
  technicianEmail: string;
  technicianPhone: string;
  status: number;
  addedLaboratoriesId: number[];
  removedLaboratoriesId: number[];
  removedMedias: number[];
  Laboratories: Laboratory[];
  Medias: Media[];
  files: Array<File>;
  listLaboratory: Array<{ name: string; value: number }>;
  listequipmentStatus: Array<{ name: string; id: number } | {}>;
  imageUrl: string;
  picture: Array<File>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  cahngePic: boolean;
};
interface RouteParams {
  id: string;
}
export class EditEquip extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new EquipmentController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  local: LocalDataSources = new LocalDataSources();
  state: StateType = {
    id: 0,
    title: "",
    description: "",
    manufacturer: "",
    model: "",
    technicianName: "",
    technicianEmail: "",
    technicianPhone: "",
    status: 0,
    addedLaboratoriesId: [],
    removedLaboratoriesId: [],
    removedMedias: [],
    Laboratories: [],
    Medias: [],
    files: [],
    listLaboratory: [],
    listequipmentStatus: [],
    imageUrl: "",
    picture: [],
    loading: false,
    ExternalUrl: [],
    External: "",
    cahngePic: false,
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  onDropPic = (picture: any) => {
    this.setState({
      picture,
      imageUrl: URL.createObjectURL(picture[0]),
      cahngePic: true,
    });
  };
  componentDidMount() {
    this.setState({
      listequipmentStatus: this.local
        .getSetting()
        .equipmentStatus.map((item) => {
          return { name: item.title, id: item.id };
        }),
    });
    this.controller.EquipmentsSearch(
      (res) => {
        this.setState({
          listLaboratory: res.map((item) => {
            return { label: item.title, value: item.id };
          }),
        });
      },
      (err) => {}
    );
    this.controller.getEquipment(
      {
        equipmentId: parseInt(this.props.match.params.id),
      },
      (res) => {
        this.setState({
          title: res.title,
          description: res.description,
          technicianName: res.technicianName,
          technicianEmail: res.technicianEmail,
          model: res.model,
          manufacturer: res.manufacturer,
          status: res.status,
          technicianPhone: res.technicianPhone,
          imageUrl: res.image,
          Medias: res.medias,
          Laboratories: res.laboratories,
        });
      },
      (err) => {}
    );
  }
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelDeletePic(arg: File) {
    this.setState({
      picture: this.state.picture.filter((file) => file.name !== arg.name),
      imageUrl: "",
    });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelRemoveMedia(id: number) {
    this.setState({
      removedMedias: [...this.state.removedMedias, id],
      Medias: this.state.Medias.filter((item) => item.id !== id),
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
  handelChangeSelect(e: Array<{ label: string; value: number }>) {
    const newLabId = e.map((item) => item.value);
    this.setState({
      addedLaboratoriesId: newLabId,
    });
  }
  handelRemoveLaboratoy(id: number) {
    this.setState({
      removedLaboratoriesId: [...this.state.removedLaboratoriesId, id],
      Laboratories: this.state.Laboratories.filter((item) => item.id !== id),
    });
  }
  UpdateEquipment() {
    if (this.validator.allValid()) {
      const body: EditEquipmentReq = {
        id: parseInt(this.props.match.params.id),
        title: this.state.title,
        description: this.state.description,
        manufacturer: this.state.manufacturer,
        model: this.state.model,
        technicianName: this.state.technicianName,
        technicianEmail: this.state.technicianEmail,
        technicianPhone: this.state.technicianPhone,
        status: this.state.status,
        addedLaboratoriesId: this.state.addedLaboratoriesId,
        removedLaboratoriesId: this.state.removedLaboratoriesId,
        removedMedias: this.state.removedMedias,
      };
      this.setState({
        loading: true,
      });
      this.controller.updateEquipment(
        body,
        (res) => {
          if (
            this.state.files.length ||
            this.state.ExternalUrl.length ||
            this.state.picture.length
          ) {
            this.handelUpload(res.id);
            this.handelUploadPic(res.id);
          } else {
            this.setState({
              loading: false,
            });
            // this.props.history.push(
            //   `${AppRoutes.equip_profile.replace(
            //     ":id",
            //     res.id?.toString() ?? ""
            //   )}`
            // );
          }
        },
        (err) => {
          this.setState({
            loading: false,
          });
        }
      );
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
    formData.append("UseCase", "2");
    formData.append("EquipmentId", id.toString());

    await this.UploadController.UloadMedia(
      formData,
      (res) => {},
      () => {
        this.setState({
          loading: false,
        });
      }
    );
  }
  async handelUploadPic(id: number) {
    const formData = new FormData();
    for (let i = 0; i < this.state.picture.length; i++) {
      const file = this.state.picture[i];
      formData.append("Files", file);
    }
    formData.append("UseCase", "3");
    formData.append("EquipmentId", id.toString());

    await this.UploadController.UloadMedia(
      formData,
      (res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push(
          `${AppRoutes.equip_profile.replace(":id", id?.toString() ?? "")}`
        );
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
    const picture = this.state.picture.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon
          type={ThemeCircleIcon.dark}
          width="22px"
          height="22px"
          onClick={() => {
            this.handelDeletePic(file);
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
            Create A New Equipment
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Equipment Nickname:"
                  popQuestion="Equipment Nickname:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Equipment Nickname",
                    this.state.title,
                    "required"
                  )}
                  value={this.state.title}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Equipment Picture:
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
                  {this.state.imageUrl.length > 2 ? (
                    <Fragment>
                      <img
                        src={
                          !this.state.cahngePic
                            ? AppConstants.base_url_image + this.state.imageUrl
                            : this.state.imageUrl
                        }
                        alt="Avatar"
                        className="rounded-circle avatar mx-2"
                        width="125px"
                        height="125px"
                      />
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="44px"
                        height="30px"
                        className="mx-2 px-2 pointer"
                        onClick={() => {
                          this.setState({
                            picture: [],
                            imageUrl: "",
                          });
                        }}
                      >
                        <img
                          src="/images/icons/garbage_can.svg"
                          alt="radvix"
                          width={15}
                          height={15}
                        />
                      </CircleIcon>
                    </Fragment>
                  ) : null}
                  <Dropzone onDrop={this.onDropPic}>
                    {({ getRootProps, getInputProps }) => (
                      <section className="container fileUploadBox">
                        <div {...getRootProps({ className: "dropzone" })}>
                          <input {...getInputProps()} multiple={false} />
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
                          <ul>{picture}</ul>
                        </aside>
                      </section>
                    )}
                  </Dropzone>
                </div>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Manufacturer"
                  popQuestion="Manufacturer"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("manufacturer", e.target.value);
                  }}
                  value={this.state.manufacturer}
                ></InputComponent>
              </div>

              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Model:"
                  popQuestion="Model:"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("model", e.target.value);
                  }}
                  value={this.state.model}
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
                <RadioGroup
                  label=" Status:"
                  popQuestion="Status"
                  TextItem="name"
                  ValueItem="id"
                  name="Currency"
                  items={this.state.listequipmentStatus}
                  onChange={(e) => {
                    this.handleChange("status", parseInt(e.target.value));
                  }}
                  Selected={this.state.status}
                ></RadioGroup>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Protocols and Documents:
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
                  {this.state.Medias.map((item) => (
                    <li className="d-flex align-items-center mb-1">
                      <img
                        src={`/images/icons/${item.inputDataType.isMedia()}`}
                        alt=""
                        className="mx-2"
                        width={25}
                        height={25}
                      />{" "}
                      {item.title}
                      <CircleIcon
                        type={ThemeCircleIcon.dark}
                        width="22px"
                        height="22px"
                        className="mx-3 pointer"
                        onClick={() => {
                          this.handelRemoveMedia(item.id);
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
                {this.state.Medias.filter((item) => item.externalUrl).map(
                  (item, index) => (
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
                  )
                )}
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
                <span className="label d-flex align-items-center">
                  Warranty/Technical Support:
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

                <InputComponent
                  type={InputType.text}
                  label="Technician Name:"
                  popQuestion="Technician Name:"
                  onChange={(e) => {
                    this.handleChange("technicianName", e.target.value);
                  }}
                  value={this.state.technicianName}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Email"
                  onChange={(e) => {
                    this.handleChange("technicianEmail", e.target.value);
                  }}
                  value={this.state.technicianEmail}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Phone"
                  onChange={(e) => {
                    this.handleChange("technicianPhone", e.target.value);
                  }}
                  value={this.state.technicianPhone}
                ></InputComponent>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.listLaboratory}
                  TextItem="title"
                  ValueItem="id"
                  className="my-2"
                  label="Assign To Laboratory:"
                  popQuestion="Assign To Laboratory:"
                  onChange={(e) => {
                    this.handelChangeSelect(e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams Labs">
                <div className="tags p-3">
                  {this.state.Laboratories.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        backgroundColor="#EBEBEB"
                        className="tag-delete"
                        children={
                          <div className="d-flex align-items-center justify-content-between">
                            <span className="flex-fill">{item.title}</span>
                            <CircleIcon
                              type={ThemeCircleIcon.dark}
                              width="22px"
                              height="22px"
                              onClick={() => {
                                this.handelRemoveLaboratoy(item.id);
                              }}
                            >
                              <img
                                src="/images/icons/garbage_can.svg"
                                alt="radvix"
                                width={15}
                                height={15}
                              />
                            </CircleIcon>
                          </div>
                        }
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                      ></MainButton>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Cancel"}
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
                  this.UpdateEquipment();
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
