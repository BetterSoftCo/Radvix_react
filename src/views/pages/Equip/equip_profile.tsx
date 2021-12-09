import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
export class EquipProfile extends React.Component {
  RoleUser = store.getState();

  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span onClick={()=>{window.history.back()}} className="backPage"></span> {"Equipment Profile"}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-4"
              >
                <i className="fas fa-edit"></i>
              </CircleIcon>
            </h5>
            <div className="d-flex justify-content-around align-items-center w-25">
              <MainButton
                children="Discussion Panel"
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
                <h6 className="col-4 t-title mb-0 border-t-l">Status</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children="Operational"
                    type={MainButtonType.dark}
                    borderRadius="42px"
                    fontSize="14px"
                    backgroundColor="#006EA8"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Laboratory</h6>
                <div className="col-8 t-desc">
                  <ul className="px-0">
                    <li>Structural and Materials Lab</li>
                    <li>Beshintash Science Lab</li>
                    <li>Steel Testing Lab</li>
                  </ul>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Manufacturer (Model)</h6>
                <div className="col-8 t-desc">TA Instruments (TA55)</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Warranty (Support)</h6>
                <div className="col-8 t-desc">
                  David Jones david.j@testmail.com +1 (235) 123 4567
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Protocols</h6>
                <div className="col-8 t-desc border-b-r">
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      <img src="/images/pages/word_icon.svg" alt="" />{" "}
                      proposal_general.docx
                    </li>
                    <li>
                      <img src="/images/pages/excel_icon.svg" alt="" />{" "}
                      proposal_general.xlsx
                    </li>
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      Shared Links:
                      <MainButton
                        children="https://drive.google.com/file/234234"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#F5F5F5"
                        color="#096BFF"
                      ></MainButton>
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
                  text="Teams (Members) With Access"
                  children={
                    <img
                      src="/Images/pages/team_menu.svg"
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
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3"
                  ></MainButton>
                  <MainButton
                    children="ACCESSLab Team"
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    className="px-3 m-2"
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
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
