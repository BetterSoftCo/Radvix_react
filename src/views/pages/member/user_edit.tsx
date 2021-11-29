import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { ButtonGroup } from "../../components/botton_group";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import { BoxListScroll } from "../../components/box_list_scroll";
export class MemberPageUseEdit extends React.Component {
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
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <h5 className="b-title d-flex">
            <span onClick={()=>{window.history.back()}} className="backPage"></span> Edit Member Access
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="User Email:"
                  popQuestion="User Email:"
                ></InputComponent>
              </div>
              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label="Update Note:"
                  popQuestion="Update Note:"
                  optional="optional"
                  className="mt-2"
                ></InputComponent>
              </div>
              <div className="item">
                <ButtonGroup
                  label="Access Level:"
                  popQuestion="Access Level:"
                  name="AccessLevel"
                  items={[
                    { name: "Level 1 ", value: 1 },
                    { name: "Level 2 ", value: 2 , disable:true },
                  ]}
                  TextItem="name"
                  ValueItem="value"
                ></ButtonGroup>
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
                  placeholder="Research Assistant"
                ></SelectComponent>
              </div>
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
                  placeholder="Click to see the list…"
                  label="Add Member To Teams"
                  popQuestion="Add Member To Teams"
                ></SelectComponent>
              </div>
              <div className="teams Labs">
               
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
                  placeholder="Click to see the list…"
                  label="Assign Member To Labs (Equips)"
                  popQuestion="Assign Member To Labs (Equips)"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams mb-3">
               
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
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadehgg",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
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
                  placeholder="Click to see the list…"
                  label="Assign Member To Projects"
                  popQuestion="Assign Member To Projects"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams Labs">
               
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
                children={"Update"}
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
