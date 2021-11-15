/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { MainButton, MainButtonType } from "../components/button";
import { SelectComponent } from "../components/select_input";
import { RouteComponentProps, withRouter } from "react-router";
interface IHeader {}
const Header: React.FC<IHeader & RouteComponentProps> = (props) => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-9 right-side">
            <div className="row h-100">
              <div className="col-md-2 col-6">
                <img
                  src="/images/layout/radvix_logo.svg"
                  height="42px"
                  width="142px"
                />
              </div>
              {props.location.pathname.search("/admin") >= 0 ? null : (
                <Fragment>
                  <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                    <MainButton
                      type={MainButtonType.dark}
                      minHeight="43px"
                      fontSize="15px"
                      borderRadius="50px"
                      children={
                        <div>
                          <img
                            src="/Images/component/group_1.svg"
                            alt="sssss"
                          />{" "}
                          Home
                        </div>
                      }
                    ></MainButton>
                  </div>
                  <div className="col-md-5 col-8 d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 Selected-Research">
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
                    ></SelectComponent>
                  </div>
                  <div className="col-md-3 col-4 d-flex justify-content-center align-items-center">
                    <h6 className="mb-0 Selected-Research w-25 ">Timeline</h6>
                    <ProgressBar
                      completed={60}
                      className="w-75"
                      bgColor="#474747"
                    />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
          <div className="col-lg-3 left-side">
            <div className="d-flex align-items-center justify-content-around">
              <img
                src="/images/layout/img_avatar.png"
                alt="Avatar"
                className="rounded-circle avatar"
              />
              <div className="d-flex flex-column">
                <span className="text-center text-black-color">
                  Welcome, Nima!
                </span>
                <MainButton
                  children="Principal Investigator"
                  type={MainButtonType.dark}
                  borderRadius="24px"
                  fontSize="14px"
                ></MainButton>
              </div>
              <a href="#">
                <img src="/Images/layout/profile_view_icon.svg" alt="" />
              </a>
              <a href="#">
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
