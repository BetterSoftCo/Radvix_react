import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "./../../../../core/constants";
interface IAcordienTable {
  role: UserRoles;
}
 const MyDataCollectionTable: React.FC<IAcordienTable & RouteComponentProps>  = (props) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    console.log(e);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col-2">Data Set</div>
        <div className="col-2">Files</div>
        <div className="col-2">Added By</div>
        <div className="col-2">Date</div>
        <div className="col-2"></div>
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
                        style={{ backgroundColor: "#096BFF"  }}
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
                        props.history.push(AppRoutes.data_profile)
                      }
                      className="pointer"
                    >
                      <img src="/images/icons/google_docs.svg" alt="radvix" width={12} height={12} />
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
                <div className="sub-accordian-parent">
              <p className="sub-accordion"  style={{marginRight: '31%'}}>Data</p> 
              </div>
               <div className="items">
               {[1, 2, 3].map((item, index) => (
                  <div className="row w-100 py-2 rounded" key={index}>
                    <div className="col-2 text-center">
                      <span
                        className="text-truncate d-inline-block"
                        style={{ maxWidth: "120px" }}
                      >
                        <span
                          className="lable"
                          style={{ backgroundColor: "#096BFF"  }}
                        ></span>{" "}
                        Strength and Durability Team
                      </span>
                    </div>
                    <div className="col-2 text-center d-flex justify-content-center align-items-baseline ">
                      <div className="text-truncate">
                        <MainButton
                          children="https://drive.google.com/file/234234"
                          type={MainButtonType.dark}
                          borderRadius="24px"
                          fontSize="14px"
                          backgroundColor="#F5F5F5"
                          color="#096BFF"
                        ></MainButton>
                        <MainButton
                          children="https://drive.google.com/file/234234"
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
                    <div className="col-2 text-center">K. Pourtorab</div>
                    <div className="col-2 text-center">07/22/2021 21:24</div>

                    <div className="col d-flex justify-content-end align-items-center">
                      <CircleIcon
                        width="22px"
                        height="22px"
                        type={ThemeCircleIcon.dark}
                        backgroundColor="#474747"
                        fontSize="10px"
                        color="#ffff"
                        className="mx-4 pointer"
                        onClick={() => {
                          props.history.push(AppRoutes.data_profile);
                        }}
                      >
                        <img src="/images/icons/google_docs.svg" alt="radvix" width={12} height={12} />
                      </CircleIcon>
                      <CircleIcon
                        width="22px"
                        height="22px"
                        type={ThemeCircleIcon.dark}
                        backgroundColor="#474747"
                        fontSize="10px"
                        color="#ffff"
                        className="mx-4 pointer"
                      >
                        <img src="/images/icons/start_discussion.svg" alt="radvix" />
                      </CircleIcon>
                      <CircleIcon
                        width="22px"
                        height="22px"
                        type={ThemeCircleIcon.dark}
                        backgroundColor="#474747"
                        fontSize="10px"
                        color="#ffff"
                        className="mx-4 pointer"
                      >
                        <img src="/images/icons/download.svg" alt="radvix" width={15} height={15} />
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
export default withRouter(MyDataCollectionTable);