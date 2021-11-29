import React from "react";
import { store } from "../../../data/store";
import { CircleIcon, ThemeCircleIcon } from "../../components/circle_icon";
import "react-datepicker/dist/react-datepicker.css";
import { MainButton, MainButtonType } from "../../components/button";
import ReactPaginate from "react-paginate";
import { NotificationTable } from "./component/notification_tbl";
import { SelectComponent } from "../../components/select_input";
import { UserTypesTable } from "./component/user_types_tbl";
import { UserRoles } from "../../../core/utils";
export class SettingPage extends React.Component {
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
        {this.RoleUser === UserRoles.level1 ? (
          <div className="col-12 box-content p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="b-title d-flex align-items-center">
                <span onClick={()=>{window.history.back()}} className="backPage"></span> {"Billing And Subscription"}
              </h5>
            </div>
            <div className="row mt-4">
              <div className="col-md-6  tabel-info ">
                <div className="row border-bottom ">
                  <h6 className="col-4 t-title mb-0 border-t-l">
                    Subscription Plan
                  </h6>
                  <div className="col-8 t-desc border-t-r">
                    <span className="text-primary">Radvix Standard</span>
                  </div>
                </div>
                <div className="row border-bottom">
                  <h6 className="col-4 t-title mb-0">Payment Method</h6>
                  <div className="col-8 t-desc">
                    <img
                      src="/Images/pages/mastercard.svg"
                      className="mx-2"
                      alt="radvix"
                    />
                    **** 1234{" "}
                    <MainButton
                      children="Change Payment"
                      type={MainButtonType.light}
                      borderRadius="24px"
                      fontSize="14px"
                      backgroundColor="#C4C4C4"
                    ></MainButton>
                  </div>
                </div>
                <div className="row border-bottom">
                  <h6 className="col-4 t-title mb-0">Subscription Price</h6>
                  <div className="col-8 t-desc">
                    $xx.x/month (billed annually)
                  </div>
                </div>

                <div className="row border-bottom">
                  <h6 className="col-4 t-title mb-0 border-b-l">
                    Billing Address
                  </h6>
                  <div className="col-8 t-desc border-b-r">
                    9863 Greystone Street Upland, CA 91784
                  </div>
                </div>
                <div className="row d-flex justify-content-between mt-3">
                  <MainButton
                    children="Cancel Subscription "
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="15px"
                    backgroundColor="#31208B"
                    className="col-5"
                    minHeight="47px"
                  ></MainButton>
                  <MainButton
                    children="Request Data Removal"
                    type={MainButtonType.dark}
                    borderRadius="24px"
                    fontSize="15px"
                    backgroundColor="#F73F3F"
                    className="col-5"
                    minHeight="47px"
                  ></MainButton>
                </div>
              </div>
              <div className="col-md-6">
                <div className="teams mb-3">
                  Invoice History
                  <div className="History mt-3">
                    <div className="row">
                      <span className="col-4">Date</span>
                      <span className="col-4">Transaction ID</span>
                      <span className="col-4">Amount</span>
                    </div>
                    <div className="box-history"></div>
                    <div className="d-flex justify-content-center align-items-center my-3">
                      <ReactPaginate
                        previousLabel={
                          <CircleIcon
                            width="24px"
                            backgroundColor="#ADADAD"
                            height="24px"
                            type={ThemeCircleIcon.dark}
                          >
                            <i className="fas fa-chevron-left"></i>
                          </CircleIcon>
                        }
                        nextLabel={
                          <CircleIcon
                            width="24px"
                            backgroundColor="#ADADAD"
                            height="24px"
                            type={ThemeCircleIcon.dark}
                          >
                            <i className="fas fa-angle-right"></i>
                          </CircleIcon>
                        }
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={20}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={() => {
                          console.log("sssss");
                        }}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className="col-12 box-content p-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="b-title d-flex align-items-center">
              <span onClick={()=>{window.history.back()}} className="backPage"></span> {"Notifications"}
            </h5>
          </div>
          <div className="TableBox">
            <div className="responsive">
              <NotificationTable role={this.RoleUser}></NotificationTable>
            </div>
            <span className="label d-flex align-items-center mt-3">
              How often would you like to receive email notifications?
              <CircleIcon
                width="20px"
                height="20px"
                type={ThemeCircleIcon.dark}
                backgroundColor="transparent"
                border="1px solid #D5D5D5"
                fontSize="10px"
                color="#D5D5D5"
              >
                <i className="fas fa-question"></i>
              </CircleIcon>
            </span>
            <div className="item d-flex justify-content-center align-items-center w-75">
              <SelectComponent
                items={[
                  { name: "test1", id: 1 },
                  { name: "test2", id: 2 },
                ]}
                TextItem="name"
                ValueItem="id"
                className="my-2"
                placeholder="Once every day (8:00 AM)"
              ></SelectComponent>
              <SelectComponent
                items={[
                  { name: "test1", id: 1 },
                  { name: "test2", id: 2 },
                ]}
                TextItem="name"
                ValueItem="id"
                className="my-2"
                placeholder="Eastern Time"
              ></SelectComponent>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
              <MainButton
                type={MainButtonType.light}
                children={"Reset"}
                borderRadius="50px"
                fontSize="20px"
                className="mx-2"
                minHeight="47px"
                minWidth="110px"
              ></MainButton>
              <MainButton
                type={MainButtonType.dark}
                children={"Save"}
                borderRadius="50px"
                fontSize="20px"
                className="mx-2"
                minHeight="47px"
                minWidth="110px"
              ></MainButton>
            </div>
          </div>
        </div>
        {this.RoleUser === UserRoles.level1 ||
        this.RoleUser === UserRoles.level2 ? (
          <div className="col-12 box-content p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="b-title d-flex align-items-center">
                <span onClick={()=>{window.history.back()}} className="backPage"></span> {"User Types"}
              </h5>
            </div>
            <div className="TableBox">
              <div className="responsive">
                <UserTypesTable role={this.RoleUser}></UserTypesTable>
              </div>
              <div className="d-flex justify-content-center align-items-center my-4">
                <MainButton
                  type={MainButtonType.dark}
                  children={"Save"}
                  borderRadius="50px"
                  fontSize="20px"
                  className="mx-2"
                  minHeight="47px"
                  minWidth="110px"
                ></MainButton>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
