import React from "react";
import { store } from "../../../data/store";
import { InputComponent, InputType } from "../../components/inputs";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { SelectComponent } from "../../components/select_input";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { BoxListScroll } from "../../components/box_list_scroll";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
class TeamPageEdit extends React.Component<RouteComponentProps> {
  RoleUser = store.getState();
  date = new Date();
  render() {
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
            Edit Team
          </h5>
          <div className="form row">
            <div className="col-md-6 left">
              <div className="item">
                <InputComponent
                  type={InputType.text}
                  label="Team Name:"
                  popQuestion="Research Name:"
                ></InputComponent>
              </div>

              <div className="item">
                <InputComponent
                  type={InputType.textarea}
                  label=" Description:"
                  optional="optional"
                  popQuestion=" Description:"
                  className="mt-2"
                ></InputComponent>
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
                  label=" Team Manager (s):"
                  popQuestion=" Team Manager (s):"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <BoxListScroll
                  className="mt-3 pointer"
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
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  onClick={() => {
                    this.props.history.push(AppRoutes.profile_laboratory);
                  }}
                ></BoxListScroll>
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
                  label="Add Members To This Team:"
                  popQuestion="Add Members To This Team:"
                  optional=""
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
                <BoxListScroll
                  className="mt-3 pointer"
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
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={() => {
                    console.log("ssssss");
                  }}
                  onClick={() => {
                    this.props.history.push(AppRoutes.profile_laboratory);
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
                  label="Assign Team To Labs (Equips):"
                  popQuestion="Assign Team To Labs (Equips):"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
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
                  className="mt-3 pointer"
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
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  DeleteFunc={() => {
                    console.log("ssssss");
                  }}
                  onClick={() => {
                    this.props.history.push(AppRoutes.profile_laboratory);
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
                  label="Assign Team To Projects:                  "
                  popQuestion="Assign Team To Projects:"
                  optional="optional"
                ></SelectComponent>
              </div>
              <div className="teams Labs mb-3">
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
                children={"save"}
                borderRadius="50px"
                fontSize="20px"
                className="mx-2"
                minHeight="47px"
                minWidth="110px"
                onClick={() => {
                  this.props.history.push(AppRoutes.team_profile);
                }}
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TeamPageEdit);
