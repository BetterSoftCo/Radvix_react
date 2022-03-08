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
import { GetTeamByIDResResult } from "../../../data/models/responses/team/get_by_id_res";
import { TeamController } from "../../../controllers/team/team_controller";
interface RouteParams {
  id: string;
}
class TeamPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new TeamController();
  state: GetTeamByIDResResult = {
    id: parseInt(this.props.match.params.id),
    title: "",
    description: "",
    discussionId: 0,
    creatorUserId: "",
    creatorUserFirstName: "",
    creatorUserLastName: "",
    memberCount: 0,
    managers: [],
    users: [],
    laboratories: [],
    equipments: [],
    researches: [],
    appTasks: [],
    subAppTasks: [],
    subTeams: [],
    mainTeam: { id: 0, title: "", users: [] },
  };
  componentDidMount() {
    this.controller.getByIdTeam(
      {
        teamId: this.state.id,
      },
      (res) => {
        this.setState({
          title: res.title,
          description: res.description,
          discussionId: res.discussionId,
          creatorUserId: res.creatorUserId,
          creatorUserFirstName: res.creatorUserFirstName,
          creatorUserLastName: res.creatorUserLastName,
          memberCount: res.memberCount,
          managers: res.managers,
          users: res.users,
          laboratories: res.laboratories,
          equipments: res.equipments,
          researches: res.researches,
          appTasks: res.appTasks,
          subAppTasks: res.subAppTasks,
          subTeams: res.subTeams,
          mainTeam: res.mainTeam,
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
                  this.props.history.push(
                    `${AppRoutes.team_edit.replace(
                      ":id",
                      this.props.match.params.id
                    )}`
                  );
                }}
              >
                <img src="/images/icons/edit.svg" alt="radvix" />
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
            <h3 className="px-5 text-center">{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Type</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children={
                      this.state.mainTeam !== null ? "Sub Team" : "Main Team"
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="14px"
                    backgroundColor="#C3C3C3"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Team Managers</h6>
                <div className="col-8 t-desc">
                  {this.state.managers
                    .map((item) => item.firstName + " " + item.lastName)
                    .join(" - ")}
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Subteams</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    {this.state.subTeams.map((item) => (
                      <li key={item.id}>- {item.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row teams my-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Projects"
                  children={
                    <img src="/images/icons/lamp.svg" className="mx-2" alt="" />
                  }
                ></IconTextRow>
                <div className="tags mt-2">
                  {this.state.researches.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
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
                  ))}
                </div>
              </div>
              <div className="row teams Labs teams-light">
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
                  {this.state.laboratories.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
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
                  ))}
                </div>
                <BoxListScroll
                default_photo="/Images/icons/equipment_Icon.svg"
                  items={this.state.equipments}
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
            <div className="col-md-6">
              <div className="teams Labs mb-3 teams-light">
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
                <BoxListScroll
                default_photo="/Images/icons/user.svg"
                  className="mt-3 pointer"
                  items={this.state.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
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
