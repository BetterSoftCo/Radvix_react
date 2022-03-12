import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { BoxListScroll } from "../../components/box_list_scroll";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { TaskController } from "../../../controllers/task/task_controller";
import { LocalDataSources } from "../../../data/local_datasources";
import { RouteComponentProps, withRouter } from "react-router";
import { AccessPermition, UserRoles } from "../../../core/utils";
import { Equipment } from "../../../data/models/responses/task/get_task_by_id_res";
import { UpdateTaskReq } from "../../../data/models/requests/task/update_task_req";
import { AppRoutes } from "../../../core/constants";
type StateType = {
  title: string;
  description: string;
  priority: number;
  startDate: Date;
  endDate: Date;
  researchId: number;
  suggestedEquipmentsId: number[];
  addedUsersId: string[];
  addedTeamsId: number[];
  files: Array<File>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  listTeams: Array<{ label: string; value: number } | {}>;
  listEquipments: Array<{ label: string; value: number } | {}>;
  listPriority: Array<{ label: string; value: number } | {}>;
  listUsers: Array<{ label: string; value: number } | {}>;
  Medias: any[];
  Teams: Equipment[];
  Users: any[];
  Equipments: Equipment[];
  id: number;
  parentId: number;
  status: number;
  addedEquipmentsId: number[];
  removedEquipmentsId: number[];
  removedUsersId: string[];
  removedTeamsId: number[];
  removedMedia: number[];
};
type ParamsType = {
  id: string;
};
class TaskPageEdit extends React.Component<RouteComponentProps<ParamsType>> {
  RoleUser = store.getState().userRole;
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  controller = new TaskController();
  local: LocalDataSources = new LocalDataSources();
  state: StateType = {
    files: [],
    addedTeamsId: [],
    addedUsersId: [],
    description: "",
    endDate: new Date(),
    priority: 2,
    researchId: 0,
    startDate: new Date(),
    suggestedEquipmentsId: [],
    title: "",
    External: "",
    ExternalUrl: [],
    loading: false,
    listTeams: [],
    listEquipments: [],
    listPriority: [],
    listUsers: [],
    Medias: [],
    id: 0,
    parentId: 0,
    status: 0,
    addedEquipmentsId: [],
    removedEquipmentsId: [],
    removedUsersId: [],
    removedTeamsId: [],
    removedMedia: [],
    Teams: [],
    Users: [],
    Equipments: [],
  };
  componentDidMount() {
    this.setState({
      listPriority: this.local.getSetting().priority.map((item) => {
        return { name: item.title, id: item.id };
      }),
    });
    this.GetSearchTask();
    store.subscribe(() => {
      this.GetSearchTask();
    });
    this.controller.getTaskById(
      { TaskId: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          title: res.title,
          description: res.discription,
          priority: res.priority,
          startDate: res.startDate,
          endDate: res.endDate,
          researchId: res.researchId,
          Medias: res.medias,
          Teams: res.teams,
          Users: res.users,
          Equipments: res.equipments,
        });
      },
      (err) => {}
    );
  }
  GetSearchTask() {
    this.controller.SearchTask(
      (res) => {
        this.setState({
          listTeams: res.teams?.map((item) => {
            return { label: item.title, value: item.id };
          }),
          listUsers: res.users?.map((item) => {
            return {
              label: item.firstName + " " + item.lastName,
              value: item.id,
            };
          }),
          listEquipments: res.equipments?.map((item) => {
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
  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
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
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  handelChangeSelect(e: { label: string; value: number }) {
    this.setState({ categoryId: e.value });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelRemoveMedia(id: number) {
    this.setState({
      removedMedias: [...this.state.removedMedia, id],
      Medias: this.state.Medias.filter((item) => item.id !== id),
    });
  }
  handelRemoveTeam(id: number) {
    this.setState({
      removedTeamsId: [...this.state.removedTeamsId, id],
      Teams: this.state.Teams.filter((item) => item.id !== id),
    });
  }
  handelRemoveUser(id: string) {
    this.setState({
      removedUsersId: [...this.state.removedUsersId, id],
      Users: this.state.Users.filter((item) => item.id !== id),
    });
  }
  handelRemoveEquipment(id: number) {
    this.setState({
      removedEquipmentsId: [...this.state.removedEquipmentsId, id],
      Equipments: this.state.Equipments.filter((item) => item.id !== id),
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
    formData.append("UseCase", "6");
    formData.append("AppTaskId", id.toString());

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
  UpdateTask() {
    if (this.validator.allValid()) {
      const body: UpdateTaskReq = {
        id: parseInt(this.props.match.params.id),
        title: this.state.title,
        description: this.state.description,
        priority: this.state.priority,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        status: this.state.status,
        researchId: this.state.researchId,
        addedEquipmentsId: this.state.addedEquipmentsId,
        addedUsersId: this.state.addedUsersId,
        addedTeamsId: this.state.addedTeamsId,
        removedEquipmentsId: this.state.removedEquipmentsId,
        removedUsersId: this.state.removedUsersId,
        removedTeamsId: this.state.removedTeamsId,
        removedMedia: this.state.removedMedia,
      };
      this.setState({
        loading: true,
      });
      this.controller.updateTask(
        body,
        (res) => {
          if (this.state.files.length || this.state.ExternalUrl.length) {
            this.handelUpload(res.id);
          } else {
            this.setState({
              loading: false,
            });
            this.props.history.push(
              `${AppRoutes.task_profile.replace(
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
            Edit Task
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Task Name:"
                      : "Subtask Name:"
                  }
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Task Name:"
                      : "Subtask Name:"
                  }
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Task Name",
                    this.state.title,
                    "required"
                  )}
                  value={this.state.title}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Description:"
                  popQuestion="Description:"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Description",
                    this.state.description,
                    "required"
                  )}
                  value={this.state.description}
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  items={this.state.listPriority}
                  TextItem="name"
                  ValueItem="id"
                  name="TaskPriority"
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Task Priority"
                      : "Subtask Priority"
                  }
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Task Priority"
                      : "Subtask Priority"
                  }
                  inValid={this.validator.message(
                    "Task Priority",
                    this.state.priority,
                    "required"
                  )}
                  selected={this.state.priority}
                  onChange={(e) => {
                    this.handleChange("priority", parseInt(e.target.value));
                  }}
                ></ButtonGroup>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Scheduled Timeline:{" "}
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
                  <DatePicker
                    selected={new Date(this.state.startDate)}
                    onChange={(e) => {
                      this.handelChangeDate("startDate", e);
                    }}
                  />
                  <span className="mx-2">Until</span>
                  <DatePicker
                    selected={new Date(this.state.endDate)}
                    onChange={(e) => {
                      this.handelChangeDate("endDate", e);
                    }}
                  />
                </div>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Task Attachments:
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
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listTeams}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign To Teams (Members):"
                      : "Assign To Subteams (Members):"
                  }
                  popQuestion={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Assign To Teams (Members):"
                      : "Assign To Subteams (Members):"
                  }
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelectMultiple(e, "addedTeamsId");
                  }}
                  isMulti
                ></SelectComponent>
              </div>

              <div className="teams mb-3">
                <div className="tags p-3">
                  {this.state.Teams.map((item) => (
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
                                this.handelRemoveTeam(item.id);
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
                <BoxListScroll
                  items={this.state.Users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    this.handelRemoveUser(value);
                  }}
                  default_photo="/Images/icons/user.svg"
                ></BoxListScroll>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.listEquipments}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Suggest Equipment:"
                  popQuestion="Suggest Equipment:"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelectMultiple(e, "addedEquipmentsId");
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
                <BoxListScroll
                  items={this.state.Equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    this.handelRemoveEquipment(value);
                  }}
                  default_photo="/Images/icons/equipment_Icon.svg"
                ></BoxListScroll>
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
                  this.UpdateTask();
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
export default withRouter(TaskPageEdit);
