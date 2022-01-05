import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { InputComponent, InputType } from "../../components/inputs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import Dropzone from "react-dropzone";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { BoxListScroll } from "../../components/box_list_scroll";
export class TaskPageEdit extends React.Component {
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
            <span onClick={()=>{window.history.back()}} className="backPage"></span> Edit Task
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <ButtonGroup
                  label="Task Status:"
                  popQuestion="Task Status:"
                  TextItem="name"
                  ValueItem="id"
                  name="TaskStatus"
                  items={[
                    { name: " On Hold", id: 1 },
                    { name: " On Going", id: 2 },
                    { name: "Completed", id: 3 },
                  ]}
                ></ButtonGroup>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Task Name:"
                  popQuestion="Task Name:"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Description:"
                  popQuestion="Description:"
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Task Priority:"
                  popQuestion="Task Priority:"
                  TextItem="name"
                  ValueItem="id"
                  name="TaskPriority"
                  items={[
                    { name: " Low", id: 1 },
                    { name: " Medium", id: 2 },
                    { name: "High", id: 3 },
                  ]}
                ></ButtonGroup>
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
                  <span className="mx-2">Until</span>
                  <DatePicker
                    selected={this.date}
                    onChange={this.handelChangeDate}
                  />
                </div>
              </div>
              <div className="item">
                <span className="label d-flex align-items-center">
                  Task Attachments:
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
                <ul className="file-list mt-3">
                  <li className="d-flex align-items-center mb-1">
                    <img src="/images/pages/pdf_icon.svg" alt="" className="mx-2" />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
                    </CircleIcon>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <img src="/images/pages/pdf_icon.svg" alt="" className="mx-2" />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
                    </CircleIcon>
                  </li>
                  <li className="d-flex align-items-center mb-1">
                    <img src="/images/pages/pdf_icon.svg" alt="" className="mx-2" />{" "}
                    proposal_general.pdf
                    <CircleIcon
                      type={ThemeCircleIcon.dark}
                      width="22px"
                      height="22px"
                      className="mx-3"
                    >
                      <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
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
                    <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
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
                    <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
                  </CircleIcon>
                </li>
              </ul>
            </div>
            <div className="col-md-6 right">
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Assign To Teams (Members):"
                  popQuestion="Assign To Teams (Members):"
                  optional="optional"
                  placeholder="Click to see the list…"
                ></SelectComponent>
              </div>

              <div className="teams mb-3">
                <div className="tags p-3">
                  <MainButton
                    backgroundColor="#EBEBEB"
                    className="tag-delete"
                    children={
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="flex-fill">ACCESSLab Team</span>
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                        >
                          <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
                        </CircleIcon>
                      </div>
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                  ></MainButton>
                  <MainButton
                    backgroundColor="#EBEBEB"
                    className="tag-delete"
                    children={
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="flex-fill">ACCESSLab Team</span>
                        <CircleIcon
                          type={ThemeCircleIcon.dark}
                          width="22px"
                          height="22px"
                        >
                          <img src="/images/pages/garbage_can.svg" alt="radvix" width={15} height={15} />
                        </CircleIcon>
                      </div>
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                  ></MainButton>
                </div>
                <BoxListScroll
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    console.log(p, value);
                  }}
                ></BoxListScroll>
              </div>
              <div className="item">
                <SelectComponent
                  items={[
                    { name: "test1", id: 1 },
                    { name: "test2", id: 2 },
                  ]}
                  TextItem="name"
                  ValueItem="id"
                  className="my-2"
                  label="Suggest Equipment:"
                  popQuestion="Suggest Equipment:"
                  optional="optional"
                  placeholder="Click to see the list…"
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
                <BoxListScroll
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: '/images/layout/img_avatar.png',
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={(p, value) => {
                    console.log(p, value);
                  }}
                ></BoxListScroll>
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
