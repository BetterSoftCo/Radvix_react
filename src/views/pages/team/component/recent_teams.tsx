import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
interface IAcordienTable {
  role: UserRoles;
}
const AcordienTable: React.FC<IAcordienTable & RouteComponentProps> = (
  props
) => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    props.history.push(AppRoutes.new_team);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col"> Team Name</div>
        <div className="col">Created By</div>
        <div className="col text-center"> Members </div>
        <div className="col"> Type </div>
        <div className="col"></div>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingOne">
            <div
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
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
                    Material Testing Team
                  </span>
                </div>
                <div className="col">N. Hossein...</div>
                <div className="col text-center">1</div>

                <div className="col">
                  <MainButton
                    type={MainButtonType.dark}
                    children="Main Team"
                    borderRadius="15px"
                    backgroundColor="#C3C3C3"
                    color="#474747"
                  ></MainButton>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={() => props.history.push(AppRoutes.team_profile)}
                    className="pointer m-1"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
                  {props.role !== UserRoles.level3 ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={() => props.history.push(AppRoutes.team_edit)}
                      className="pointer m-1"
                    >
                      <img src="/images/pages/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="sub-accordian-parent">
                <p className="sub-accordion" style={{ marginRight: "-7px" }}>
                  Subtask
                </p>
              </div>
              <div className="items">
                <div className="row w-100 py-2 rounded">
                  <div className="col">
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
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      Biophilic Concrete Team
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1 "
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      Tension Development Team
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingtwo">
            <div
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetwo"
              aria-expanded="false"
              aria-controls="collapsetwo"
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
                    Running TGA On XFG...
                  </span>
                </div>
                <div className="col">N. Hossein...</div>
                <div className="col text-center">1</div>

                <div className="col">
                  <MainButton
                    type={MainButtonType.dark}
                    children="Main Team"
                    borderRadius="15px"
                    backgroundColor="#C3C3C3"
                    color="#474747"
                  ></MainButton>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer  m-1"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
                  {props.role !== UserRoles.level3 ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsetwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingtwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="sub-accordian-parent">
                <p className="sub-accordion" style={{ marginRight: "-7px" }}>
                  Subtask
                </p>
              </div>
              <div className="items">
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      Running TGA On XFG...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      Running TGA On XFG...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      TGA issues with are...TGA issues with are...TGA issues
                      with are...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingthree">
            <div
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethree"
              aria-expanded="false"
              aria-controls="collapsethree"
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
                    Running TGA On XFG...
                  </span>
                </div>
                <div className="col">N. Hossein...</div>
                <div className="col text-center">1</div>

                <div className="col">
                  <MainButton
                    type={MainButtonType.dark}
                    children="Main Team"
                    borderRadius="15px"
                    backgroundColor="#C3C3C3"
                    color="#474747"
                  ></MainButton>
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer  m-1"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
                  {props.role !== UserRoles.level3 ? (
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/edit.svg" alt="radvix" />
                    </CircleIcon>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsethree"
            className="accordion-collapse collapse"
            aria-labelledby="headingthree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body ">
              <div className="sub-accordian-parent">
                <p className="sub-accordion" style={{ marginRight: "-7px" }}>
                  Subtask
                </p>
              </div>
              <div className="items">
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      TGA issues with are...TGA issues with are...TGA issues
                      with are...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      TGA issues with are...TGA issues with are...TGA issues
                      with are...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
                <div className="row w-100 py-2 rounded">
                  <div className="col">
                    <span
                      className="text-truncate d-inline-block"
                      style={{ maxWidth: "120px" }}
                    >
                      <span
                        className="lable"
                        style={{ backgroundColor: "#096BFF" }}
                      ></span>{" "}
                      TGA issues with are...TGA issues with are...TGA issues
                      with are...
                    </span>
                  </div>
                  <div className="col">N. Hossein...</div>
                  <div className="col text-center">1</div>

                  <div className="col">
                    <MainButton
                      type={MainButtonType.dark}
                      children="Subteam"
                      borderRadius="15px"
                      backgroundColor="#E3E3E3"
                      color="#474747"
                    ></MainButton>
                  </div>
                  <div className="col d-flex justify-content-end align-items-center">
                    <CircleIcon
                      width="26px"
                      height="26px"
                      type={ThemeCircleIcon.dark}
                      onClick={(e) => handelOnclick(e)}
                      className="pointer  m-1"
                    >
                      <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                    </CircleIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(AcordienTable);
