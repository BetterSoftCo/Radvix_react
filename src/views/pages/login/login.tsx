/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { MainButton, MainButtonType } from "../../components/button";
import { InputComponent, InputType } from "../../components/inputs";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
const LoginPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="login d-flex flex-column flex-md-row">
      <div className="left">
        <img src="/images/layout/radvix_logo.svg" className="logo" alt="" />
        <span className="sub_logo">Login</span>
        <img src="/images/pages/member.png" className="logo-Member" alt="" />
        <MainButton
          children={"Forgot Email?"}
          type={MainButtonType.dark}
          borderRadius="50px"
          minWidth="139px"
          className="mb-2"
        ></MainButton>
        <MainButton
          children={"Reset Password"}
          type={MainButtonType.dark}
          borderRadius="50px"
          minWidth="139px"
          className="mb-2"
        ></MainButton>
        <span className="about">Support </span>
        <span className="about text-center">Learn More About Radvix </span>
      </div>
      <div className="right">
        <form action="#" className="mt-3 w-100 ">
          <label className="text-light mb-2">Email:</label>
          <InputComponent type={InputType.text} placeholder="example@email.com"></InputComponent>
          <div className="password mt-2 d-flex justify-content-between align-items-center">
            <div className="input w-75">
              <label className="text-light mb-2">Password:</label>
              <InputComponent type={InputType.text} placeholder="*******"></InputComponent>
            </div>
            <MainButton
              children={"Login"}
              type={MainButtonType.light}
              borderRadius="50px"
              minWidth="60px"
              minHeight="37px"
              className="align-self-end"
              onClick={() => {
                props.history.push(AppRoutes.dashboard);
              }}
            ></MainButton>
          </div>
        </form>
        <div className="line mt-2">Or login using:</div>
        <MainButton
          type={MainButtonType.dark}
          minHeight="30px"
          minWidth="70px"
          fontSize="15px"
          borderRadius="50px"
          className="mt-2 mb-2 px-3"
          backgroundColor="#A6CE39"
          children={
            <div>
              <img src="/images/pages/orcid-og-image.png" /> Login using ORCiD
            </div>
          }
        ></MainButton>
        <MainButton
          type={MainButtonType.dark}
          minHeight="35px"
          minWidth="76px"
          fontSize="15px"
          borderRadius="50px"
          className="mb-2 px-3"
          backgroundColor="#4285F4"
          children={
            <div>
              <img src="/images/pages/google_scholar_icon_130918.png" /> Login
              using Google
            </div>
          }
        ></MainButton>
        <MainButton
          type={MainButtonType.dark}
          minHeight="35px"
          minWidth="76px"
          fontSize="15px"
          borderRadius="50px"
          className="mb-2 px-3"
          backgroundColor="#0274B3"
          children={
            <div>
              <img src="/images/pages/linkedIn_logo_initials.png" /> Login using
              LinkedIn
            </div>
          }
        ></MainButton>
      </div>
    </div>
  );
};
export default withRouter(LoginPage);
