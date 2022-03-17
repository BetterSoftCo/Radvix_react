import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import SimpleReactValidator from "simple-react-validator";
import { LocalDataSources } from "../../../data/local_datasources";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import { CreateTicketReq } from "../../../data/models/requests/discussion/create_ticket_req";
type StateType = {
  id: number;
  categoryId: number;
  subject: string;
  priority: number;
  userId: string;
  message: string;
  files: Array<File>;
  ExternalUrl: Array<string>;
  External: string;
  loading: boolean;
  listPriority: Array<{ label: string; value: number }>;
  listticketCategory: Array<{ label: string; value: string } | {}>;
};
class TicketPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new DiscusstionController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  UploadController = new UploadController();
  local: LocalDataSources = new LocalDataSources();
  state: StateType = {
    id: 0,
    categoryId: 0,
    subject: "",
    priority: 1,
    userId: "",
    message: "",
    files: [],
    listPriority: [],
    listticketCategory: [],
    ExternalUrl: [],
    External: "",
    loading: false,
  };
  componentDidMount() {
    this.controller.searchDiscusstion(
      {
        discussionTopic: 1,
        isTicket: true,
      },
      (res) => {
        this.setState({
          listticketCategory: res.ticketCategory
            ? res.ticketCategory.map((item) => {
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
      },
      (err) => {}
    );
  }
  handelChangeSelect(e: { label: string; value: number }, target: string) {
    this.setState({ [target]: e.value });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  CreateTicket() {
    if (this.validator.allValid()) {
      const body: CreateTicketReq = {
        categoryId: this.state.categoryId,
        subject: this.state.subject,
        priority: this.state.priority,
        userId: this.local.getUserId(),
        message: this.state.message,
      };
      this.setState({
        loading: true,
      });
      this.controller.createTicket(
        body,
        (res) => {
          if (this.state.files.length) {
            this.handelUpload(res.id);
          } else {
            this.props.history.push(`${AppRoutes.ticketing_ticket.replace(":id", res.id.toString() ?? "")}`);
          }

          this.setState({
            id: 0,
            categoryId: 0,
            subject: "",
            priority: 0,
            userId: "",
            message: "",
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
          `${AppRoutes.ticketing_ticket.replace(":id", id.toString() ?? "")}`
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
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
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
            New Ticket
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <SelectComponent
                  items={this.state.listticketCategory}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Pick A Category"
                  popQuestion="Pick A Category"
                  isMulti={false}
                  onChange={(e) => {
                    this.handelChangeSelect(e, "categoryId");
                  }}
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
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Attachments:
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
              <div className="item">
                <ButtonGroup
                  label="Ticket Priority:"
                  popQuestion="Ticket Priority:"
                  name="TicketPriority:"
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
                  this.CreateTicket();
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
export default withRouter(TicketPageNew);
