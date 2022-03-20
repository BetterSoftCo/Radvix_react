import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface IAcordienTable {
  role: UserRoles;
  subTask: any[];
}
const Subtasks: React.FC<IAcordienTable & RouteComponentProps> = (props) => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col">Task Name</div>
        <div className="col">Created By</div>
        <div className="col">Assigned To</div>
        <div className="col">Deadline</div>
        <div className="col">Status</div>
        <div className="col"></div>
      </div>
      <div className="accordion" id="accordionResentTask">
        {props.subTask.map((item, index) => (
          <div className="accordion-item accordion-item-top" key={index}>
            <div className="accordion-header" id={`heading_resentTask${index}`}>
              <div
                className="accordion-button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target={`#collapse_resentTask${index}`}
                aria-controls={`collapse_resentTask${index}`}
              >
                <div className="row w-100  ">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                      title={item.appTask.title}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                        title={item.appTask.title}
                      ></span>{" "}
                      {item.appTask.title}
                    </span>
                  </div>
                  <div
                    className="col text-truncate"
                    title={
                      item.appTask.creatorFirstName +
                      " " +
                      item.appTask.creatorLastName
                    }
                  >
                    {item.appTask.creatorFirstName +
                      " " +
                      item.appTask.creatorLastName}
                  </div>
                  <div className="col text-truncate">
                    {item.teams
                      .map((item: { title: any }) => item.title)
                      .join("-")}
                  </div>
                  <div
                    className="col text-truncate"
                    title={moment(item.appTask.endDate).format("YYYY/MM/DD")}
                  >
                    {moment(item.appTask.endDate).format("YYYY/MM/DD")}
                  </div>
                  <div
                    className="col text-truncate"
                    title={item.appTask.status.isStatus()}
                  >
                    <MainButton
                      type={MainButtonType.dark}
                      children={item.appTask.status.isStatus()}
                      borderRadius="15px"
                      backgroundColor="#8EE1FF"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    {props.role !== UserRoles.L3User ? (
                      <CircleIcon
                        width="26px"
                        height="26px"
                        type={ThemeCircleIcon.dark}
                        onClick={(e) => {
                          props.history.push(
                            `${AppRoutes.task_edit.replace(
                              ":id",
                              item.appTask.id.toString() ?? ""
                            )}`
                          );
                        }}
                        className="pointer mx-1"
                      >
                        <img src="/images/icons/edit.svg" alt="radvix" />
                      </CircleIcon>
                    ) : null}

                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => {
                        props.history.push(
                          `${AppRoutes.task_edit.replace(
                            ":id",
                            item.appTask.id.toString() ?? ""
                          )}`
                        );
                      }}
                      className="pointer mx-1"
                    >
                      <img
                        src="/images/icons/start_discussion.svg"
                        alt="radvix"
                      />
                    </CircleIcon>
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => {
                        props.history.push(
                          `${AppRoutes.task_profile.replace(
                            ":id",
                            item.appTask.id.toString() ?? ""
                          )}`
                        );
                      }}
                      className="pointer mx-1"
                    >
                      <img
                        src="/images/icons/google_docs.svg"
                        alt="radvix"
                        width={12}
                        height={12}
                      />
                    </CircleIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default withRouter(Subtasks);
