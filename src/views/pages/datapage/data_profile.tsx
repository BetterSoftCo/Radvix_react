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
import moment from "moment";
interface RouteParams {
  appTaskId: string;
  dataid: string;
}
class DataPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new DataController();
  state: GetDataByIDResResult = {
    taskId: 0,
    taskTitle: "",
    description: "",
    subTaskId: null,
    subTaskTitle: null,
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
        this.setState({
          taskId: res.taskId,
          taskTitle: res.taskTitle,
          description: res.description,
          subTaskId: res.subTaskId,
          subTaskTitle: res.subTaskTitle,
          researchId: res.researchId,
          taskCreatorUserId: res.taskCreatorUserId,
          taskCreatorFirstName: res.taskCreatorFirstName,
          taskCreatorLastName: res.taskCreatorLastName,
          data: res.data,
          equipments: res.equipments,
          users: res.users,
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
                  this.props.history.push(
                    this.props.location.pathname.replace("profile", "Edit") +
                      this.props.location.search
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
                className="mx-1"
              >
                <img src="/images/icons/start_discussion.svg" alt="radvix" />
              </CircleIcon>
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
                    .replace(":topic", "3")
                    .replace(":section", "6")}`
                );
              }}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">{this.state.taskTitle}</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-5 t-title mb-0 border-t-l">
                  Data Set Added by
                </h6>
                <div className="col-7 t-desc border-t-r">
                  {this.state.data.creatorFirstName +
                    " " +
                    this.state.data.creatorLastName}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Data Set Files</h6>
                <div className="col-7 t-desc">
                  <ul className="file-list">
                    {this.state.data.medias
                      .filter((media) => media.externalUrl === null)
                      .map((item) => (
                        <li>
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
                      {this.state.data.medias
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
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Date</h6>
                <div className="col-7 t-desc">
                  {moment(this.state.data.createdDate).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Data Description</h6>
                <div className="col-7 t-desc">{this.state.description}</div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0">Task</h6>
                <div className="col-7 t-desc">{this.state.taskTitle}</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-5 t-title mb-0 border-b-l">
                  Task Assigned by
                </h6>
                <div className="col-7 t-desc border-b-r">
                  {this.state.users.join(" - ")}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="teams teams-light Labs">
                <IconTextRow
                  theme={Theme.dark}
                  text="Equipments Used"
                  className="mb-2"
                  children={
                    <img
                      src="/images/icons/labs_equip.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                  fontSize="12px"
                ></IconTextRow>

                <BoxListScroll
                  default_photo="/Images/icons/equipment_Icon.svg"
                  items={this.state.equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="image"
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
                  fontSize="12px"
                ></IconTextRow>
                <BoxListScroll
                  default_photo="/Images/icons/user.svg"
                  items={this.state.users}
                  TextItem="firstName"
                  ValueItem="id"
                  ImageItem="image"
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
