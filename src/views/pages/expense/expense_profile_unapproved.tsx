import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import { UserRoles } from "../../../core/utils";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
 class ExpensePageProfile extends React.Component<RouteComponentProps> {
  RoleUser = store.getState();
  state = {
    Data: {
      Items: [
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
        {
          name: "Structural and Materials Lab",
          Institution: "University Of Miami",
          Category: "Material",
          Eqiups: "12",
        },
      ],
    },
  };

  render() {
    return (
      <div className="container-fluid research new-research">
        <div className="row"></div>
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span onClick={()=>{window.history.back()}} className="backPage"></span> {"Expense Profile"}
              {this.RoleUser === UserRoles.level1 ? (
                <CircleIcon
                  width="22px"
                  height="22px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="#474747"
                  fontSize="10px"
                  color="#ffff"
                  className="mx-4"
                >
                  <i className="fas fa-edit"></i>
                </CircleIcon>
              ) : null}
            </h5>
            <MainButton
              children="Discussion Panel"
              type={MainButtonType.dark}
              borderRadius="24px"
              fontSize="14px"
              onClick={()=>{this.props.history.push(AppRoutes.discussion)}}
            ></MainButton>
          </div>
          <div className="Studying p-4 my-2">
            <h3 className="px-5 text-center">
              Purchasing Tickets For ACI Conference
            </h3>
            {this.RoleUser === UserRoles.level1 ? (
              <div className="d-flex justify-content-center align-items-center mt-3">
                <MainButton
                  children="Decline"
                  type={MainButtonType.light}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-3 px-3"
                  minHeight="34px"
                  backgroundColor="#F5C602"
                ></MainButton>
                <MainButton
                  children="Approve"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                  className="mx-3 px-3"
                  minHeight="34px"
                  backgroundColor="#53A501"
                ></MainButton>
              </div>
            ) : null}
          </div>
          <div className="row">
            <div className="col-md-6  tabel-info ">
              <div className="row border-bottom ">
                <h6 className="col-4 t-title mb-0 border-t-l">Status</h6>
                <div className="col-8 t-desc border-t-r">
                  {this.RoleUser === UserRoles.level1 ? (
                    <MainButton
                      children="Pending"
                      type={MainButtonType.light}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#C4C4C4"
                    ></MainButton>
                  ) : (
                    <div className="d-flex justify-content-start align-items-center">
                      <MainButton
                        children="Approved"
                        type={MainButtonType.dark}
                        borderRadius="24px"
                        fontSize="14px"
                        backgroundColor="#53A501"
                      ></MainButton>
                      <p className="mb-0 mx-2">07/22/2021</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Associated Task</h6>
                <div className="col-8 t-desc">Running TGA on the Samples…</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Requested by</h6>
                <div className="col-8 t-desc">N. Hosseinzadeh</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Receipt Date</h6>
                <div className="col-8 t-desc">07/22/2021</div>
              </div>
              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0">Description </h6>
                <div className="col-8 t-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </div>
              </div>

              <div className="row border-bottom">
                <h6 className="col-4 t-title mb-0 border-b-l">Receipt Files</h6>
                <div className="col-8 t-desc border-b-r">
                  {" "}
                  <ul className="file-list">
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      <img src="/images/pages/word_icon.svg" alt="" />{" "}
                      proposal_general.docx
                    </li>
                    <li>
                      <img src="/images/pages/excel_icon.svg" alt="" />{" "}
                      proposal_general.xlsx
                    </li>
                    <li>
                      <img src="/images/pages/pdf_icon.svg" alt="" />{" "}
                      proposal_general.pdf
                    </li>
                    <li>
                      Shared Links:
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="Amount row">
                <div className="col-3 d-flex justify-content-center align-items-center title">
                  Amount
                </div>
                <div className="col-9 d-flex justify-content-start align-items-center price">
                  $122.23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ExpensePageProfile)