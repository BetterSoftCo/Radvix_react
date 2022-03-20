import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
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
      <div className="container-fluid timeline_research research new-research">
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
              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
              ]) ? (
                <CircleIcon
                  width="22px"
                  height="22px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#474747"
                  fontSize="10px"
                  color="#ffff"
                  className="mx-2 pointer"
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
              ) : null}
              {AccessPermition(this.RoleUser, [
                UserRoles.Admin,
                UserRoles.L1Client,
                UserRoles.L1User,
              ]) ? (
                <CircleIcon
                  width="22px"
                  height="22px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#474747"
                  fontSize="10px"
                  color="#ffff"
                  className="mx-1"
                >
                  <i className="fas fa-history"></i>
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
                    .replace(":topic", "0")
                    .replace(":section", "1")}`
                );
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
                <h6 className="col-5 t-title mb-0 border-t-l">Priority</h6>
                <div className="col-7 t-desc border-t-r">
                  <MainButton
                    children={
                      this.state.Research.priority.isPriority() +
                      " " +
                      "Priority"
                    }
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#096BFF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Created by</h6>
                <div className="col-7 t-desc">
                  {this.state.Research.creatorUserFirstName +
                    " " +
                    this.state.Research.creatorUserLastName}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Start - Deadline</h6>
                <div className="col-7 t-desc">
                  {moment(this.state.Research.startDate).format("YYYY/MM/DD") +
                    "-" +
                    moment(this.state.Research.endDate).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Date Completed</h6>
                <div className="col-7 t-desc">
                  {" "}
                  <MainButton
                    children={this.state.Research.status.isStatus()}
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="11px"
                    backgroundColor="#8EE1FF"
                  ></MainButton>
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">Attachments</h6>
                <div className="col-7 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    {this.state.Research.medias
                      .filter((item) => item.externalUrl === null)
                      .map((item) => (
                        <li key={item.id}>
                          <img
                            src={`/images/icons/${item.inputDataType.isMedia()}`}
                            alt=""
                            width={20}
                            height={20}
                          />{" "}
                          {item.title}
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
                              className="col-8 text-truncate" 
                              title={item.externalUrl}
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
                  fontSize="12px"
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
                          this.props.history.push(
                            `${AppRoutes.team_profile.replace(
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
                  default_photo="/Images/icons/user.svg"
                  items={this.state.Research.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
                  Deletabel
                  onClick={(e, value) => {
                    this.props.history.push(
                      `${AppRoutes.member_profile.replace(
                        ":id",
                        value.toString()
                      )}`
                    );
                  }}
                  className="pointer"
                ></BoxListScroll>
              </div>
              <div className="teams Labs">
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
                  default_photo="/Images/icons/equipment_Icon.svg"
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
