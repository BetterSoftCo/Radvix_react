import React, { Fragment, useEffect } from "react";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/CircleIcon";


export const AcordienTableResearch = () => {
  const handelOnclick = (e: any) => {
    e.stopPropagation();
    console.log(e);
  };
  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="row px-3">
        <div className="col">Research Name</div>
        <div className="col">Deadline</div>
        <div className="col">Status</div>
        <div className="col"></div>
      </div>
      <div className="accordion" id="accordionResearchList">
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingOne">
            <div
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOneResearchLIst"
              aria-expanded="true"
              aria-controls="collapseOneResearchLIst"
            >
              <div className="row w-100  ">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-edit"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-comment"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-file-alt"></i>
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapseOneResearchLIst"
            className="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionResearchList"
          >
            <div className="accordion-body ">
              <span className="sub-accordion">Subtask</span>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
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
                      style={{ borderColor: "#096BFF" }}
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
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-edit"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-comment"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-file-alt"></i>
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsetwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingtwo"
            data-bs-parent="#accordionResearchList"
          >
            <div className="accordion-body ">
              <span className="sub-accordion">Subtask</span>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
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
                      style={{ borderColor: "#096BFF" }}
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
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-edit"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-comment"></i>
                  </CircleIcon>
                  <CircleIcon
                    width="26px"
                    height="26px"
                    type={ThemeCircleIcon.dark}
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <i className="fas fa-file-alt"></i>
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsethree"
            className="accordion-collapse collapse"
            aria-labelledby="headingthree"
            data-bs-parent="#accordionResearchList"
          >
            <div className="accordion-body ">
              <span className="sub-accordion">Subtask</span>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ borderColor: "#096BFF" }}
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
                <div className="col d-flex justify-content-between align-items-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
