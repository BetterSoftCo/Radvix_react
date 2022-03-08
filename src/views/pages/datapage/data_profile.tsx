import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { Theme } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { GetDataByIDResResult } from "../../../data/models/responses/data/get_by_id_data_res";
import { DataController } from "../../../controllers/data/data_controller";
interface RouteParams {
  appTaskId: string;
  dataid: string;
}
type StateType = {
  Data: GetDataByIDResResult;
};
class DataPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new DataController();
  state: StateType = {
    Data: {
      taskId: 0,
      taskTitle: "",
      subTaskId: 0,
      subTaskTitle: "",
      researchId: 0,
      taskCreatorUserId: "",
      taskCreatorFirstName: "",
      taskCreatorLastName: "",
      data: {
        id: 0,
        title: "",
        creatorUserId: "",
        creatorFirstName: "",
        creatorLastName: "",
        createdDate: new Date(),
        discussionId: 0,
        medias: [],
      },
      equipments: [],
      users: [],
    },
  };
  componentDidMount() {
    const search = this.props.location.search;
    const researchId = new URLSearchParams(search).get("researchId");
    this.controller.getDataById(
      {
        dataId: parseInt(this.props.match.params.dataid),
        researchId: parseInt(researchId ?? ""),
        appTaskId: parseInt(this.props.match.params.appTaskId),
      },
      (res) => {
        console.log(res);
      },
      (err) => {}
    );
  }

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
              {"Data Collection  > Data Profile"}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-1 pointer"
                onClick={() => {
                  this.props.history.push(AppRoutes.data_edit);
                }}
              >
                <img src="/images/icons/edit.svg" alt="radvix" />
              </CircleIcon>
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-1"
              >
                <img src="/images/icons/start_discussion.svg" alt="radvix" />
              </CircleIcon>
            </h5>
            <MainButton
              children="Discussion Panel"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              className="px-3"
              onClick={() => {
                this.props.history.push(AppRoutes.discussion);
              }}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">
              TGA Results and Exported Data on Soft Samples
            </h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">
                  Data Set Added by
                </h6>
                <div className="col-8 t-desc border-t-r">N. Hosseinzadeh</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Data Set Files</h6>
                <div className="col-8 t-desc">
                  <ul className="file-list">
                    <li>
                      <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      <img src="/images/icons/word_icon.svg" alt="" />{" "}
                      proposal_general.docx
                    </li>
                    <li>
                      <img src="/images/icons/excel_icon.svg" alt="" />{" "}
                      proposal_general.xlsx
                    </li>
                    <li>
                      <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      Shared Links: <br />
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
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Date</h6>
                <div className="col-8 t-desc">07/22/2021 21:24</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Data Description</h6>
                <div className="col-8 t-desc">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Task</h6>
                <div className="col-8 t-desc">Running TGA On XFG…</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">
                  Task Assigned by
                </h6>
                <div className="col-8 t-desc border-b-r">B. Forouzani</div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="teams teams-light Labs">
                <IconTextRow
                  theme={Theme.dark}
                  text="Equipments Used"
                  className="mb-2"
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

                <BoxListScroll
                default_photo="/Images/icons/equipment_Icon.svg"
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                ></BoxListScroll>
              </div>
              <div className="teams teams-light my-3 ">
                <IconTextRow
                  theme={Theme.dark}
                  text="Users with Access to this data set"
                  className="mb-2"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <BoxListScroll
                default_photo="/Images/icons/equipment_Icon.svg"
                  items={[
                    {
                      text: "Nima Hosseinzadeh",
                      id: 1,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 2,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                    {
                      text: "Nima Hosseinzadeh",
                      id: 3,
                      imagesrc: "/images/images/img_avatar.png",
                    },
                  ]}
                  TextItem="text"
                  ValueItem="id"
                  ImageItem="imagesrc"
                  className="mt-2 pointer"
                  onClick={() => {
                    this.props.history.push(AppRoutes.member_profile);
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
export default withRouter(DataPageProfile);
