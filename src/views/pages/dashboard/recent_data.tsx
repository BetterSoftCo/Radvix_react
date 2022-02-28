import React, { Fragment, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { MainButton, MainButtonType } from "../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";

const AcordienTableData: React.FC<RouteComponentProps> = (props) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    console.log(e);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col">Data Set</div>
        <div className="col text-center">Files</div>
        <div className="col text-center">Added By</div>
        <div className="col text-center">Date</div>
        <div className="col text-center"></div>
      </div>
      <div className="accordion" id="accordionData">
        {["one", "tow", "three"].map((item, index) => (
          <div className="accordion-item accordion-item-top" key={index}>
            <div className="accordion-header" id={`heading_resentdata${index}`}>
              <div
                className="accordion-button"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target={`#collapse_resentdata${index}`}
                aria-controls={`collapse_resentdata${index}`}
              >
                <div className="row w-100  ">
                  <div className="col-10">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      Task: Running TGA On XFG...
                    </span>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) =>
                        props.history.push(AppRoutes.task_profile)
                      }
                      className="pointer"
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
            <div
              id={`collapse_resentdata${index}`}
              className="accordion-collapse collapse "
              aria-labelledby={`heading_resentdata${index}`}
              data-bs-parent="#accordion_resentdata"
            >
              <div className="accordion-body ">
                <div className="sub-accordian-parent  justify-content-center">
                  <p className="sub-accordion mb-0 mx-0">Data</p>
                </div>
                <div className="items">
                  {[1, 2, 3].map((item, index) => (
                    <div className="row w-100 py-1 rounded" key={index}>
                      <div className="col text-center px-0">
                        <span
                          className="text-truncate d-inline-block"
                          style={{ maxWidth: "120px" }}
                        >
                          <span
                            className="lable"
                            style={{ backgroundColor: "#096BFF" }}
                          ></span>{" "}
                          Strength and Durability Team
                        </span>
                      </div>
                      <div className="col-2 text-center d-flex justify-content-center align-items-center ">
                        <div className="text-truncate">
                          <MainButton
                            children={
                              <span
                                className="text-truncate d-inline-block"
                                style={{ maxWidth: "80px" }}
                              >
                                https://drive.google.com/file/234234
                              </span>
                            }
                            type={MainButtonType.dark}
                            borderRadius="24px"
                            fontSize="14px"
                            backgroundColor="#F5F5F5"
                            color="#096BFF"
                          ></MainButton>
                          <MainButton
                            children={
                              <span
                                className="text-truncate d-inline-block"
                                style={{ maxWidth: "80px" }}
                              >
                                https://drive.google.com/file/234234
                              </span>
                            }
                            type={MainButtonType.dark}
                            borderRadius="24px"
                            fontSize="14px"
                            backgroundColor="#F5F5F5"
                            color="#096BFF"
                          ></MainButton>
                        </div>
                        <CircleIcon
                          width="15px"
                          height="15px"
                          type={ThemeCircleIcon.dark}
                          onClick={(e) => handelOnclick(e)}
                          className="pointer d-flex justify-content-center align-items-center mx-2"
                        >
                          <p className="d-flex align-items-center mb-2 px-2">
                            ...
                          </p>
                        </CircleIcon>
                      </div>
                      <div className="col text-center text-nowrap">
                        K. Pourtorab
                      </div>
                      <div className="col text-center text-nowrap">
                        07/22/2021 21:24
                      </div>

                      <div className="col d-flex justify-content-end">
                        <CircleIcon
                          width="26px"
                          height="26px"
                          type={ThemeCircleIcon.dark}
                          onClick={(e) =>
                            props.history.push(AppRoutes.task_profile)
                          }
                          className="pointer mx-1"
                        >
                          <img
                            src="/images/icons/edit.svg"
                            alt="radvix"
                            width={12}
                            height={12}
                          />
                        </CircleIcon>
                        <CircleIcon
                          width="26px"
                          height="26px"
                          type={ThemeCircleIcon.dark}
                          onClick={(e) =>
                            props.history.push(AppRoutes.task_profile)
                          }
                          className="pointer mx-1"
                        >
                          <img
                            src="/images/icons/start_discussion.svg"
                            alt="radvix"
                            width={12}
                            height={12}
                          />
                        </CircleIcon>
                        <CircleIcon
                          width="26px"
                          height="26px"
                          type={ThemeCircleIcon.dark}
                          onClick={(e) =>
                            props.history.push(AppRoutes.task_profile)
                          }
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
export default withRouter(AcordienTableData);
