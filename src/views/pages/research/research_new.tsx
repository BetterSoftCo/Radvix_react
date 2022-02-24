import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { RadioGroup } from "../../components/radio_group";
import { ButtonGroup } from "../../components/botton_group";
import { BoxAlert } from "../../components/box_alert";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { ResearchController } from "../../../controllers/research/research_controller";
import SimpleReactValidator from "simple-react-validator";
import { UploadController } from "../../../controllers/upload_media/upload_media";
type StateType = {
  files: Array<File>,
  title: string,
  description: string,
  startDate: Date,
  endDate: Date,
  currency: number,
  priority: number,
  teamsId: Array<number>,
  usersId: Array<string>,
  status: number,
  listMembers: Array<{ label: string; value: number, isUser: boolean } | {}>,
  loading: boolean,
  ExternalUrl: Array<string>,
  External: string
}
class ResearchPageNew extends React.Component<RouteComponentProps> {
  RoleUser = store.getState().userRole;
  controller = new ResearchController();
  UploadController = new UploadController();
  validator = new SimpleReactValidator({
    className: "text-danger",
  });
  state: StateType = {
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
    loading: false,
    ExternalUrl: [],
    External: ""
  };
  handleChange(target: string, val: any) {
    this.setState({
      [target]: val,
    });
  }

  handelChangeDate(target: string, params: any): void {
    this.setState({
      [target]: params,
    });
  }
  handelCreateResearch() {
    if (this.validator.allValid()) {
      const body = {
        title: this.state.title,
        description: this.state.description,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        currency: this.state.currency,
        priority: this.state.priority,
        teamsId: this.state.teamsId,
        usersId: this.state.usersId,
        status: 0,
      };
      this.setState({
        loading: true,
      });
      this.controller.createResearch(
        body,
        (res) => {
          this.handelUpload(res.id)
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
          this.props.history.push(`${AppRoutes.profile_research.replace(':id', res.id?.toString() ?? "")}`)
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
  handelChangeSelect(
    e: Array<{ label: string; value: number; isUser: boolean }>
  ) {
    this.setState({
      teamsId: e
        .filter((item) => item.isUser === false)
        .map((item) => item.value),
      usersId: e
        .filter((item) => item.isUser === true)
        .map((item) => item.value),
    });
  }
  componentDidMount() {
    this.controller.researchSearch((res) => {
      this.setState({
        listMembers: res,
      });
    });
  }
  async handelUpload(id: number) {
    const formData = new FormData()
    for (let i = 0; i < this.state.files.length; i++) {
      const file = this.state.files[i]
      formData.append('Files', file)
    }
    for (let i = 0; i < this.state.ExternalUrl.length; i++) {
      const file = this.state.ExternalUrl[i]
      formData.append('ExternalUrls', file)
    }

    formData.append('UseCase', '0')
    formData.append('ResearchId', id.toString())
    
    
    await this.UploadController.UloadMedia(formData, (res) => {
      this.setState({
        loading: false,
      });
    }, () => {
      this.setState({
        loading: false,
      });
    })
  }

  onDrop = (files: any) => {
    this.setState({ files });
  };
  handelDeleteFile(arg: File) {
    this.setState({
      files: this.state.files.filter(file => file.name !== arg.name)
    })
  }
  addExternalUrl() {
    let Url = [...this.state.ExternalUrl]
    Url.push(this.state.External)
    this.setState({
      ExternalUrl: Url,
      External: ''
    });
  }
  handelDeleteExternalLink(link:string){
    this.setState({
      ExternalUrl:this.state.ExternalUrl.filter(item=>item !== link)
    })
  }
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
        <CircleIcon type={ThemeCircleIcon.dark} width="22px" height="22px" onClick={() => {
          this.handelDeleteFile(file)
        }}>
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
            Create A New Research Project
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Research Name:"
                  popQuestion="Research Name:"
                  onChange={(e) => {
                    this.handleChange("title", e.target.value);
                  }}
                  inValid={this.validator.message(
                    "Research Name",
                    this.state.title,
                    "required"
                  )}
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
                    <i
                      className="fas fa-question"
                      title="Scheduled Timeline"
                    ></i>
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
                  name="Currency"
                  label="Currency"
                  popQuestion="Currency"
                  items={[
                    { name: "U.S. Dollar ($)", value: 0 },
                    { name: "Pounds ($)", value: 1 },
                    { name: "Euro (€)", value: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                  onChange={(e) => {
                    this.handleChange("currency", parseInt(e.target.value));
                  }}
                  inValid={this.validator.message(
                    "Currency",
                    this.state.currency,
                    "required"
                  )}
                ></RadioGroup>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Research Priority:"
                  popQuestion="Research Priority:"
                  name="ResearchPriority"
                  items={[
                    { name: "Low", value: 0 },
                    { name: "Medium", value: 1 },
                    { name: "High", value: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                  inValid={this.validator.message(
                    "Research Priority",
                    this.state.priority,
                    "required"
                  )}
                  onChange={(e) => {
                    this.handleChange("priority", parseInt(e.target.value));
                  }}
                ></ButtonGroup>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Research Description:"
                  optional="optional"
                  popQuestion="Research Description:"
                  className="mt-2"
                  onChange={(e) => {
                    this.handleChange("description", e.target.value);
                  }}
                ></InputComponent>
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
                        <ul>{files} </ul>
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
                  className="px-3 pointer"
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
                        onClick={()=>this.handelDeleteExternalLink(item)}
                      >
                        <img src="/images/icons/garbage_can.svg" alt="radvix" width={15} height={15} />
                      </CircleIcon>
                    </li>
                  ))
                }
              </ul>
              <div className="item">
                <SelectComponent
                  items={this.state.listMembers}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  placeholder="Click to see the list…"
                  label="Assign Teams (Members):"
                  popQuestion="Assign Teams (Members):"
                  optional="optional"
                  onChange={(e) => {
                    this.handelChangeSelect(e);
                  }}
                  isMulti
                ></SelectComponent>
              </div>
              <BoxAlert
                text=" No Member Has Been Added Yet! (You will automatically be added
                to this research)"
              ></BoxAlert>
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
                borderRadius="50px"
                fontSize="18px"
                className="mx-2"
                minHeight="43px"
                minWidth="136px"
                onClick={() => {
                  this.handelCreateResearch();
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
export default withRouter(ResearchPageNew);
