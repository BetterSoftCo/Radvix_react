import React, { Fragment, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { UserRoles } from "../../../core/utils";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";

interface IAcordienTable {
  role: UserRoles;
  tasks: Array<{}>;
}

 const AcordienTable:React.FC<IAcordienTable & RouteComponentProps> = (props) => {
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
      <div className="accordion" id="accordion_resenttask">
       {['one','tow','three'].map((item , index)=>(
          <div className="accordion-item accordion-item-top" key={index}>
          <div className="accordion-header" id={`heading_resenttask${index}`}>
            <div
              className="accordion-button"
              data-bs-toggle="collapse"
              aria-expanded="true"
              data-bs-target={`#collapse_resenttask${index}`}
              aria-controls={`collapse_resenttask${index}`}
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
                    TGA issues with are...TGA issues with are...TGA issues with
                    are...
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
                <div className="col d-flex justify-content-between align-items-center">
                  {props.role !== UserRoles.level3 ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => props.history.push(AppRoutes.task_edit)}
                      className="pointer"
                    >
                      <img src="/images/pages/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}

                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <img src="/images/pages/start_discussion.svg" alt="radvix" />
                    
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => props.history.push(AppRoutes.task_profile)}
                    className="pointer"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id={`collapse_resenttask${index}`}
            className="accordion-collapse collapse "
            aria-labelledby={`heading_resenttask${index}`}
            data-bs-parent="#accordion_resenttask"
          >
            <div className="accordion-body">
              <div className="sub-accordian-parent justify-content-center">
              <p className="sub-accordion">Subtask</p> 
              </div>
             <div className="items">
             {[1,2,3].map((item,index)=>(
                <div className="row w-100 py-1 rounded" key={index}>
                <div className="col px-0">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    TGA issues with are...TGA issues with are...TGA issues with
                    are...
                  </span>
                </div>
                <div className="col">N. Hossein...</div>
                <div className="col px-0">K. Pourtorab</div>
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
        </div>
       ))}
       
      </div>
    </Fragment>
  );
};
export default withRouter(AcordienTable);
