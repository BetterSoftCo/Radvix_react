import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps, withRouter } from "react-router";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import { GetDiscusstionPanelResResult } from "../../../data/models/responses/discussion/get_discusstion_panel_res";
import { LocalDataSources } from "../../../data/local_datasources";
import moment from "moment";
import { AppConstants } from "../../../core/constants";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
interface RouteParams {
  id: string;
}
type StateType = {
  files: Array<File>;
  Discusstion: GetDiscusstionPanelResResult;
  myUserId: string;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  massage: string;
};
class DiscusstionPage extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  date = new Date();
  controller = new DiscusstionController();
  local = new LocalDataSources();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state: StateType = {
    files: [],
    Discusstion: {
      creatorUserFirstName: "",
      creatorUserId: "",
      creatorUserLastName: "",
      histories: [],
      id: 0,
      isTicket: false,
      priority: 0,
      subject: "",
      topic: 0,
      users: [],
    },
    myUserId: this.local.getUserId(),
    loading: false,
    ExternalUrl: [],
    External: "",
    massage: "",
  };
  componentDidMount() {
    this.getDiscustionPanel();
  }
  getDiscustionPanel() {
    this.controller.getDiscusstionPanel(
      {
        discussionId: parseInt(this.props.match.params.id),
        ticket: false,
      },
      (res) => {
        this.setState({
          Discusstion: res,
        });
      },
      (err) => {}
    );
  }
  onDrop = (files: any) => {
    this.setState({ files });
  };
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
    formData.append("UseCase", "7");
    formData.append("SectionId", id.toString());

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
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl];
    if (this.state.External.length > 2) {
      Url.push(this.state.External);
    }
    this.setState({
      ExternalUrl: Url,
      External: "",
    });
  }
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  SendMassage() {
    if (this.validator.allValid()) {
      const body = {
        discussionId: parseInt(this.props.match.params.id),
        message: this.state.massage,
      };

      this.setState({
        loading: true,
      });
      this.controller.createMassage(
        body,
        (res) => {
          if (this.state.files.length) {
            this.handelUpload(this.state.Discusstion.id);
          }
          this.setState({
            loading: false,
            ExternalUrl: [],
            External: "",
            massage: "",
            files: [],
          });
          this.getDiscustionPanel();
        },
        (err) => {
          this.setState({
            loading: false,
            ExternalUrl: [],
            External: "",
            massage: "",
            files: [],
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
        <div className="col-12 box-content p-3 discusstion">
          <h5 className="b-title d-flex align-items-center">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            {this.state.Discusstion.subject}
            <MainButton
              children={this.state.Discusstion.priority.isPriority()}
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="12px"
              className="mx-2"
              backgroundColor="#096BFF"
            ></MainButton>
          </h5>
          <div className="title-discusstion">
            This discussion is related to the{" "}
            {this.state.Discusstion.topic.isTopic()}
            <span>{this.state.Discusstion.subject}</span>
          </div>
          <div className="row mt-3 justify-content-around">
            <div className="col-md-7 chat">
              {this.state.Discusstion.histories.map((item) => (
                <div
                  className={
                    item.userId === this.state.myUserId ? "submit" : "Received"
                  }
                  key={item.id}
                >
                  <IconTextRow
                    theme={Theme.dark}
                    text={`${item.userFirstName} (${moment(
                      item.createDate
                    ).format("YYYY/MM/DD")})`}
                    fontSize="14px"
                    className="fw-lighter"
                    children={
                      <img
                        src={
                          item.userProfilePicture
                            ? AppConstants.base_url_image +
                              item.userProfilePicture
                            : "/images/images/img_avatar.png"
                        }
                        alt="Avatar"
                        className="rounded-circle avatar mx-2"
                        width="30px"
                        height="30px"
                      />
                    }
                  ></IconTextRow>
                  <div
                    className={
                      item.userId === this.state.myUserId
                        ? "submit-msg w-75"
                        : "Received-msg w-75"
                    }
                  >
                    {item.message}
                    <ul className="file-list">
                      {item.attachments
                        .filter((item) => item.externalUrl === null)
                        .map((item) => (
                          <li key={item.id}>
                            <img
                              src={`/images/icons/${item.inputDataType.isMedia()}`}
                              alt=""
                              width={15}
                              height={15}
                            />
                            {item.title}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4 teams teams-light p-1">
              <div className="teams teams-light p-1 chat-teams-light mb-1">
                <div className="d-flex justify-content-between align-items-center">
                  <IconTextRow
                    theme={Theme.dark}
                    text="Users In This Discussion"
                    children={
                      <img
                        src="/images/icons/team_menu.svg"
                        className="mx-1"
                        alt=""
                        width={25}
                        height={25}
                      />
                    }
                    fontSize="14px"
                  ></IconTextRow>
                  <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="14px"
                    color="#ffffff"
                    className="mx-2"
                  >
                    <i className="fas fa-plus"></i>
                  </CircleIcon>
                </div>
                <BoxListScroll
                  default_photo="/Images/icons/user.svg"
                  items={this.state.Discusstion.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  className="mt-3"
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-7 px-0">
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Message:"
                  className="mt-3"
                  rows={7}
                  onChange={(e) => {
                    this.handleChange("massage", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Message",
                    this.state.massage,
                    "required"
                  )}
                  fontSize="14px"
                ></InputComponent>
              </div>
            </div>
            <div className="col-md-4  px-0">
              <div className="item">
                <span
                  className="label d-flex align-items-center"
                  style={{ fontSize: "14px" }}
                >
                  Attachment:
                  <MainButton
                    type={MainButtonType.light}
                    children={"Optional"}
                    borderRadius="50px"
                    fontSize="11px"
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
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                  className="mx-2"
                  onChange={(e) => {
                    this.handleChange("External", e.target.value);
                  }}
                  height="35px"
                  value={this.state.External}
                ></InputComponent>
                <CircleIcon
                    width="35px"
                    height="35px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#9D9D9D"
                    fontSize="16px"
                    color="#ffffff"
                    className="ms-2"
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
              <div>
                <MainButton
                  type={MainButtonType.dark}
                  children={"Send"}
                  borderRadius="50px"
                  fontSize="16px"
                  className="mt-3 btn-block"
                  minHeight="37px"
                  minWidth="100%"
                  onClick={() => {
                    this.SendMassage();
                  }}
                  loading={this.state.loading}
                ></MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(DiscusstionPage);
