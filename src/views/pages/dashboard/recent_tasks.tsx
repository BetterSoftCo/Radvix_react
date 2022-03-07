import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { UserRoles } from "../../../core/utils";
import { AppTask } from "../../../data/models/responses/task/get_all_tasks_res";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";

interface IAcordienTable {
  role: UserRoles;
  tasks: AppTask[];
}

 const AcordienTable:React.FC<IAcordienTable & RouteComponentProps> = (props) => {
  const handelOnclick = (e: any , id:number) => {
    e.stopPropagation();
    props.history.push(
      `${AppRoutes.task_edit.replace(":id", id.toString() ?? "")}`
    );
  };
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
      <div className="accordion" id="accordion_resenttask">
       {props.tasks.map((item , index)=>(
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
                  >
                    <span
                      className="lable"
                      style={{ backgroundColor: "#096BFF" }}
                    ></span>{" "}
                    {item.appTask.title}
                  </span>
                </div>
                <div className="col text-truncate">
                  {item.appTask.creatorFirstName +
                    " " +
                    item.appTask.creatorLastName}
                </div>
                <div className="col text-truncate">
                  {item.appTask.teams.map((item) => item.title).join("-")}
                </div>
                <div className="col text-truncate">
                  {moment(item.appTask.endDate).format("YYYY/MM/DD")}
                </div>
                <div className="col text-truncate">
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
                      onClick={(e) => handelOnclick(e , item.appTask.id)}
                      className="pointer mx-1"
                    >
                      <img src="/images/icons/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}

                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e , item.appTask.id)}
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
                    onClick={(e) => handelOnclick(e , item.appTask.id)}
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
          {item.subAppTasks.length > 0 ? (
            <div
              className="accordion-collapse collapse "
              id={`collapse_resentTask${index}`}
              aria-labelledby={`heading_resentTask${index}`}
              data-bs-parent="#accordionResentTask"
            >
              <div className="accordion-body ">
                <div className="sub-accordian-parent">
                  <p
                    className="sub-accordion"
                    style={{ marginRight: "-7px" }}
                  >
                    Subtask
                  </p>
                </div>
                <div className="items">
                  {item.subAppTasks.map((sub, index) => (
                    <div className="row w-100 py-2 rounded" key={index}>
                      <div className="col">
                        <span
                          className="text-truncate d-inline-block"
                          style={{ maxWidth: "120px" }}
                        >
                          <span
                            className="lable"
                            style={{ backgroundColor: "#096BFF" }}
                          ></span>{" "}
                          {sub.title}
                        </span>
                      </div>
                      <div className="col text-truncate">
                        {sub.creatorFirstName + " " + sub.creatorLastName}
                      </div>
                      <div className="col text-truncate">
                        {sub.teams.map((item) => item.title).join("-")}
                      </div>
                      <div className="col text-truncate">
                        {moment(sub.endDate).format("YYYY/MM/DD")}
                      </div>
                      <div className="col text-truncate">
                        <MainButton
                          type={MainButtonType.dark}
                          children={sub.status.isStatus()}
                          borderRadius="15px"
                          backgroundColor="#8EE1FF"
                          color="#474747"
                        ></MainButton>
                      </div>
                      <div className="col d-flex justify-content-between align-items-center"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
       ))}
       
      </div>
    </Fragment>
  );
};
export default withRouter(AcordienTable);
