import { useEffect } from "react";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
export const UserTypesTable = () => {
  useEffect(() => {}, []);
  return (
    <div className="child-rsponsive">
      <div className="row  px-3 mb-2">
        <div className="col">User Access Names</div>
        <div className="col text-center">Current Users</div>
        <div className="col"></div>
      </div>
      <div className="accordion" id="accordionUsertypes">
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingOneUserType">
            <div
              className="accordion-button py-1"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOneusertype"
              aria-expanded="true"
              aria-controls="collapseOneusertype"
            >
              <div className="row w-100   ">
                <div className="col-4">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    Level 1
                  </span>
                </div>
                <div className="col-4 text-center"> 19</div>
                <div className="col-4">
                  <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapseOneusertype"
            className="accordion-collapse collapse "
            aria-labelledby="headingOneUserType"
            data-bs-parent="#accordionUsertypes"
          >
            <div className="accordion-body ">
              <div className="sub-accordian-parent  justify-content-center">
              <p className="sub-accordion  mb-0 mx-0 text-nowrap py-2">User Labeling</p> 
              </div>
             <div className="items">
             <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingtwousertype">
            <div
              className="accordion-button py-1"
              data-bs-toggle="collapse"
              data-bs-target="#collapsetwousetype"
              aria-expanded="false"
              aria-controls="collapsetwousetype"
            >
               <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsetwousetype"
            className="accordion-collapse collapse"
            aria-labelledby="headingtwousertype"
            data-bs-parent="#accordionUsertypes"
          >
            <div className="accordion-body ">
            <div className="sub-accordian-parent  justify-content-center">
              <p className="sub-accordion  mb-0 mx-0 text-nowrap py-2">User Labeling</p> 
              </div>
             <div className="items">
             <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
        <div className="accordion-item accordion-item-top">
          <div className="accordion-header" id="headingthreeusertype">
            <div
              className="accordion-button py-1"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethreeusertype"
              aria-expanded="false"
              aria-controls="collapsethreeusertype"
            >
               <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
            </div>
          </div>
          <div
            id="collapsethreeusertype"
            className="accordion-collapse collapse"
            aria-labelledby="headingthreeusertype"
            data-bs-parent="#accordionUsertypes"
          >
            <div className="accordion-body ">
              <div className="sub-accordian-parent justify-content-center">
              <p className="sub-accordion  mb-0 mx-0 text-nowrap py-2">User Labeling </p> 
              </div>
             <div className="items">
             <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
              <div className="row w-100 py-2 rounded">
                <div className="col">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    {" "}
                    PI
                  </span>
                </div>
                <div className="col text-center">
                  5
                </div>
                <div className="col">
                <CircleIcon
                    width="22px"
                    height="22px"
                    type={ThemeCircleIcon.dark}
                    backgroundColor="#474747"
                    fontSize="10px"
                    color="#ffff"
                    className="mx-4"
                  >
                    <img src="/images/icons/edit.svg" alt="radvix" />
                  </CircleIcon>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
