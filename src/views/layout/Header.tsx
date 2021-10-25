import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { MainButton, MainButtonType } from "../components/button";
import { InputComponent, InputType } from "../components/inputs";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-9 right-side">
            <div className="row h-100">
              <div className="col-md-2 col-6">
                <img
                  src="/images/layout/Radvix Logo.svg"
                  height="42px"
                  width="142px"
                />
              </div>
              <div className="col-md-2 col-6 d-flex justify-content-center align-items-center">
                <MainButton
                  type={MainButtonType.dark}
                  minHeight="43px"
                  fontSize="15px"
                  borderRadius="50px"
                  children={
                    <div>
                      <img src="/images/component/Group 1.svg" alt="sssss" />{" "}
                      Home
                    </div>
                  }
                ></MainButton>
              </div>
              <div className="col-md-5 col-8 d-flex justify-content-center align-items-center">
                <h6 className="mb-0 Selected-Research">Selected Research:</h6>
                <InputComponent
                  type={InputType.select}
                  items={[
                    { name: "items 3", id: 2 },
                    { name: "items 2", id: 3 },
                  ]}
                  height="25px"
                  width="60%"
                  TextItem="name"
                  ValueItem="id"
                  className="py-0"
                ></InputComponent>
              </div>
              <div className="col-md-3 col-4 d-flex justify-content-center align-items-center">
                <h6 className="mb-0 Selected-Research w-25 ">Timeline</h6>
                <ProgressBar completed={60}  className="w-75" bgColor="#474747"/>
              </div>
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
                <img src="/images/layout/Profile View Icon.svg" alt="" />
              </a>
              <a href="#">
                <img src="/images/layout/Logout Icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
