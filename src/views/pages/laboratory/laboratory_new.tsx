import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { LaboratoryController } from "../../../controllers/laboratory/laboratory_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { LaboratoryCreateReq } from "../../../data/models/requests/laboratory/laboratory_create_req";
import countries from "../../../core/json/countries.json";
type StateType = {
  listCategory: Array<{ label: string; value: number } | {}>;
  files: Array<File>;
  categoryId: number;
  title: string;
  webSite: string;
  description: string;
  managersId: string[];
  addressLine1: string;
  addressLine2: string;
  zipCode: string;
  creatorUserId: string;
  company: string;
  phone: string;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  city: string,
  state: string,
  listmanagers: Array<{ label: string; value: number } | {}>;
  listCountry: Array<{ label: string; value: number } | {}>;
  countryId: number;
};
class LaboratoryPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new LaboratoryController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  componentDidMount() {
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
  state: StateType = {
    files: [],
    listCategory: [],
    categoryId: 0,
    addressLine1: "",
    addressLine2: "",
    company: "",
    creatorUserId: "",
    description: "",
    managersId: [],
    phone: "",
    title: "",
    webSite: "",
    zipCode: "",
    ExternalUrl: [],
    External: "",
    loading: false,
    listmanagers: [],
    listCountry: [],
    countryId: 0,
    city: "",
    state: ""
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    this.setState({ [target]: e.value });
  }
  handelSelectManager(e: Array<{ label: string; value: number }>) {
    this.setState({ managersId: e.map((item) => item.value) });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
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
    formData.append("SectionId", id.toString());

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
  handelCreateLaboratory() {
    if (this.validator.allValid()) {
      const body: LaboratoryCreateReq = {
        title: this.state.title,
        categoryId: this.state.categoryId,
        webSite: this.state.webSite,
        description: this.state.description,
        managersId: this.state.managersId,
        company: this.state.company,
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        phone: this.state.phone,
        countryId: this.state.countryId,
      };
      this.setState({
        loading: true,
      });
      this.controller.createLaboratory(
        body,
        (res) => {
          this.handelUpload(res.id);
          this.setState({
            files: [],
            title: "",
            description: "",
            startDate: new Date(),
            endDate: new Date(),
            currency: 2,
            priority: 2,
            teamsId: [],
            usersId: [],
            status: 0,
            listMembers: [],
          });
          this.props.history.push(
            `${AppRoutes.profile_laboratory.replace(":id", res.id?.toString())}`
          );
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
            Create A New Laboratory
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Laboratory Name:"
                  popQuestion="Laboratory Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Laboratory Name",
                    this.state.title,
                    "required"
                  )}
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
                    placeholder="Click to see the list…"
                    isMulti={false}
                    onChange={(e) => {
                      this.handelChangeSelect(e , 'categoryId');
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
                        
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label={
                    <span>
                      Address: <br /> Institution/Company
                    </span>
                  }
                  popQuestion="Address"
                  inValid={this.validator.message(
                    "Address",
                    this.state.company,
                    "required"
                  )}
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
                    onChange={(e) => {
                      this.handleChange("phone", e.target.value);
                    }}
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
                    this.handelChangeSelect(e , 'countryId');
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
                children={"Create"}
                onClick={() => {
                  this.handelCreateLaboratory();
                }}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                loading={this.state.loading}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(LaboratoryPageNew);
