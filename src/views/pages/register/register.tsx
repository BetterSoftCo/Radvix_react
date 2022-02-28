/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Plans from "./component/plans";
import PlanOne from "./component/step_one";
import PlanTwo from "./component/plan_two";
import PlanThree from "./component/plan_three";
import { RegisterController } from "../../../controllers/register/research_controller";
import { RegisterReq } from "../../../data/models/requests/register/register_req";
import { AppRoutes } from "../../../core/constants";
export const RegisterContext = React.createContext((stpe: number) => {});
const RegisterPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setStete] = useState(0);
  const [loading, setloading] = useState(false);
  const controller: RegisterController = new RegisterController();
  const [payment, setpayment] = useState<RegisterReq>({
    firstName: "",
    isL1Client: true,
    lastName: "",
    email: "",
    username: "",
    phone: "",
    institution: "",
    password: "",
    confirmPassword: "",
    addressLine1: "",
    addressLine2: "",
    zipCode: "",
  });
  // const [Login, setLogin] = useState({});
  const nextStep = (step: number) => {
    setStete(step);
  };
  const SetPayment = (Pay: any): void => {
    setpayment(Pay);
  };
  // const SetLogin = (login: any): void => {
  //   setLogin(login);
  // };
  const handelRegister = () => {
    const body: RegisterReq = {
      firstName: payment.firstName,
      isL1Client: true,
      lastName: payment.lastName,
      email: payment.email,
      username: payment.email,
      phone: payment.phone,
      institution: payment.institution,
      password: payment.password,
      confirmPassword: payment.confirmPassword,
      addressLine1: payment.addressLine1,
      addressLine2: payment.addressLine2,
      zipCode: payment.zipCode,
    };
    setloading(true)
    controller.SignUp(
      body,
      (res) => {
        setloading(false)
        props.history.push(AppRoutes.login)
      },
      (err) => {
        setloading(false)
      }
    );
  };
  return (
    <div className="register">
      <RegisterContext.Provider value={nextStep}>
        {state === 0 ? (
          <Plans />
        ) : state === 1 ? (
          <PlanOne SetPaymentCallBack={SetPayment} />
        ) : state === 2 ? (
          <PlanTwo />
        ) : state === 3 ? (
          <PlanThree handelRegisterCallBack={handelRegister} loading={loading} />
        ) : (
          ""
        )}
      </RegisterContext.Provider>
    </div>
  );
};
export default withRouter(RegisterPage);
