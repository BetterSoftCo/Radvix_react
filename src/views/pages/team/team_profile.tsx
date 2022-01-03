import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { withRouter, RouteComponentProps } from "react-router";
import { AppRoutes } from "../../../core/constants";
class TeamPageProfile extends React.Component<RouteComponentProps> {
  RoleUser = store.getState();

  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span
                onClick={() => {
                  window.history.back();
                }}
                className="backPage"
              ></span>{" "}
              {"Team Profile"}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-4 pointer"
                onClick={() => {
                  this.props.history.push(AppRoutes.team_edit);
                }}
              >
                <img src="/images/pages/edit.svg" alt="radvix" />
              </CircleIcon>
            </h5>
            <MainButton
              children="Discussion Panel"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              onClick={() => {
                this.props.history.push(AppRoutes.discussion);
              }}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">Material Testing Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Type</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children="Main Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#C3C3C3"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Team Managers</h6>
                <div className="col-8 t-desc">D. Jones</div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Subteams</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    <li>- Material Testing Team</li>
                    <li>- Tension Development Team</li>
                    <li>- 3D Printed Material Team</li>
                  </ul>
                </div>
              </div>
              <div className="teams my-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Projects"
                  children={
                    <img src="/images/pages/lamp.svg" className="mx-2" alt="" />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  <MainButton
                    children="Synergistic Effects of Air Content and Supplementary Cementitious Materials on Increasing Concrete Durability"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 pointer"
                    backgroundColor="#EBEBEB"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
                  ></MainButton>
                  <MainButton
                    children="Biophilic Concrete Development"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 pointer"
                    backgroundColor="#EBEBEB"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
                  ></MainButton>
                </div>
              </div>
              <div className="teams Labs">
                <IconTextRow
                  theme={Theme.dark}
                  text="Labs (Equipments)"
                  children={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.91"
                      height="28.365"
                      viewBox="0 0 23.91 28.365"
                      className="mx-2"
                    >
                      <g
                        id="Lab_Menu_Icon"
                        data-name="Lab Menu Icon"
                        transform="translate(-40.206 0)"
                      >
                        <path
                          id="Path_19"
                          data-name="Path 19"
                          d="M100.284,6.467H98V4.628a.831.831,0,0,0-.831-.831H97.11V1.662h.059a.831.831,0,0,0,0-1.662H91.828a.831.831,0,0,0,0,1.662h.059V3.8h-.059A.831.831,0,0,0,91,4.628v8.9a.831.831,0,0,0,.831.831h5.341A.831.831,0,0,0,98,13.529V11.69h2.284a4.065,4.065,0,0,1,0,8.129H89.158a.831.831,0,0,0-.831.831v4.391h11.957a9.3,9.3,0,0,0,9.287-9.287h0a9.3,9.3,0,0,0-9.287-9.287ZM97.169,11.69A2.611,2.611,0,1,1,99.78,9.078,2.614,2.614,0,0,1,97.169,11.69Z"
                          transform="translate(-45.455)"
                          fill="#000000"
                        />
                        <path
                          id="Path_20"
                          data-name="Path 20"
                          d="M156.984,290.862a.831.831,0,0,0,.831-.831V289.2h-5.222v.831a.831.831,0,0,0,.831.831Z"
                          transform="translate(-106.161 -273.178)"
                          fill="#000000"
                        />
                        <path
                          id="Path_21"
                          data-name="Path 21"
                          d="M57.055,482H41.033a.831.831,0,0,0,0,1.662H57.055A.831.831,0,0,0,57.055,482Z"
                          transform="translate(0 -455.297)"
                          fill="#000000"
                        />
                        <path
                          id="Path_22"
                          data-name="Path 22"
                          d="M231.743,146.733a.949.949,0,1,0,.949.949A.95.95,0,0,0,231.743,146.733Z"
                          transform="translate(-180.029 -138.604)"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 pointer"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 m-2"
                    onClick={() => {
                      this.props.history.push(AppRoutes.member_profile);
                    }}
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
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/layout/img_avatar.png",
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  Deletabel
                  onClick={() => {
                    this.props.history.push(AppRoutes.profile_laboratory);
                  }}
                  className="pointer"
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams Labs mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members)"
                  children={
                    <img
                      src="/Images/pages/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
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
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(TeamPageProfile);
