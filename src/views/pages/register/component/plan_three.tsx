import React, { Fragment } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../../core/constants";
import { MainButton, MainButtonType } from "../../../components/button";
const PlanThree: React.FC<RouteComponentProps> = (props) => {
  
  return (
    <Fragment>
      <div className="form-register">
        <div className="header-form">
          <img
            src="/images/pages/toggle_icon_register.svg"
            alt="radvix"
            className="mx-3"
          />{" "}
          Radvix Essential
        </div>
        <div className="body-form">
          <div className="stepper-wrapper">
            <div className="stepper-item completed">
              <div className="step-name">basic info</div>
              <div className="step-counter">1</div>
            </div>
            <div className="stepper-item completed">
              <div className="step-name">payment</div>
              <div className="step-counter">2</div>
            </div>
            <div className="stepper-item completed">
              <div className="step-name">login</div>
              <div className="step-counter">3</div>
            </div>
          </div>
          <p className="text-center px-5 desc-form-body mb-0">
            Congratulations! You have successfully created your Radvix Client
            account. Please check your email (test@email.com) to confirm your
            email and login to your account.
          </p>
          <div className="item d-flex flex-column align-items-center mt-3">
            <MainButton
              type={MainButtonType.dark}
              minHeight="42px"
              fontSize="15px"
              borderRadius="50px"
              className="px-3"
              backgroundColor="#00A598"
              onClick={()=>{props.history.push(AppRoutes.login)}}
              children={
                <div>
                  Already Activated Your Account?
                  <img
                    src="/Images/pages/arrow.svg"
                    alt="sssss"
                    className="mx-2"
                  />
                </div>
              }
            ></MainButton>
            <MainButton
              type={MainButtonType.dark}
              minHeight="42px"
              fontSize="15px"
              borderRadius="50px"
              className="px-3 my-4"
              backgroundColor="#707070"
              children={
                <div>
                  Didn’t Receive Any Emails?
                  <img
                    src="/Images/pages/arrow.svg"
                    alt="sssss"
                    className="mx-2"
                  />
                </div>
              }
            ></MainButton>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(PlanThree);
