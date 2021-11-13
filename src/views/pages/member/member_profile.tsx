import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
export class MemberPageProfile extends React.Component {
  RoleUser = store.getState();

  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span className="backPage"></span> {"Lab Profile"}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-4"
              >
                <i className="fas fa-history"></i>
              </CircleIcon>
            </h5>
           <div className="d-flex justify-content-around align-items-center w-25">
           <MainButton
              children="Contact Lisa"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
            ></MainButton>
             <MainButton
              children="Edit My Profile"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
            ></MainButton>
           </div>
          </div>
          <div className="Studying p-4 my-2 d-flex flex-column justify-content-center align-items-center">
            <img
              src="/images/layout/img_avatar.png"
              alt="Avatar"
              className="rounded-circle avatar"
              width="125px"
              height="125px"
            />

            <h3 className="px-5 text-center">Lisa Oberst</h3>
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
                <h6 className="col-4 t-title mb-0 border-t-l">Role</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children="Researcher In Training"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Academic Background</h6>
                <div className="col-8 t-desc">
                  PhD (Civil Engineering) University of Miami
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Reports to</h6>
                <div className="col-8 t-desc">P. Suraneni</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Joined Radvix</h6>
                <div className="col-8 t-desc">08/12/2020</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Contact</h6>
                <div className="col-8 t-desc border-b-r">
                  Beshiktash Institute of Tech 9863 Greystone Street Upland, CA
                  91784 nimah@testmail.com +1 (235) 123 4567
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Public Resume</h6>
                <div className="col-8 t-desc border-b-r">
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Links</h6>
                <div className="col-8 t-desc border-b-r">
                  <ul className="file-list">
                    <li>
                      <img
                        src="/images/pages/linkedIn_logo_initials.png"
                        alt=""
                      />{" "}
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
                    </li>
                    <li>
                      <img
                        src="/images/pages/linkedIn_logo_initials.png"
                        alt=""
                      />{" "}
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
                    </li>
                    <li>
                      <img
                        src="/images/pages/linkedIn_logo_initials.png"
                        alt=""
                      />{" "}
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Subteams"
                  children={
                    <img
                      src="/Images/pages/team_menu_icon.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 m-2"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                </div>
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Projects"
                  children={
                    <img
                      src="/Images/pages/lamp.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 m-2"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                </div>
              </div>
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Laboratory (Equipment)"
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
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                    backgroundColor="#EBEBEB"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 m-2"
                    backgroundColor="#EBEBEB"
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
