import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
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
              ></span>
              {this.state.mainTeam.id === null
                ? "Team Profile"
                : "SubTeam Profile"}
              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
                UserRoles.L2User,
              ]) ? (
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
              ) : null}
            </h5>
            <MainButton
              children="Discussion Panel"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="12px"
              className="px-3"
              onClick={() => {
                this.props.history.push(
                  `${AppRoutes.discussion_new
                    .replace(":topic", "6")
                    .replace(":section", "11")}`
                );
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
                <h6 className="col-5 t-title mb-0 border-t-l">Type</h6>
                <div className="col-7 t-desc border-t-r">
                  <MainButton
                    children={
                      this.state.mainTeam.id !== null ? "Sub Team" : "Main Team"
                    }
                    type={MainButtonType.light}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#C3C3C3"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Team Managers</h6>
                <div className="col-7 t-desc">
                  {this.state.managers
                    .map((item) => item.firstName + " " + item.lastName)
                    .join(" - ")}
                </div>
              </div>
              {this.state.mainTeam.id === null ? (
                <div className="row border-bottom">
                  <h6 className="col-5 t-title mb-0 border-b-l">Subteams</h6>
                  <div className="col-7 t-desc border-b-r">
                    {" "}
                    <ul className="file-list">
                      {this.state.subTeams.map((item) => (
                        <li key={item.id}>- {item.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="row border-bottom">
                  <h6 className="col-5 t-title mb-0 border-b-l">Main Team</h6>
                  <div className="col-7 t-desc border-b-r">
                    {" "}
                    <ul className="file-list">
                      <li>- {this.state.mainTeam.title}</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="row teams my-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Projects"
                  children={
                    <img src="/images/icons/lamp.svg" className="mx-2" alt="" />
                  }
                  fontSize="12px"
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
                          this.props.history.push(
                            `${AppRoutes.profile_research.replace(
                              ":id",
                              item.id?.toString() ?? ""
                            )}`
                          );
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
                  fontSize="12px"
                  children={
                    <img
                      src="/images/icons/labs_equip.svg"
                      className="mx-2"
                      alt=""
                    />
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
                          this.props.history.push(
                            `${AppRoutes.member_profile.replace(
                              ":id",
                              item.id.toString()
                            )}`
                          );
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
                  onClick={(e, val) => {
                    this.props.history.push(
                      `${AppRoutes.equip_profile.replace(
                        ":id",
                        val.toString()
                      )}`
                    );
                  }}
                  className="pointer"
                ></BoxListScroll>
              </div>
            </div>
            <div className="col-md-6">
              <div className="teams Labs mb-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text={
                    AccessPermition(this.RoleUser, [
                      UserRoles.Admin,
                      UserRoles.L1Client,
                      UserRoles.L1User,
                    ])
                      ? "Teams (Members)"
                      : "SubTeam (Members)"
                  }
                  fontSize="12px"
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                  className="mb-2"
                ></IconTextRow>
                <BoxListScroll
                  default_photo="/Images/icons/user.svg"
                  className="mt-3 pointer"
                  items={this.state.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  onClick={(e, val) => {
                    this.props.history.push(
                      `${AppRoutes.member_profile.replace(
                        ":id",
                        val?.toString()
                      )}`
                    );
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
