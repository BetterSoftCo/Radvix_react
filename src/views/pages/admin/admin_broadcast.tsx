import React from "react";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { ButtonGroup } from "../../components/botton_group";
import { DiscusstionController } from "../../../controllers/discussion/discusstion_controller";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import SimpleReactValidator from "simple-react-validator";
import { LocalDataSources } from "../../../data/local_datasources";
type StateType = {
  files: Array<File>;
  loading: boolean;
  ExternalUrl: Array<string>;
  External: string;
  massage: string;
  broadCastTypes: number;
  listbroadCast: Array<{ label: string; value: number }>;
  subject: string;
};
export class AdminBroadcast extends React.Component {
  controller = new DiscusstionController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  local: LocalDataSources = new LocalDataSources();
  componentDidMount() {
    this.setState({
      listbroadCast: this.local.getSetting().broadCastTypeEnum.map((item) => {
        return { label: item.title, value: item.id };
      }),
    });
  }
  state: StateType = {
    files: [],
    loading: false,
    ExternalUrl: [],
    External: "",
    massage: "",
    broadCastTypes: 0,
    listbroadCast: [],
    subject: "",
  };
  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
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
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter((item) => item !== link),
    });
  }
  SendMassage() {
    if (this.validator.allValid()) {
      const body = {
        subject: this.state.subject,
        broadCastTypes: [this.state.broadCastTypes],
        message: this.state.massage,
      };

      this.setState({
        loading: true,
      });
      this.controller.createBroadCast(
        body,
        (res) => {
          if (this.state.files.length) {
            this.handelUpload(res.id);
          }
          this.setState({
            loading: false,
            ExternalUrl: [],
            External: "",
            massage: "",
            files: [],
          });
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
          <h5 className="b-title d-flex align-items-center">
            <span
              onClick={() => {
                window.history.back();
              }}
              className="backPage"
            ></span>{" "}
            New Broadcast
          </h5>
          <div className="form row">
            <div className="col-md-4 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Subject:"
                  onChange={(e) => {
                    this.handleChange("subject", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "subject",
                    this.state.massage,
                    "required"
                  )}
                ></InputComponent>
              </div>
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
            <div className="col-md-8 right">
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Message:"
                  className="mt-2"
                  rows={7}
                  onChange={(e) => {
                    this.handleChange("massage", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Message",
                    this.state.massage,
                    "required"
                  )}
                ></InputComponent>
              </div>
              <div className="item my-4">
                <ButtonGroup
                  name="SendTo"
                  label="Send To:"
                  items={this.state.listbroadCast}
                  TextItem="label"
                  ValueItem="value"
                  selected={this.state.broadCastTypes}
                  onChange={(e) => {
                    this.handleChange(
                      "broadCastTypes",
                      parseInt(e.target.value)
                    );
                  }}
                ></ButtonGroup>
              </div>
              <div className="item">
                <div className="d-flex justify-content-center align-items-center my-4">
                  <MainButton
                    type={MainButtonType.light}
                    children={"Start Over"}
                    borderRadius="50px"
                    fontSize="20px"
                    className="mx-2"
                    minHeight="47px"
                    minWidth="110px"
                  ></MainButton>
                  <MainButton
                    type={MainButtonType.dark}
                    children={"Start"}
                    borderRadius="50px"
                    fontSize="20px"
                    className="mx-2"
                    minHeight="47px"
                    minWidth="110px"
                    onClick={() => {
                      this.SendMassage();
                    }}
                  ></MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
