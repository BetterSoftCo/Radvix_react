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
import { ButtonGroup } from "../../components/botton_group";
export class AdminTicket extends React.Component {
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
            <span className="backPage"></span>
            Question About The Thermogravimetric Results
            <MainButton
              children="High Priority"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              className="mx-2"
              backgroundColor="#096BFF"
              minWidth="100px"
            ></MainButton>
          </h5>
          <div className="title-discusstion">
            This ticket (#234532) is related to
            <span>
              Running TGA on XRDF Samples Using Plasma Extracted Samples.
            </span>
          </div>
          <div className="row mt-3">
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
            <div className="col-md-1"></div>

            <div className="col-md-4">
              <div className="item my-4">
                <ButtonGroup
                  name="AccessLevel"
                  label="Ticket Status"
                  items={[
                    { name: "Open ", value: 1 },
                    { name: "Closed", value: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                ></ButtonGroup>
              </div>
              <div className="teams mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <IconTextRow
                    theme={Theme.dark}
                    text="Members In The Loop"
                    children={
                      <img
                        src="/Images/pages/team_menu.svg"
                        className="mx-2"
                        alt=""
                      />
                    }
                  ></IconTextRow>
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
              <div className="row">
                <div className="col-md-7">
                  <div className="item">
                    <InputComponent
                      type={InputType.textarea}
                      label="Message:"
                      className="mt-2"
                    ></InputComponent>
                  </div>
                </div>
                <div className="col-md-1"></div>
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
                </div>
                <div className="12">
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
        </div>
      </div>
    );
  }
}