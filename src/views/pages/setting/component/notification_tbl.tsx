import { useEffect } from "react";
export const NotificationTable = () => {
  useEffect(() => {}, []);
  return (
    <div className="child-rsponsive">
      <div className="row  px-3" >
        <div className="col">Notification Category</div>
        <div className="col">Dashboard</div>
        <div className="col">Email</div>
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
              <div className="row w-100   ">
                <div className="col-4">
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "120px" }}
                  >
                    <span
                      className="lable"
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    Project
                  </span>
                </div>
                <div className="col-4">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col-4">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
              <p className="sub-accordion"  style={{marginRight: '-17px'}}>Notification</p> 
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
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    Laboratory
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
              <p className="sub-accordion"  style={{marginRight: '-17px'}}>Notification</p> 
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
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    Team
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
              <p className="sub-accordion"  style={{marginRight: '-17px'}}>Notification</p> 
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
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
                      style={{ backgroundColor: "#096BFF"  }}
                    ></span>{" "}
                    New Project Added
                  </span>
                </div>
                <div className="col">
                  {" "}
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
                </div>
                <div className="col">
                  <label className="checkbox mx-3">
                    <input type="checkbox" />
                  </label>
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
