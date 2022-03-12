import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { IconTextRow } from "../../components/icon_text_horizontal";
import { AccessPermition, Theme, UserRoles } from "../../../core/utils";
import { BoxListScroll } from "../../components/box_list_scroll";
import { InputIcon } from "../../components/search_box";
import { SelectComponent } from "../../components/select_input";
import { TaskDataCollection } from "./component/task_data_collection";
import Subtasks from "./component/subtasks";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { TaskController } from "../../../controllers/task/task_controller";
import { GetTaskByIDResult } from "../../../data/models/responses/task/get_task_by_id_res";
import moment from "moment";
interface RouteParams {
  id: string;
}
class TaskPageProfile extends React.Component<
  RouteComponentProps<RouteParams>
> {
  RoleUser = store.getState().userRole;
  controller = new TaskController();
  state: GetTaskByIDResult = {
    id: parseInt(this.props.match.params.id),
    creatorUserId: "",
    title: "",
    creatorFirstName: "",
    creatorLastName: "",
    users: [],
    teams: [],
    equipments: [],
    datas: [],
    subTasks: [],
    medias: [],
    endDate: new Date(),
    startDate: new Date(),
    status: 0,
    discription: "",
    priority: 0,
    researchId: 0,
    parentTask: null
  };
  componentDidMount() {
    this.controller.getTaskById(
      {
        TaskId: parseInt(this.props.match.params.id),
      },
      (res) => {
        this.setState({
          id: parseInt(this.props.match.params.id),
          creatorUserId: res.creatorUserId,
          title: res.title,
          creatorFirstName: res.creatorFirstName,
          creatorLastName: res.creatorLastName,
          parentTask: res.parentTask,
          users: res.users,
          teams: res.teams,
          equipments: res.equipments,
          datas: res.datas,
          subTasks: res.subTasks,
          medias: res.medias,
          endDate: res.endDate,
          startDate: res.startDate,
          status: res.status,
          priority: res.priority,
          discription: res.discription,
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
              {this.state.parentTask === null
                ? "Task Profile"
                : "Subask Profile"}
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
                  className="mx-1 pointer"
                  onClick={() => [
                    this.props.history.push(
                      `${AppRoutes.task_edit.replace(
                        ":id",
                        this.state.id.toString() ?? ""
                      )}`
                    ),
                  ]}
                >
                  <img src="/images/icons/edit.svg" alt="radvix" />
                </CircleIcon>
              ) : null}
              <CircleIcon
                width="22px"
                height="22px"
                type={ThemeCircleIcon.dark}
                backgroundColor="#474747"
                fontSize="10px"
                color="#ffff"
                className="mx-1 pointer"
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
            <h3 className="px-5 text-center">{this.state.title}</h3>
            <p>{this.state.discription}</p>
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Priority</h6>
                <div className="col-8 t-desc border-t-r">
                  <MainButton
                    children={this.state.priority.isPriority()}
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
                  {this.state.creatorFirstName +
                    " " +
                    this.state.creatorLastName}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Start - Deadline</h6>
                <div className="col-8 t-desc">
                  {moment(this.state.startDate).format("YYYY/MM/DD")} -{" "}
                  {moment(this.state.endDate).format("YYYY/MM/DD")}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Date Completed</h6>
                <div className="col-8 t-desc">
                  {" "}
                  <MainButton
                    children={this.state.status.isStatus()}
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
                    {this.state.medias
                      .filter((item) => !item.externalUrl)
                      .map((item) => (
                        <li key={item.id}>
                          <img src="/images/icons/pdf_icon.svg" alt="" />{" "}
                          {item.title}
                        </li>
                      ))}

                    <li>
                      Shared Links:
                      {this.state.medias
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
              <div className="teams mb-3 teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text={this.state.parentTask === null
                    ? "Assigned to Teams (Members)"
                    : "Assigned to SubTeams (Members)"}
                  children={
                    <img
                      src="/images/icons/team_menu.svg"
                      className="mx-2"
                      alt=""
                    />
                  }
                ></IconTextRow>
                <div className="tags p-3">
                  {this.state.teams.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
                        backgroundColor="#EBEBEB"
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        onClick={() => [
                          this.props.history.push(
                            `${AppRoutes.team_profile.replace(
                              ":id",
                              item.id.toString() ?? ""
                            )}`
                          ),
                        ]}
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  items={this.state.users}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="image"
                  default_photo="/Images/icons/user.svg"
                  onClick={(e, val) => {
                    this.props.history.push(
                      `${AppRoutes.member_profile.replace(
                        ":id",
                        val.toString() ?? ""
                      )}`
                    );
                  }}
                ></BoxListScroll>
              </div>
              <div className="teams Labs teams-light">
                <IconTextRow
                  theme={Theme.dark}
                  text="Suggested Equipment"
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
                  {this.state.equipments.map((item) => (
                    <div key={item.id}>
                      <MainButton
                        children={item.title}
                        backgroundColor="#EBEBEB"
                        type={MainButtonType.light}
                        borderRadius="24px"
                        fontSize="14px"
                        onClick={() => {
                          this.props.history.push(
                            `${AppRoutes.equip_profile.replace(
                              ":id",
                              item.id.toString() ?? ""
                            )}`
                          );
                        }}
                      ></MainButton>
                    </div>
                  ))}
                </div>
                <BoxListScroll
                  items={this.state.equipments}
                  TextItem="title"
                  ValueItem="id"
                  ImageItem="image"
                  default_photo="/Images/icons/equipment_Icon.svg"
                  onClick={(e, val) => {
                    this.props.history.push(
                      `${AppRoutes.equip_profile.replace(
                        ":id",
                        val.toString() ?? ""
                      )}`
                    );
                  }}
                ></BoxListScroll>
              </div>
            </div>
          </div>
        </div>
        {this.state.datas.length ? (
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center">
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "45%" }}>Task Data Collection</h6>
                  <InputIcon
                    chilren={
                      <img
                        src="/images/icons/search_box_icon.svg"
                        alt="radvix"
                      />
                    }
                    width="100%"
                    placeholder="Search..."
                    TopPosition="15%"
                  ></InputIcon>
                </div>
                <div className="right w-50 d-flex justify-content-end align-items-center">
                  <SelectComponent
                    width="90px"
                    height="44px"
                    items={[
                      { label: "10", value: 10 },
                      { label: "15", value: 15 },
                      { label: "20", value: 20 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                    isMulti={false}
                    placeholder={"10"}
                  ></SelectComponent>
                </div>
              </div>
              <TaskDataCollection
                Items={this.state.datas}
                Heading={["Data Name", "File", "Added By", "Date"]}
              ></TaskDataCollection>
              <div className="d-flex justify-content-center align-items-center">
                {/* <ReactPaginate
                previousLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </CircleIcon>
                }
                nextLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-angle-right"></i>
                  </CircleIcon>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={() => {
                  console.log("sssss");
                }}
                containerClassName={"pagination"}
                activeClassName={"active"}
              /> */}
              </div>
            </div>
          </div>
        ) : null}

        {this.state.subTasks.length ? (
          <div className="col-12">
            <div className="TableBox">
              <div className="TopTableBox d-flex justify-content-between align-items-center">
                <div className="left d-flex w-50 align-items-center">
                  <h6 style={{ width: "35%" }}>Subtasks</h6>
                  <InputIcon
                    chilren={
                      <img
                        src="/images/icons/search_box_icon.svg"
                        alt="radvix"
                      />
                    }
                    width="100%"
                    placeholder="Search..."
                    TopPosition="15%"
                  ></InputIcon>
                </div>
                <div className="right w-50 d-flex justify-content-end align-items-center">
                  <SelectComponent
                    width="90px"
                    height="44px"
                    items={[
                      { label: "10", value: 10 },
                      { label: "15", value: 15 },
                      { label: "20", value: 20 },
                    ]}
                    TextItem="item"
                    ValueItem="id"
                    isMulti={false}
                    placeholder={"10"}
                  ></SelectComponent>
                </div>
              </div>
              <Subtasks
                role={this.RoleUser}
                subTask={this.state.subTasks}
              ></Subtasks>
              <div className="d-flex justify-content-center align-items-center">
                {/* <ReactPaginate
                previousLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </CircleIcon>
                }
                nextLabel={
                  <CircleIcon
                    width="24px"
                    backgroundColor="#ADADAD"
                    height="24px"
                    type={ThemeCircleIcon.dark}
                  >
                    <i className="fas fa-angle-right"></i>
                  </CircleIcon>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={() => {
                  console.log("ssss");
                }}
                containerClassName={"pagination"}
                activeClassName={"active"}
              /> */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default withRouter(TaskPageProfile);
