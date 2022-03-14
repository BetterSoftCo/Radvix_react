import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { MainButton, MainButtonType } from "../../components/button";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps, withRouter } from "react-router";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { DataController } from "../../../controllers/data/data_controller";
import { UpdateDataReq } from "../../../data/models/requests/data/update_data_req";
import { AppRoutes } from "../../../core/constants";
type StateType = {
  researchId: number;
  appTaskId: number;
  dataId: number;
  addedEquipmentsId: number[];
  deletedEquipmentsId: number[];
  newAppTasksId: number;
  deletedMedias: number[];
  title: string;
  description: string;
  files: Array<File>;
  Equipments: any[];
  Medias: any[];
  listTasks: Array<{ label: string; value: number } | {}>;
  listSubTasks: Array<{ label: string; value: number } | {}>;
  listEquipment: Array<{ label: string; value: number } | {}>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
};
type ParamsType = {
  appTaskId: string;
  dataid: string;
};
class DataPageEdit extends React.Component<RouteComponentProps<ParamsType>> {
  RoleUser = store.getState().userRole;
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  controller = new DataController();
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state: StateType = {
    researchId: 0,
    appTaskId: 0,
    dataId: 0,
    addedEquipmentsId: [],
    deletedEquipmentsId: [],
    newAppTasksId: 0,
    deletedMedias: [],
    title: "",
    description: "",
    files: [],
    Equipments: [],
    Medias: [],
    listTasks: [],
    listSubTasks: [],
    listEquipment: [],
    loading: false,
    ExternalUrl: [],
    External: "",
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  componentDidMount() {
    const search = this.props.location.search;
    const researchId = new URLSearchParams(search).get("researchId");
    this.controller.getDataById(
      {
        dataId: parseInt(this.props.match.params.dataid),
        researchId: parseInt(researchId ?? ""),
        appTaskId: parseInt(this.props.match.params.appTaskId),
      },
      (res) => {
        this.setState({
          researchId: res.researchId,
          appTaskId: res.taskId,
          dataId: res.data.id,
          title: res.data.title,
          description: res.description,
          Equipments: res.equipments,
          Medias: res.data.medias,
        });
      },
      (err) => {}
    );
    this.SearchData();
    store.subscribe(() => {
      this.SearchData();
    });
  }
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
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
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    const newLabId = e.value;
    this.setState({
      [target]: newLabId,
    });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelRemoveMedia(id: number) {
    this.setState({
      deletedMedias: [...this.state.deletedMedias, id],
      Medias: this.state.Medias.filter((item) => item.id !== id),
    });
  }
  handelRemoveEquipment(id: number) {
    this.setState({
      deletedEquipmentsId: [...this.state.deletedEquipmentsId, id],
      Equipments: this.state.Equipments.filter((item) => item.id !== id),
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
  handelChangeSelectMultiple(
    e: Array<{ label: string; value: number }>,
    target: string
  ) {
    const newLabId = e.map((item) => item.value);
    this.setState({
      [target]: newLabId,
    });
  }
  UpdateData() {
    if (this.validator.allValid()) {
      const body: UpdateDataReq = {
        researchId: this.state.researchId,
        appTaskId: this.state.appTaskId,
        dataId: this.state.dataId,
        addedEquipmentsId: this.state.addedEquipmentsId,
        deletedEquipmentsId: this.state.deletedEquipmentsId,
        newAppTasksId: this.state.newAppTasksId,
        deletedMedias: this.state.deletedMedias,
        title: this.state.title,
        description: this.state.description,
      };
      this.setState({
        loading: true,
      });
      this.controller.updateData(
        body,
        (res) => {
          if (this.state.files.length || this.state.ExternalUrl.length) {
            this.handelUpload(res.data.id);
          } else {
            this.setState({
              loading: false,
            });
            this.props.history.push(AppRoutes.data_mydata);
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
    formData.append("UseCase", "8");
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
            Edit Data Set
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
                    this.handelChangeSelect(e, "newAppTasksId");
                  }}
                ></SelectComponent>
              </div>
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
                  value={this.state.title}
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
                <ul className="file-list mt-3">
                  {this.state.Medias.map((item) => (
                    <li
                      className="d-flex align-items-center mb-1"
                      key={item.id}
                    >
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
                  value={this.state.description}
                ></InputComponent>
              </div>
            </div>
            <div className="col-md-6 right">
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
                    this.handelChangeSelectMultiple(e, "addedEquipmentsId");
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
                <BoxListScroll
                  default_photo="/Images/icons/equipment_Icon.svg"
                  items={this.state.Equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    this.handelRemoveEquipment(value);
                  }}
                ></BoxListScroll>
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
                  this.UpdateData();
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
export default withRouter(DataPageEdit);
