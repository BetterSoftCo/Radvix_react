import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { BoxAlert } from "../../components/box_alert";
import { MainButton, MainButtonType } from "../../components/button";
import { RouteComponentProps, withRouter } from "react-router";
import { DataController } from "../../../controllers/data/data_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { AccessPermition, UserRoles } from "../../../core/utils";
import { AddDataReq } from "../../../data/models/requests/data/add_data_req";
import { RadioGroup } from "../../components/radio_group";
type StateType = {
  researchId: number;
  equipmentsId: number[];
  appTasksId: number;
  subAppTasksId: number;
  title: string;
  description: string;
  listTasks: Array<{ label: string; value: number } | {}>;
  listSubTasks: Array<{ label: string; value: number } | {}>;
  listEquipment: Array<{ label: string; value: number } | {}>;
  files: Array<File>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  Only: number;
};
class DataPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new DataController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state: StateType = {
    files: [],
    appTasksId: 0,
    description: "",
    equipmentsId: [],
    listTasks: [],
    listEquipment: [],
    researchId: 0,
    subAppTasksId: 0,
    title: "",
    External: "",
    ExternalUrl: [],
    loading: false,
    Only: 0,
    listSubTasks: [],
  };
  componentDidMount() {
    this.SearchData();
    store.subscribe(() => {
      this.SearchData();
    });
  }
  SearchData() {
    this.controller.SearchData(
      (res) => {
        this.setState({
          listTasks: res.appTasks?.map((item) => {
            return { label: item.title, value: item.id };
          }),
          listEquipment: res.accessableEquipments?.map((item) => {
            return { label: item.title, value: item.id };
          }),
          listSubTasks: res.subAppTasks?.map((item) => {
            return { label: item.title, value: item.id };
          }),
        });
      },
      (err) => {}
    );
  }
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
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
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelChangeSelectMultiple(
    e: Array<{ label: string; value: number }>,
    target: string
  ) {
    const newLabId = e.map((item) => item.value);
    this.setState({
      [target]: newLabId,
    });
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    const newLabId = e.value;
    this.setState({
      [target]: newLabId,
    });
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
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
    formData.append("UseCase", "8");
    formData.append("DataId", id.toString());

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
  handelCreateData() {
    if (this.validator.allValid()) {
      const body: AddDataReq = {
        researchId: store.getState().ResearchId,
        equipmentsId: this.state.equipmentsId,
        appTasksId: this.state.appTasksId,

        title: this.state.title,
        description: this.state.description,
      };
      if (this.RoleUser === UserRoles.L2User) {
        body.subAppTasksId = this.state.subAppTasksId;
      }
      this.setState({
        loading: true,
      });
      console.log(body);

      this.controller.createData(
        body,
        (res) => {
          this.handelUpload(res.data.id);
          this.setState({
            files: [],
            appTasksId: 0,
            description: "",
            equipmentsId: [],
            listTasks: [],
            listEquipment: [],
            researchId: 0,
            subAppTasksId: 0,
            title: "",
            External: "",
            ExternalUrl: [],
          });
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
            Add New Data Set
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <SelectComponent
                  items={this.state.listTasks}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Select A Task:"
                  popQuestion="Select A Task:"
                  onChange={(e) => {
                    this.handelChangeSelect(e, "appTasksId");
                  }}
                ></SelectComponent>
              </div>
              {AccessPermition(this.RoleUser, [UserRoles.L2User , UserRoles.L3User]) ? (
                <div className="item">
                  <RadioGroup
                    name="Only"
                    label="Do you Want to Add Data only To A Subtask ?"
                    popQuestion="Do you Want to Add Data only To A Subtask ?"
                    items={[
                      { name: "Yes", value: 0 },
                      { name: "No", value: 1 },
                    ]}
                    TextItem="name"
                    ValueItem="value"
                    onChange={(e) => {
                      this.handleChange("Only", parseInt(e.target.value));
                    }}
                    className="mb-3"
                    Selected={this.state.Only}
                  ></RadioGroup>
                  <SelectComponent
                    items={this.state.listSubTasks}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2"
                    placeholder="Click to see the list…"
                    label="Select A SubTasks:"
                    popQuestion="Select A SubTasks:"
                    onChange={(e) => {
                      this.handelChangeSelect(e, "subAppTasksId");
                    }}
                  ></SelectComponent>
                </div>
              ) : (
                ""
              )}
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Data Set Name:"
                  popQuestion="Data Set Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Name",
                    this.state.title,
                    "required"
                  )}
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Upload/Link Your Data:
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
                {this.state.ExternalUrl.map((item, index) => (
                  <li
                    className="my-2 d-flex flex-column flex-md-row"
                    key={index}
                  >
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
                  type={InputType.textarea}
                  label="Description:"
                  optional="optional"
                  popQuestion="Description:"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                ></InputComponent>
              </div>
            </div>
            <div className="col-md-6 right">
              <span className="label d-flex align-items-center">
                Suggested Equipments:
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
              <BoxAlert text=" No Equipment Has Been Suggested!"></BoxAlert>
              <div className="item">
                <SelectComponent
                  items={this.state.listEquipment}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Equipment Used For This Data:"
                  popQuestion="Equipment Used For This Data:"
                  onChange={(e) => {
                    this.handelChangeSelectMultiple(e, "equipmentsId");
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert text=" No Equipment Has Been Assigned Yet!"></BoxAlert>
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
                children={"Add"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.handelCreateData();
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
export default withRouter(DataPageNew);
