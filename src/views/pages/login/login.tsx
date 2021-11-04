/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { google_scholar_icon_130918, linkedIn_logo_initials, member, orcid_og_image, radvix_logo } from "../../../assets";
import { MainButton, MainButtonType } from "../../components/button";
import { InputComponent, InputType } from "../../components/inputs";

export const LoginPage: React.FC = () => {
  return (
    <div className="row bg-danger  login">
      <div className="col-md-3   left">
        <img src={radvix_logo} className="logo" alt="" />
        <span>login</span>
        <img src={member} className="logo-Member" alt="" />
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
        <span>Support </span>
        <span className="text-center">Learn More About Radvix </span>
      </div>
      <div className="col-md-9   right">
        <form action="#" className="mt-5 w-100 ">
          <label className="text-light mb-2">Email:</label>
          <InputComponent type={InputType.text}></InputComponent>
          <div className="password mt-2 d-flex justify-content-between align-items-center">
            <div className="input w-75">
              <label className="text-light mb-2">Password:</label>
              <InputComponent type={InputType.text}></InputComponent>
            </div>
            <MainButton
              children={"Login"}
              type={MainButtonType.light}
              borderRadius="50px"
              minWidth="90px"
              minHeight="43px"
              className="align-self-end"
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
          className="mt-auto mb-2 px-3"
          backgroundColor="#A6CE39"
          children={
            <div>
              <img src={orcid_og_image} /> Login using ORCiD
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
              <img src={google_scholar_icon_130918} /> Login
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
              <img src={linkedIn_logo_initials} /> Login using
              LinkedIn
            </div>
          }
        ></MainButton>
      </div>
    </div>
  );
};
