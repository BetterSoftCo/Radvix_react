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
import { UpdateMyProfileReq } from "../../../data/models/requests/user/update_myprofile_req";
import { UserController } from "../../../controllers/user/user_controller";
export const RegisterContext = React.createContext((stpe: number) => {});
const RegisterPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setStete] = useState(0);
  const [loading, setloading] = useState(false);
  const [SubscriptionID, setSubscriptionID] = useState(0);
  const controller: RegisterController = new RegisterController();
  const userController: UserController = new UserController();
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
  const [cardInfo, setcardInfo] = useState<{
    billingEmail: string;
    cardInfomation: string;
    cardExpireDate: string;
    cardCVC: string;
    nameOnCard: string;
    zipCode: string;
  }>({
    billingEmail: "",
    cardInfomation: "",
    cardExpireDate: "",
    cardCVC: "",
    nameOnCard: "",
    zipCode: "",
  });

  // const [Login, setLogin] = useState({});
  const nextStep = (step: number) => {
    setStete(step);
  };
  const SetPayment = (Pay: any): void => {
    setpayment(Pay);
  };
  const setCartInfo = (info: any): void => {
    setcardInfo(info);
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
    setloading(true);
    controller.SignUp(
      body,
      (res) => {
        localStorage.setItem("token", res.token ?? "");
        const body: UpdateMyProfileReq = {
          id: res.id!,
          firstName: res.firstName ?? "",
          lastName: res.lastName ?? "",
          email: res.email ?? "",
          degree: res.degree ?? "",
          major: res.major ?? "",
          phoneNumber: res.phoneNumber ?? "",
          institution: res.institution ?? "",
          addressLine1: res.addressLine1 ?? "",
          addressLine2: res.addressLine2 ?? "",
          locationId: 0,
          zipCode: res.zipCode ?? "",
          token: res.token ?? "",
          role: res.role ?? "",
          billingEmail: cardInfo.billingEmail,
          billingAddress: "",
          cardInfomation: cardInfo.cardInfomation,
          cardExpireDate: cardInfo.cardExpireDate,
          cardCVC: cardInfo.cardCVC,
          nameOnCard: cardInfo.nameOnCard,
        };
        userController.UpdateMyProfile(
          body,
          (response) => {
            userController.requestConfirmEmail(
              payment.email,
              () => {},
              () => {}
            );
            controller.addUserSubscription(
              {
                userId: res.id!,
                subscriptionSettingId: SubscriptionID,
                billingAddress: "",
              },
              () => {},
              () => {}
            );
            setloading(false);
            props.history.push(AppRoutes.login);
          },
          () => {
            setloading(false);
          }
        );
      },
      (err) => {
        setloading(false);
      }
    );
  };
  return (
    <div className="register">
      <RegisterContext.Provider value={nextStep}>
        {state === 0 ? (
          <Plans
            setSubscriptionID={(subId) => {
              setSubscriptionID(subId);
            }}
          />
        ) : state === 1 ? (
          <PlanOne SetPaymentCallBack={SetPayment} />
        ) : state === 2 ? (
          <PlanTwo SetPaymentCallBack={setCartInfo} />
        ) : state === 3 ? (
          <PlanThree
            handelRegisterCallBack={handelRegister}
            loading={loading}
          />
        ) : (
          ""
        )}
      </RegisterContext.Provider>
    </div>
  );
};
export default withRouter(RegisterPage);
