import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import Dropzone from "react-dropzone";
import { RadioGroup } from "../../components/radio_group";
import { RouteComponentProps, withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import { AppRoutes } from "../../../core/constants";
import { UploadController } from "../../../controllers/upload_media/upload_media";
import { publishController } from "../../../controllers/publish/publish_controller";
interface RouteParams {
  id: string;

}
type StateType = {
  files: Array<File>;
  mainFiles: Array<File>;
  finalVersion: number,
  publicationId: number,
  createdDate: Date,
  External: string,
  ExternalUrl: Array<string>,
  MainExternal: string,
  MainExternalUrl: Array<string>,
  users: Array<{}>,
  usersList: Array<{}>,
  publication: { firstName: string; lastName: string; id: string };

};
class UploadNewDraft extends React.Component<RouteComponentProps<RouteParams>> {
  controller = new publishController();
  UploadController = new UploadController();
  RoleUser = store.getState().userRole;
  date = new Date();
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state: StateType = {
    files: [],
    mainFiles: [],
    finalVersion: 1,
    publicationId: 0,
    createdDate: new Date(),
    ExternalUrl: [],
    External: "",
    MainExternalUrl: [],
    MainExternal: "",
    users: [],
    usersList: [],
    publication: {
      firstName: "",
      lastName: "",
      id: ""
    }
  };
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  onDrop = (files: any) => {
    this.setState({ files });
  };
  onDropMain = (mainFiles: any) => {
    this.setState({ mainFiles });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter((file) => file.name !== arg.name),
    });
  }
  handelDeleteMainFile(arg: File) {
    this.setState({
      mainFiles: this.state.mainFiles.filter((file) => file.name !== arg.name),
    });
  }
  async handelUploadPublication(id: any) {
    const formData = new FormData();
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i];
      formData.append("Files", file);
    }
    for (let i = 0; i < this.state.ExternalUrl.length; i++) {
      const file = this.state.ExternalUrl[i];
      formData.append("ExternalUrls", file);
    }
    formData.append("UseCase", "10");
    formData.append("DraftId", id.toString());

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
  async handelUploadMainPublication(id: any) {
    const formData = new FormData();
    for (let i = 0; i < this.state.mainFiles.length; i++) {
      const file = this.state.files[i];
      formData.append("Files", file);
    }
    for (let i = 0; i < this.state.MainExternalUrl.length; i++) {
      const file = this.state.MainExternalUrl[i];
      formData.append("ExternalUrls", file);
    }
    formData.append("UseCase", "9");
    formData.append("DraftId", id.toString());

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
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl]
    Url.push(this.state.External)
    this.setState({
      ExternalUrl: Url,
      External: ''
    });
  }
  addMainExternalUrl() {
    let Url = [...this.state.MainExternalUrl]
    Url.push(this.state.MainExternal)
    this.setState({
      MainExternalUrl: Url,
      MainExternal: ''
    });
  }
  componentDidMount() {
    this.controller.getPublishById(
      { publicationId: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          users: res.users?.map(item => {
            return { label: item.firstName + " " + item.lastName, value: item.id }
          }),
          usersList: res.users
        });
      }
    );
  }
  handelCreateDraft() {
    if (this.validator.allValid()) {
      const body = {
        finalVersion: this.state.finalVersion === 1 ? false : true,
        publicationId: parseInt(this.props.match.params.id),
        nextDrafterId: this.state.publication.id,
      }
      this.controller.createDraft(
        body,
        (res) => {
          this.handelUploadPublication(res.draftId);
          this.handelUploadMainPublication(res.draftId);
          this.setState(
            {
              files: [],
              finalVersion: 1,
              publicationId: 0,
              createdDate: new Date(),
              users: [],
              usersList: [],
              publication: {
                firstName: "",
                lastName: "",
                id: ""
              }
            });

            // setInterval(() => {
            //   this.props.history.push(`${AppRoutes.publish_profile.replace(':id', this.props.match.params.id ?? "")}`)
            // }, 2000);
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
  };
  handelChangeSelect(
    target: string,
    e: {
      label: string;
      value: number,
    }
  ) {
    if (this.state.finalVersion === 1) {
      const userSelected = this.state.usersList.find((item: any) => item.id === e.value);
      if (userSelected) {
        this.setState({ [target]: userSelected });
      }
    } else {
      this.setState({
        [target]: {
          firstName: "",
          lastName: "",
          id: ""
        }
      });
    }
  }
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }
  handelDeleteMainExternalLink(link: string) {
    this.setState({
      MainExternalUrl: this.state.MainExternalUrl.filter(item => item !== link)
    })
  }
  handelDeleteExternalLink(link: string) {
    this.setState({
      ExternalUrl: this.state.ExternalUrl.filter(item => item !== link)
    })
  }
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon type={ThemeCircleIcon.dark} width="22px" height="22px">
          <img
            src="/images/icons/garbage_can.svg"
            alt="radvix"
            width={15}
            height={15}
          />
        </CircleIcon>
      </li>
    ));
    const mainFiles = this.state.mainFiles.map((mainFile: any) => (
      <li key={mainFile.name}>
        {mainFile.name} - {mainFile.size} bytes
        <CircleIcon type={ThemeCircleIcon.dark} width="22px" height="22px">
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
            <span onClick={() => { window.history.back() }} className="backPage"></span> Upload A New Draft
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Upload/Link Main Document:
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
                <Dropzone onDrop={this.onDropMain}>
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
                              <span className="flex-fill">Browse Local Files</span>
                            </div>
                          }
                        ></MainButton>
                        <p>
                          Or drag and drop files here
                        </p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{mainFiles}</ul>
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
                  value={this.state.MainExternal}
                  onChange={(e) => {
                    this.handleChange("MainExternal", e.target.value);
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
                  onClick={() => { this.addMainExternalUrl() }}
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <ul className="file-list mt-3">
                {
                  this.state.MainExternalUrl.map(item => (
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
                        onClick={() => this.handelDeleteMainExternalLink(item)}
                      >
                        <img src="/images/icons/garbage_can.svg" alt="radvix" width={15} height={15} />
                      </CircleIcon>
                    </li>
                  ))
                }
              </ul>
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
                              <span className="flex-fill">Browse Local Files</span>
                            </div>
                          }
                        ></MainButton>
                        <p>
                          Or drag and drop files here
                        </p>
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
                  value={this.state.External}
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
                  onClick={() => { this.addExternalUrl() }}
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <ul className="file-list mt-3">
                {
                  this.state.ExternalUrl.map(item => (
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
                        <img src="/images/icons/garbage_can.svg" alt="radvix" width={15} height={15} />
                      </CircleIcon>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <RadioGroup
                  label="Is This The Final Version?"
                  popQuestion="Is This The Final Version?"
                  TextItem="name"
                  ValueItem="id"
                  name="FinalVersion"
                  items={[
                    { name: "No", id: 1 },
                    { name: " Yes", id: 2 },
                  ]}
                  onChange={(e) => {
                    this.handleChange("finalVersion", parseInt(e.target.value));
                  }}
                  Selected={this.state.finalVersion}
                  inValid={this.validator.message(
                    "FinalVersion",
                    this.state.finalVersion,
                    "required"
                  )}
                ></RadioGroup>
              </div>
              <div className="item">
                <SelectComponent
                  items={this.state.users}
                  TextItem="firstName"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Who Will Work On This Next?"
                  popQuestion="Who Will Work On This Next?"
                  optional="optional"
                  isMulti={false}
                  onChange={(e) => {
                    this.handelChangeSelect("publication", e);
                  }}
                ></SelectComponent>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Back"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.props.history.push(`${AppRoutes.publish_profile.replace(':id', this.props.match.params.id ?? "")}`)
                }}
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Submit"}
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => { this.handelCreateDraft() }}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(UploadNewDraft)