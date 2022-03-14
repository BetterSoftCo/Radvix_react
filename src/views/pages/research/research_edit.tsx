import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { SelectComponent } from "../../components/select_input";
import { RadioGroup } from "../../components/radio_group";
import { ButtonGroup } from "../../components/botton_group";
import { BoxListScroll } from "../../components/box_list_scroll";
import { LocalDataSources } from "../../../data/local_datasources";
import { ResearchController } from "../../../controllers/research/research_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { Media } from "../../../data/models/responses/research/researches_res";
import {
  Team,
  User,
} from "../../../data/models/responses/research/research_by_id_res";
type StateType = {
  files: Array<File>;
  ListPriority: Array<{ id: number; title: string }>;
  ListStatus: Array<{ id: number; title: string }>;
  ListCurrency: Array<{ id: number; title: string }>;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  currency: number;
  priority: number;
  status: number;
  listMembers: Array<{ label: string; value: number; isUser: boolean } | {}>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  medias: Array<Media>;
  teams: Array<Team>;
  users: Array<User>;
  removedMediasId: number[];
  addedTeamsId: number[];
  removedTeamsId: number[];
  addedUsersId: string[];
  removedUsersId: string[];
};
interface RouteParams {
  id: string;
}
class ResearchPageEdit extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new ResearchController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  local: LocalDataSources = new LocalDataSources();
  state: StateType = {
    files: [],
    ListPriority: [],
    ListStatus: [],
    ListCurrency: [],
    title: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    currency: 2,
    priority: 2,
    status: 0,
    listMembers: [],
    loading: false,
    ExternalUrl: [],
    External: "",
    medias: [],
    teams: [],
    users: [],
    removedMediasId: [],
    addedTeamsId: [],
    addedUsersId: [],
    removedTeamsId: [],
    removedUsersId: [],
  };
  componentDidMount() {
    this.setState({
      ListPriority: this.local.getSetting().priority,
      ListStatus: this.local.getSetting().status,
      ListCurrency: this.local.getSetting().currency,
    });
    this.controller.getResearchById(
      { id: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          title: res.title,
          startDate: new Date(res.startDate),
          endDate: new Date(res.endDate),
          currency: res.currency,
          priority: res.priority,
          description: res.description,
          status: res.status,
          medias: res.medias,
          teams: res.teams,
          users: res.users,
        });
      },
      (err) => {}
    );
    this.controller.researchSearch((res) => {
      this.setState({
        listMembers: res,
      });
    });
  }
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelChangeSelect(
    e: Array<{ label: string; value: number; isUser: boolean }>
  ) {
    this.setState({
      addedTeamsId: e
        .filter((item) => item.isUser === false)
        .map((item) => item.value),
      addedUsersId: e
        .filter((item) => item.isUser === true)
        .map((item) => item.value),
    });
  }
  handelRemoveMedia(id: number) {
    this.setState({
      removedMediasId: [...this.state.removedMediasId, id],
      medias: this.state.medias.filter((item) => item.id !== id),
    });
  }
  handelRemoveUser(id: string) {
    this.setState({
      removedUsersId: [...this.state.removedUsersId, id],
      users: this.state.users.filter((item) => item.id !== id),
    });
  }
  handelRemoveTeam(id: number) {
    this.setState({
      removedTeamsId: [...this.state.removedTeamsId, id],
      teams: this.state.teams.filter((item) => item.id !== id),
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
  UpdateResearch() {
    const body = {
      id: parseInt(this.props.match.params.id),
      title: this.state.title,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      currency: this.state.currency,
      priority: this.state.priority,
      removedMediasId: this.state.removedMediasId,
      addedTeamsId: this.state.addedTeamsId,
      removedTeamsId: this.state.removedTeamsId,
      addedUsersId: this.state.addedUsersId,
      removedUsersId: this.state.removedUsersId,
      status:this.state.status
    };
    this.setState({
      loading: true,
    });
    this.controller.updateResearch(
      body,
      (res) => {
        if (this.state.files.length || this.state.ExternalUrl.length) {
          this.handelUpload(res.id);
        } else {
          this.setState({
            loading: false,
          });
          this.props.history.push(
            `${AppRoutes.profile_research.replace(
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

    formData.append("UseCase", "0");
    formData.append("SectionId", id.toString());

    await this.UploadController.UloadMedia(
      formData,
      (res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push(
          `${AppRoutes.profile_research.replace(":id", id?.toString() ?? "")}`
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
    const files = this.state.files.map((file: any, index) => (
      <li key={index}>
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
              className="backPage"
              onClick={() => {
                this.props.history.push(AppRoutes.research);
              }}
            ></span>{" "}
            Edit Research Project
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Research Name:"
                  popQuestion="Research Name"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Research Name",
                    this.state.title,
                    "required"
                  )}
                  value={this.state.title}
                ></InputComponent>
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
                    selected={this.state.startDate}
                    onChange={(e) => {
                      this.handelChangeDate("startDate", e);
                    }}
                  />
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={(e) => {
                      this.handelChangeDate("endDate", e);
                    }}
                  />
                </div>
              </div>
              <div className="item">
                <RadioGroup
                  label=" Currency:"
                  popQuestion="Currency"
                  TextItem="title"
                  ValueItem="id"
                  name="Currency"
                  items={this.state.ListCurrency}
                  Selected={this.state.currency}
                  onChange={(e) => {
                    this.handleChange("currency", parseInt(e.target.value));
                  }}
                ></RadioGroup>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Research Priority:"
                  popQuestion="Research Priority"
                  TextItem="title"
                  ValueItem="id"
                  name="ResearchPriority"
                  items={this.state.ListPriority}
                  onChange={(e) => {
                    this.handleChange("priority", parseInt(e.target.value));
                  }}
                  selected={this.state.priority}
                ></ButtonGroup>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  className="mt-3"
                  label="Research Description:"
                  popQuestion="Research Description:"
                  optional="optional"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                  value={this.state.description}
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Research Status:"
                  popQuestion="Research Status"
                  TextItem="title"
                  ValueItem="id"
                  name="ResearchStatus"
                  items={this.state.ListStatus}
                  onChange={(e) => {
                    this.handleChange("status", parseInt(e.target.value));
                  }}
                  selected={this.state.status}
                ></ButtonGroup>
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
                  {this.state.medias
                    .filter((item) => item.externalUrl === null)
                    .map((item, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center mb-1"
                      >
                        <img
                          src="/images/icons/pdf_icon.svg"
                          alt=""
                          className="mx-2"
                        />{" "}
                        {item.title}
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
                {this.state.medias
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
                <SelectComponent
                  items={this.state.listMembers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Assign Teams (Members):"
                  popQuestion="Assign Teams (Members):"
                  optional="optional"
                  isMulti
                  onChange={(e) => {
                    this.handelChangeSelect(e);
                  }}
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members)"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.teams.map((item, index) => (
                    <MainButton
                      key={index}
                      backgroundColor="#EBEBEB"
                      className="tag-delete"
                      children={
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="flex-fill mx-2">{item.title}</span>
                          <CircleIcon
                            type={ThemeCircleIcon.dark}
                            width="22px"
                            height="22px"
                            className="pointer"
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
                  ))}
                </div>
                <BoxListScroll
                  default_photo="/Images/icons/user.svg"
                  items={this.state.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  DeleteFunc={(e, value) => {
                    this.handelRemoveUser(value);
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
                onClick={() => {
                  this.UpdateResearch();
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
export default withRouter(ResearchPageEdit);
