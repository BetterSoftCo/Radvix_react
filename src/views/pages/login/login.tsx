/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from "react";
import { MainButton, MainButtonType } from "../../components/button";
import { InputComponent, InputType } from "../../components/inputs";
import { RouteComponentProps, withRouter } from "react-router";
import { UserController } from "../../../controllers/user/user_controller";
import { UserSigninReq } from "../../../data/models/requests/user/signin_req";
import { AppRoutes } from "../../../core/constants";
import SimpleReactValidator from "simple-react-validator";
import { store } from "../../../data/store";
import {
  SetUserInfo,
  SetUserRole,
} from "../../../data/store/actions/user_action";
const LoginPage: React.FC<RouteComponentProps> = (props) => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);

  const controller: UserController = new UserController();
  async function SignIn() {
    const formValid = Validator.current.allValid();
    if (!formValid) {
      Validator.current.showMessages();
      forceUpdate(1);
    } else {
      const body: UserSigninReq = {
        password: password,
        email: email,
      };
      setloading(true);
      await controller.Signin(body, (res) => {
        setloading(false);
        if (res) {
          store.dispatch(SetUserRole(res.role ?? 0));
          store.dispatch(SetUserInfo(res));
          props.history.replace(AppRoutes.dashboard);
        }
      }, ()=>{setloading(false);})
    }
  }
  const Validator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
    })
  );
  const [, forceUpdate] = useState(0);
  return (
    <div className="login d-flex flex-column flex-md-row">
      <div className="left">
        <img src="/images/images/radvix_logo.png" className="logo" alt="" />
        <span className="sub_logo">Login</span>
        <img src="/images/images/member.png" className="logo-Member" alt="" />
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
        <div className="mt-3 w-100 ">
          <label className="text-light mb-2">Email:</label>
          <InputComponent
            type={InputType.text}
            placeholder="example@email.com"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            inValid={Validator.current.message(
              "email",
              email,
              "required|email"
            )}
          ></InputComponent>

          <div className="password mt-2 d-flex justify-content-between align-items-center">
            <div className="input w-75">
              <label className="text-light mb-2">Password:</label>
              <InputComponent
                type={InputType.text}
                placeholder="*******"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                inValid={Validator.current.message(
                  "password",
                  password,
                  "required"
                )}
              ></InputComponent>
            </div>
            <MainButton
              children={"Login"}
              type={MainButtonType.light}
              borderRadius="50px"
              minWidth="60px"
              minHeight="37px"
              className="align-self-end"
              loading={loading}
              onClick={() => {
                SignIn();
              }}
            ></MainButton>
          </div>
        </div>
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
              <img src="/images/images/orcid-og-image.png" /> Login using ORCiD
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
              <img src="/images/images/google_scholar_icon_130918.png" /> Login
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
              <img src="/images/images/linkedIn_logo_initials.png" /> Login
              using LinkedIn
            </div>
          }
        ></MainButton>
      </div>
    </div>
  );
};
export default withRouter(LoginPage);
