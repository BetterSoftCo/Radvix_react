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
import { GetResearchByidResResult } from "../../../data/models/responses/research/research_by_id_res";
import { ResearchController } from "../../../controllers/research/research_controller";
import "../../../core/number_extentions";
import moment from "moment";
interface RouteParams {
  id: string;
}
type StateType = {
  Research: GetResearchByidResResult;
};
class ResearchPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new ResearchController();
  state: StateType = {
    Research: {
      id: 0,
      title: "",
      description: "",
      creatorUserFirstName: "",
      creatorUserLastName: "",
      startDate: new Date(),
      endDate: new Date(),
      currency: 0,
      priority: 0,
      status: 0,
      medias: [],
      users: [],
      teams: [],
      laboratories: [],
      equipments: [],
    },
  };
  componentDidMount() {
    this.controller.getResearchById(
      { id: parseInt(this.props.match.params.id) },
      (res) => {
        this.setState({
          Research: res,
        });
      },
      (err) => {}
    );
  }
  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="b-title d-flex align-items-center flex-wrap">
              <span
                onClick={() => {
                  window.history.back();
                }}
                className="backPage"
              ></span>{" "}
              {"Research List > Research Profile"}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-1 pointer"
                onClick={() => {
                  this.props.history.push(
                    `${AppRoutes.edit_research.replace(
                      ":id",
                      this.props.match.params.id
                    )}`
                  );
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
              >
                <i className="fas fa-history"></i>
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
            <h3 className="px-5 text-center">{this.state.Research.title}</h3>
            <p>{this.state.Research.description}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Priority</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children={
                      this.state.Research.priority.isPriority() +
                      " " +
                      "Priority"
                    }
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#096BFF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Created by</h6>
                <div className="col-8 t-desc">
                  {this.state.Research.creatorUserFirstName +
                    " " +
                    this.state.Research.creatorUserLastName}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Start - Deadline</h6>
                <div className="col-8 t-desc">
                  {moment(this.state.Research.startDate).format("YYYY/MM/DD") +
                    "-" +
                    moment(this.state.Research.endDate).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Date Completed</h6>
                <div className="col-8 t-desc">
                  {" "}
                  <MainButton
                    children={this.state.Research.status.isStatus()}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#8EE1FF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Attachments</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    {this.state.Research.medias
                      .filter((item) => item.externalUrl === null)
                      .map((item) => (
                        <li key={item.id}>
                          <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                          {item.name}
                        </li>
                      ))}
                    <li>
                      Shared Links:
                      {this.state.Research.medias
                        .filter((item) => item.externalUrl)
                        .map((item) => (
                          <div key={item.id}>
                            <MainButton
                              children={item.externalUrl}
                              type={MainButtonType.dark}
                              borderRadius="24px"
                              fontSize="14px"
                              backgroundColor="#F5F5F5"
                              color="#096BFF"
                            ></MainButton>
                          </div>
                        ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams mb-3">
                <IconTextRow
                  theme={Theme.dark}
                  text="Teams (Members)"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.Research.teams.map((item) => (
                    <div>
                      <MainButton
                        children={item.title}
                        backgroundColor="#EBEBEB"
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        onClick={() => {
                          this.props.history.push(AppRoutes.member_profile);
                        }}
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  items={this.state.Research.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  onClick={() => {
                    this.props.history.push(AppRoutes.member_profile);
                  }}
                  className="pointer"
                ></BoxListScroll>
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
                  {this.state.Research.laboratories.map((item) => (
                    <div>
                      <MainButton
                        children={item.title}
                        backgroundColor="#EBEBEB"
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        onClick={() => {
                          this.props.history.push(AppRoutes.member_profile);
                        }}
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  items={this.state.Research.equipments}
                  TextItem="title"
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
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ResearchPageProfile);
