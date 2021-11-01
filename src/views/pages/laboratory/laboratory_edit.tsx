import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
export class LaboratoryPageEdit extends React.Component {
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
            <span className="backPage"></span> Create A New Laboratory
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <span className="label d-flex align-items-center">
                  Laboratory Name:
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

                <InputComponent type={InputType.text}></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Category:
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
                <div className="d-flex justify-content-between align-items-center">
                  <InputComponent
                    type={InputType.select}
                    items={[
                      { name: "test1", id: 1 },
                      { name: "test2", id: 2 },
                    ]}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2"
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
                    <i className="fas fa-list"></i>
                  </CircleIcon>
                </div>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Website:
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

                <InputComponent type={InputType.text}></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Description:
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

                <textarea
                  style={{ height: "100px", marginTop: "1rem" }}
                  className="form-control"
                  id="floatingTextarea"
                ></textarea>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Lab Manager(s):
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

                <InputComponent
                  type={InputType.select}
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                ></InputComponent>
              </div>
              <div className="item d-flex justify-content-center align-items-center box-alert">
                No Member Has Been Added Yet! (You will automatically be added
                to this research)
              </div>
              <div className="teams mb-3 mt-3 team-edit">
                <div className="team-list">
                  <div className="d-flex justify-content-between align-items-center">
                    <IconTextRow
                      theme={Theme.light}
                      children={
                        <img
                          src="/images/layout/img_avatar.png"
                          alt="Avatar"
                          className="rounded-circle avatar"
                        />
                      }
                      text="Nima Hosseinzadeh"
                      className="my-2"
                    ></IconTextRow>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <IconTextRow
                      theme={Theme.light}
                      children={
                        <img
                          src="/images/layout/img_avatar.png"
                          alt="Avatar"
                          className="rounded-circle avatar"
                        />
                      }
                      text="Nima Hosseinzadeh"
                      className="my-2"
                    ></IconTextRow>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <IconTextRow
                      theme={Theme.light}
                      children={
                        <img
                          src="/images/layout/img_avatar.png"
                          alt="Avatar"
                          className="rounded-circle avatar"
                        />
                      }
                      text="Nima Hosseinzadeh"
                      className="my-2"
                    ></IconTextRow>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <IconTextRow
                      theme={Theme.light}
                      children={
                        <img
                          src="/images/layout/img_avatar.png"
                          alt="Avatar"
                          className="rounded-circle avatar"
                        />
                      }
                      text="Nima Hosseinzadeh"
                      className="my-2"
                    ></IconTextRow>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <IconTextRow
                      theme={Theme.light}
                      children={
                        <img
                          src="/images/layout/img_avatar.png"
                          alt="Avatar"
                          className="rounded-circle avatar"
                        />
                      }
                      text="Nima Hosseinzadeh"
                      className="my-2"
                    ></IconTextRow>
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <i className="fas fa-trash"></i>
                    </CircleIcon>
                  </div>
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
                      src="/images/pages/PDF Icon.svg"
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
                      src="/images/pages/PDF Icon.svg"
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
                      src="/images/pages/PDF Icon.svg"
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
                <span className="label d-flex align-items-center">
                  Address: <br /> Institution/Company
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

                <InputComponent type={InputType.text}></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Address Line 1
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

                <InputComponent type={InputType.text}></InputComponent>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Address Line 2
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

                <InputComponent type={InputType.text}></InputComponent>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <span className="label d-flex align-items-center">City</span>

                  <InputComponent type={InputType.text}></InputComponent>
                </div>
                <div className="item col-md-6">
                  <span className="label d-flex align-items-center">
                    State/Province
                  </span>

                  <InputComponent type={InputType.text}></InputComponent>
                </div>
              </div>
              <div className="row">
                <div className="item col-md-6">
                  <span className="label d-flex align-items-center">
                    ZIP/Postal Code
                  </span>

                  <InputComponent type={InputType.text}></InputComponent>
                </div>
                <div className="item col-md-6">
                  <span className="label d-flex align-items-center">Phone</span>

                  <InputComponent type={InputType.text}></InputComponent>
                </div>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">Country</span>

                <InputComponent
                  type={InputType.select}
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                ></InputComponent>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center my-4">
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
                children={"Create"}
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
