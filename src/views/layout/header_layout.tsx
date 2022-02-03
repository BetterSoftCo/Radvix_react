/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { MainButton, MainButtonType } from "../components/button";
import { SelectComponent } from "../components/select_input";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../core/constants";
interface IHeader {}
const Header: React.FC<IHeader & RouteComponentProps> = (props) => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-10 right-side">
            <div className="row h-100">
              <div className="col-md-2 col-6 d-flex justify-content-start align-items-center">
                <img
                  src="/images/layout/radvix_logo.png"
                  height="42px"
                  width="100px"
                />
              </div>
              {props.location.pathname.search("/Admin") >= 0 ? null : (
                <Fragment>
                  <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                    <MainButton
                      type={MainButtonType.dark}
                      minHeight="42px"
                      fontSize="15px"
                      borderRadius="50px"
                      className="px-3"
                      onClick={()=>{props.history.push(AppRoutes.dashboard)
                      }}
                      children={
                        <div>
                          <img
                            src="/Images/component/group_1.svg"
                            alt="sssss"
                            height='20'
                          />{" "}
                          Home
                        </div>
                      }
                    ></MainButton>
                  </div>
                  <div className="col-md-5 col-8 d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 Selected-Research fw-light">
                      Selected Research:
                    </h6>
                    <SelectComponent
                      items={[
                        { name: "items 3", id: 2 },
                        { name: "items 2", id: 3 },
                      ]}
                      height="25px"
                      width="60%"
                      TextItem="name"
                      ValueItem="id"
                      className="py-0"
                      backgroundColor="#F5F5F5"
                      border="none"
                      
                    ></SelectComponent>
                  </div>
                  <div className="col-md-3 col-4 d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 Selected-Research w-25 fw-light">Timeline</h6>
                    <ProgressBar
                      completed={20}
                      className="w-75"
                      bgColor="#474747"
                      labelAlignment="outside"
                      labelColor="#474747"
                      
                    />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
          <div className="col-lg-2 left-side">
            <div className="d-flex align-items-center justify-content-between">
              <img
              onClick={()=>{props.history.push(AppRoutes.member_profile)}}
                src="/images/layout/img_avatar.png"
                alt="Avatar"
                className="rounded-circle avatar pointer"
              />
              <div className="d-flex flex-column">
                <span className="text-center text-black-color">
                  Welcome, Nima!
                </span>
                <MainButton
                  children="Principal Investigator"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="11px"
                ></MainButton>
              </div>
              <a onClick={()=>{props.history.push(AppRoutes.member_profile)}} className="pointer mx-1">
                <img src="/Images/layout/profile_view_icon.svg" alt="" />
              </a>
              <a onClick={()=>{props.history.push(AppRoutes.login)}} className="pointer mx-1">
                <img src="/Images/layout/logout_icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
