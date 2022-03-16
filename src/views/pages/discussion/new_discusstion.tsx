import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { LocalDataSources } from "../../../data/local_datasources";
import { DiscusstionCreateReq } from "../../../data/models/requests/discussion/discusstion_create_req";
type StateType = {
  topic: number;
  sectionId: number;
  subject: string;
  message: string;
  priority: number;
  usersId: string[];
  files: Array<File>;
  ExternalUrl: Array<string>;
  External: string;
  loading: boolean;
  listPriority: Array<{ label: string; value: number }>;
  listDiscusstionOn: Array<{ label: string; value: number } | {}>;
  listMembers: Array<{ label: string; value: string } | {}>;
};
interface RouteParams {
  topic: string;
  section: string;
}
class NewDiscusstion extends React.Component<RouteComponentProps<RouteParams>> {
  RoleUser = store.getState().userRole;
  controller = new DiscusstionController();
  UploadController = new UploadController();
  local: LocalDataSources = new LocalDataSources();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state: StateType = {
    topic: 0,
    sectionId: 0,
    subject: "",
    message: "",
    priority: 1,
    usersId: [],
    files: [],
    ExternalUrl: [],
    External: "",
    listDiscusstionOn: [],
    listMembers: [],
    listPriority: [],
    loading: false,
  };
  componentDidMount() {
    this.controller.searchDiscusstion(
      {
        discussionTopic: 1,
        isTicket: false,
      },
      (res) => {
        this.setState({
          listMembers: res.members
            ? res.members.map((item) => {
                return {
                  label: item.firstName + " " + item.lastName,
                  value: item.userId,
                };
              })
            : [],
          listDiscusstionOn: res.discussionOn
            ? res.discussionOn.map((item) => {
                return {
                  label: item.title,
                  value: item.id,
                };
              })
            : [],
          listPriority: this.local.getSetting().priority.map((item) => {
            return { name: item.title, id: item.id };
          }),
        });
        if (parseInt(this.props.match.params.topic) !== 1) {
          this.controller.discusstionSectionUser(
            {
              discussionTopic: parseInt(this.props.match.params.topic),
              sectionId: parseInt(this.props.match.params.section),
            },
            (res) => {
              this.setState({
                listMembers: res.members
                  ? res.members.map((item) => {
                      return {
                        label: item.firstName + " " + item.lastName,
                        value: item.id,
                      };
                    })
                  : [],
              });
            },
            (err) => {}
          );
        }
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
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    this.setState({ [target]: e.value });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelSelectMembers(e: Array<{ label: string; value: string }>) {
    this.setState({ usersId: e.map((item) => item.value) });
  }
  CreateDiscusstion() {
    if (this.validator.allValid()) {
      const body: DiscusstionCreateReq = {
        topic: 1,
        sectionId: this.state.sectionId,
        subject: this.state.subject,
        message: this.state.message,
        priority: this.state.priority,
        usersId: this.state.usersId,
      };
      this.setState({
        loading: true,
      });
      this.controller.createDiscusstion(
        body,
        (res) => {
          if (this.state.files.length) {
            this.handelUpload(res.id);
          } else {
            this.props.history.push(
              `${AppRoutes.discussion.replace(":id", res.id.toString() ?? "")}`
            );
          }

          this.setState({
            topic: 0,
            sectionId: 0,
            subject: "",
            message: "",
            priority: 1,
            usersId: [],
            files: [],
            ExternalUrl: [],
            External: "",
            loading: false,
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
      (res) => {
        this.props.history.push(
          `${AppRoutes.discussion.replace(":id", id.toString() ?? "")}`
        );
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
            New Discussion Panel
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <SelectComponent
                  items={this.state.listDiscusstionOn}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Please select…"
                  label="Discussion On:"
                  popQuestion="Discussion On:"
                  onChange={(e) => {
                    this.handelChangeSelect(e, "sectionId");
                  }}
                  isMulti={false}
                ></SelectComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Subject:"
                  popQuestion="Subject:"
                  onChange={(e) => {
                    this.handleChange("subject", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Subject",
                    this.state.subject,
                    "required"
                  )}
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Opening Message:"
                  popQuestion="Opening Message:"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("message", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "message",
                    this.state.message,
                    "required"
                  )}
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Access Level:"
                  popQuestion="Access Level:"
                  name="AccessLevel"
                  items={this.state.listPriority}
                  TextItem="name"
                  ValueItem="id"
                  selected={this.state.priority}
                  onChange={(e) => {
                    this.handleChange("priority", parseInt(e.target.value));
                  }}
                ></ButtonGroup>
              </div>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={this.state.listMembers}
                  label="Add Members To Discussion:"
                  popQuestion="Add Members To Discussion:"
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  onChange={(e) => {
                    this.handelSelectMembers(e);
                  }}
                  isMulti
                  inValid={this.validator.message(
                    "message",
                    this.state.message,
                    "required"
                  )}
                ></SelectComponent>
              </div>
              <BoxAlert
                text=" No Member Has Been Added Yet!
(You will automatically be added to this discussion)"
              ></BoxAlert>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachment:
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
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                  className="mx-2"
                  onChange={(e) => {
                    this.handleChange("External", e.target.value);
                  }}
                  value={this.state.External}
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
                children={"Start"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.CreateDiscusstion();
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
export default withRouter(NewDiscusstion);
