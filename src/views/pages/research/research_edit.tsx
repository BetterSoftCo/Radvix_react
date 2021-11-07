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
import { pdf_icon, team_menu_icon ,img_avatar} from "../../../assets";
class ResearchPageEdit extends React.Component<RouteComponentProps> {
  RoleUser = store.getState();
  date = new Date();
  handelChangeDate(params: any): void {
    console.log(params);
  }
  state = {
    files: [],
  };
  onDrop = (files: any) => {
    this.setState({ files });
    console.log(this.state);
  };
  render() {
    const files = this.state.files.map((file: any) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
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
            Create A New Research Project
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Research Name:"
                  popQuestion="Research Name"
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
                    selected={this.date}
                    onChange={this.handelChangeDate}
                  />
                  <DatePicker
                    selected={this.date}
                    onChange={this.handelChangeDate}
                  />
                </div>
              </div>
              <div className="item">
                <RadioGroup
                  label=" Currency:"
                  popQuestion="Currency"
                  TextItem="name"
                  ValueItem="id"
                  name="Currency"
                  items={[
                    { name: "U.S. Dollar ($)", id: 1 },
                    { name: " Pounds ($)", id: 2 },
                    { name: "Euro (€)", id: 3 },
                  ]}
                ></RadioGroup>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Research Priority:"
                  popQuestion="Research Priority"
                  TextItem="name"
                  ValueItem="id"
                  name="ResearchPriority"
                  items={[
                    { name: " Low", id: 1 },
                    { name: " Medium", id: 2 },
                    { name: "High", id: 3 },
                  ]}
                ></ButtonGroup>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  className="mt-3"
                  label="Research Description:"
                  popQuestion="Research Description:"
                  optional="optional"
                ></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Research Status:
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

                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio2"
                    id="Hold"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-dark" htmlFor="Hold">
                    On Hold
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio2"
                    id="Going"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-dark" htmlFor="Going">
                    On Going
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio2"
                    id="Completed"
                    autoComplete="off"
                  />
                  <label className="btn btn-outline-dark" htmlFor="Completed">
                    Completed
                  </label>
                </div>
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
                        <p>
                          Drag 'n' drop some files here, or click to select
                          files
                        </p>
                      </div>
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </section>
                  )}
                </Dropzone>
                <ul className="file-list mt-3">
                  <li className="d-flex align-items-center mb-1">
                    <img
                      src={pdf_icon}
                      alt=""
                      className="mx-2"
                    />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <img
                      src={pdf_icon}
                      alt=""
                      className="mx-2"
                    />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <img
                      src={pdf_icon}
                      alt=""
                      className="mx-2"
                    />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </li>
                </ul>
              </div>
              <div className="item d-flex justify-content-between align-items-center">
                <InputComponent
                  type={InputType.text}
                  placeholder="https://"
                ></InputComponent>
                <CircleIcon
                  width="36px"
                  height="36px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#9D9D9D"
                  fontSize="18px"
                  color="#ffffff"
                  className="mx-2"
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <ul className="file-list mt-3">
                <li className="my-2 d-flex flex-column flex-md-row">
                  <MainButton
                    children="https://drive.google.com/file/234234"
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
                    className="mx-3"
                  >
                    <i className="fas fa-trash"></i>
                  </CircleIcon>
                </li>
                <li className="my-2 d-flex flex-column flex-md-row">
                  <MainButton
                    children="https://drive.google.com/file/234234"
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
                    className="mx-3"
                  >
                    <i className="fas fa-trash"></i>
                  </CircleIcon>
                </li>
              </ul>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Assign Teams (Members):"
                  popQuestion="Assign Teams (Members):"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members)"
                  children={
                    <img
                      src={team_menu_icon}
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  <MainButton
                    children={
                      <div className="d-flex">
                        ACCESSLab Team
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                          className="mx-3"
                        >
                          <i className="fas fa-trash"></i>
                        </CircleIcon>
                      </div>
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                  ></MainButton>
                  <MainButton
                    children={
                      <div className="d-flex">
                        ACCESSLab Team
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                          className="mx-3"
                        >
                          <i className="fas fa-trash"></i>
                        </CircleIcon>
                      </div>
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                  ></MainButton>
                </div>
                <BoxListScroll
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc:{img_avatar},
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc:{img_avatar},
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc:{img_avatar},
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={(p , value)=>{console.log(p , value);
                  }}
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Cancel"}
                borderRadius="50px"
                fontSize="20px"
                className="mx-2"
                minHeight="47px"
                minWidth="110px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Save"}
                borderRadius="50px"
                fontSize="20px"
                className="mx-2"
                minHeight="47px"
                minWidth="110px"
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ResearchPageEdit);