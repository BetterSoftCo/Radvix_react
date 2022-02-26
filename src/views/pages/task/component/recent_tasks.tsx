import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { GetAllTasksResult } from "../../../../data/models/responses/task/get_all_tasks_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface IAcordienTable {
  role: UserRoles;
  Tasks: GetAllTasksResult[];
}
export const AcordienTable = (props: IAcordienTable) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    console.log(e);
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
      <div className="accordion" id="accordionResentTask">
        {props.Tasks.map((item, index) => (
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
                      {item.title}
                    </span>
                  </div>
                  <div className="col text-truncate">
                    {item.creatorFirstName + " " + item.creatorLastName}
                  </div>
                  <div className="col text-truncate">{}</div>
                  <div className="col text-truncate">
                    {moment(item.endDate).format("YYYY/MM/DD")}
                  </div>
                  <div className="col text-truncate">
                    <MainButton
                      type={MainButtonType.dark}
                      children={item.status.isStatus()}
                      borderRadius="15px"
                      backgroundColor="#8EE1FF"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    {props.role !== UserRoles.level3 ? (
                      <CircleIcon
                        width="26px"
                        height="26px"
                        type={ThemeCircleIcon.dark}
                        onClick={(e) => handelOnclick(e)}
                        className="pointer mx-1"
                      >
                        <img src="/images/icons/edit.svg" alt="radvix" />
                      </CircleIcon>
                    ) : null}

                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
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
                      onClick={(e) => handelOnclick(e)}
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
            {item.subTasks.length > 0 ? (
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
                    {item.subTasks.map((sub, index) => (
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
                            title
                          </span>
                        </div>
                        <div className="col">N. Hossein...</div>
                        <div className="col">K. Pourtorab</div>
                        <div className="col">07/22/2021</div>
                        <div className="col">
                          <MainButton
                            type={MainButtonType.dark}
                            children="1 message"
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
