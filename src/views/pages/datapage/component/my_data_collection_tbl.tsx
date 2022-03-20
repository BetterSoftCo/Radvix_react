import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "./../../../../core/constants";
import { DataList } from "../../../../data/models/responses/data/get_all_data_res";
import moment from "moment";
interface IAcordienTable {
  role: UserRoles;
  Datas: DataList[];
}
const MyDataCollectionTable: React.FC<IAcordienTable & RouteComponentProps> = (
  props
) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    console.log(e);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col-2">Data Set</div>
        <div className="col-2 text-center">Files</div>
        <div className="col-2 text-center">Added By</div>
        <div className="col-2 text-center">Date</div>
        <div className="col-2 text-center"></div>
      </div>
      <div className="accordion" id="accordionData">
        {props.Datas.map((item, index) => (
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
                  <div className="col-10 d-flex align-items-center">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                      title={item.appTaskTitle}
                    >
                      {item.appTaskTitle}
                    </span>
                  </div>
                  <div className="col-2 d-flex justify-content-end">
                    <CircleIcon
                      width="22px"
                      height="22px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) =>
                        props.history.push(
                          `${AppRoutes.task_profile.replace(
                            ":id",
                            item.appTaskId?.toString() ?? ""
                          )}`
                        )
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
            {item.appTaskData?.length ? (
              <div
                id={`collapse_resentdata${index}`}
                className="accordion-collapse collapse "
                aria-labelledby={`heading_resentdata${index}`}
                data-bs-parent="#accordion_resentdata"
              >
                <div className="accordion-body ">
                  <div className="sub-accordian-parent">
                    <p className="sub-accordion">Data</p>
                  </div>

                  <div className="items">
                    {item.appTaskData.map((sub, index) => (
                      <div className="row w-100 py-1 rounded" key={index}>
                        <div className="col-2 text-center">
                          <span
                            className="text-truncate d-inline-block"
                            style={{ maxWidth: "120px" }}
                            title={sub.title}
                          >
                            {sub.title}
                          </span>
                        </div>
                        <div className="col-2 text-center d-flex justify-content-center align-items-baseline ">
                          <div className="text-truncate">
                            {sub.medias?.map((media) => (
                              <div key={media.id}>
                                <MainButton
                                  children={media.name}
                                  type={MainButtonType.dark}
                                  borderRadius="24px"
                                  fontSize="14px"
                                  backgroundColor="#F5F5F5"
                                  color="#096BFF"
                                ></MainButton>
                              </div>
                            ))}
                          </div>
                          {sub.medias?.length ? (
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
                          ) : null}
                        </div>
                        <div
                          className="col-2 text-center text-truncate"
                          title={
                            sub.creatorFirstName + " " + sub.creatorLastName
                          }
                        >
                          {sub.creatorFirstName + " " + sub.creatorLastName}
                        </div>
                        <div className="col-2 text-center">
                          {moment(sub.createdDate).format("YYYY/MM/DD")}
                        </div>

                        <div className="col d-flex justify-content-end align-items-center">
                          <CircleIcon
                            width="22px"
                            height="22px"
                            type={ThemeCircleIcon.dark}
                            backgroundColor="#474747"
                            fontSize="10px"
                            color="#ffff"
                            className="mx-1 pointer"
                            onClick={() => {
                              props.history.push(
                                `${AppRoutes.data_profile
                                  .replace(":dataid", sub.id?.toString() ?? "")
                                  .replace(
                                    ":appTaskId",
                                    item.appTaskId?.toString() ?? ""
                                  )}?researchId=${item.researchId}`
                              );
                            }}
                          >
                            <img
                              src="/images/icons/google_docs.svg"
                              alt="radvix"
                              width={12}
                              height={12}
                            />
                          </CircleIcon>
                          <CircleIcon
                            width="22px"
                            height="22px"
                            type={ThemeCircleIcon.dark}
                            backgroundColor="#474747"
                            fontSize="10px"
                            color="#ffff"
                            className="mx-1 pointer"
                          >
                            <img
                              src="/images/icons/start_discussion.svg"
                              alt="radvix"
                            />
                          </CircleIcon>
                          <CircleIcon
                            width="22px"
                            height="22px"
                            type={ThemeCircleIcon.dark}
                            backgroundColor="#474747"
                            fontSize="10px"
                            color="#ffff"
                            className="mx-1 pointer"
                          >
                            {/* <img src="/images/icons/download.svg" alt="radvix" width={15} height={15} /> */}
                            <img
                              src="/images/icons/download.svg"
                              alt="radvix"
                              width={15}
                              height={15}
                            />
                          </CircleIcon>
                        </div>
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
export default withRouter(MyDataCollectionTable);
