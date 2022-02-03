import React, { Fragment, useEffect } from "react";
import { UserRoles } from "../../../../core/utils";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
interface IAcordienTable {
  role: UserRoles;
}
export const Subtasks = (props: IAcordienTable) => {
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      onClick={(e) => handelOnclick(e)}
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
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
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
              <p className="sub-accordion"  style={{marginRight: '-7px'}}>Subtask</p> 
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      onClick={(e) => handelOnclick(e)}
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
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
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
              <p className="sub-accordion"  style={{marginRight: '-7px'}}>Subtask</p> 
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      onClick={(e) => handelOnclick(e)}
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
                    onClick={(e) => handelOnclick(e)}
                    className="pointer"
                  >
                    <img src="/images/pages/google_docs.svg" alt="radvix" width={12} height={12} />
                  </CircleIcon>
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
              <p className="sub-accordion"  style={{marginRight: '-7px'}}>Subtask</p> 
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
                      style={{ backgroundColor: "#096BFF"  }}
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
      </div>
    </Fragment>
  );
};
