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
export class DiscusstionPage extends React.Component {
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
        <div className="col-12 box-content p-3 discusstion">
          <h5 className="b-title d-flex">
            <span onClick={()=>{window.history.back()}} className="backPage"></span> Question About The
            Thermogravimetric Results{" "}
            <MainButton
              children="Principal Investigator"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              className="mx-2"
              backgroundColor="#096BFF"
            ></MainButton>
          </h5>
          <div className="title-discusstion">
            This discussion is related to the task{" "}
            <span>
              Running TGA on XRDF Samples Using Plasma Extracted Samples.
            </span>
          </div>
          <div className="row mt-2 justify-content-around">
            <div className="col-md-7 chat">
              <div className="submit">
                <IconTextRow
                  theme={Theme.dark}
                  text="Nima Hosseinzadeh (Today, 11:23 AM)"
                  fontSize="14px"
                  className="fw-lighter"
                  children={
                    <img
                      src="/images/layout/img_avatar.png"
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width="40px"
                      height="40px"
                    />
                  }
                ></IconTextRow>
                <div className="submit-msg w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Received">
                <IconTextRow
                  theme={Theme.dark}
                  text="Nima Hosseinzadeh (Today, 11:23 AM)"
                  fontSize="14px"
                  className="fw-lighter"
                  children={
                    <img
                      src="/images/layout/img_avatar.png"
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width="40px"
                      height="40px"
                    />
                  }
                ></IconTextRow>
                <div className="Received-msg w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Received">
                <IconTextRow
                  theme={Theme.dark}
                  text="Nima Hosseinzadeh (Today, 11:23 AM)"
                  fontSize="14px"
                  className="fw-lighter"
                  children={
                    <img
                      src="/images/layout/img_avatar.png"
                      alt="Avatar"
                      className="rounded-circle avatar mx-2"
                      width="40px"
                      height="40px"
                    />
                  }
                ></IconTextRow>
                <div className="Received-msg w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 teams teams-light p-1">
              <div className="teams teams-light p-1 chat-teams-light mb-1">
                <div className="d-flex justify-content-between align-items-center">
                  <IconTextRow
                    theme={Theme.dark}
                    text="Users In This Discussion"
                    children={
                      <img
                        src="/Images/pages/team_menu.svg"
                        className="mx-2"
                        alt=""
                      />
                    }
                  ></IconTextRow>
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
                <BoxListScroll
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  className="mt-3"
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-7">
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Message:"
                  className="mt-2"
                  rows={6}
                ></InputComponent>
              </div>
            </div>
            <div className="col-md-4">
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
                                src="/Images/component/cloud_computing.svg"
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
                ></InputComponent>
                <CircleIcon
                  width="36px"
                  height="36px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#9D9D9D"
                  fontSize="18px"
                  color="#ffffff"
                  className="px-3"
                  
                >
                  <i className="fas fa-plus"></i>
                </CircleIcon>
              </div>
              <div>
                <MainButton
                  type={MainButtonType.dark}
                  children={"Send"}
                  borderRadius="50px"
                  fontSize="20px"
                  className="mx-2 mt-3 btn-block"
                  minHeight="47px"
                  minWidth="100%"
                ></MainButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
