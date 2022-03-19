import React, { Fragment, useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { MainButton, MainButtonType } from "../../../components/button";
import { InputComponent, InputType } from "../../../components/inputs";
import { InputIcon } from "../../../components/search_box";
import { RegisterContext } from "../register";
// interface PropsPlaneTwo {
//   SetLoginCallBack: (pay: any) => void;
// }
const PlanTwo: React.FC<RouteComponentProps> = (props) => {
  const nextStep = useContext(RegisterContext)
  return (
    <Fragment>
      <div className="form-register">
        <div className="header-form">
          <img
            src="/images/icons/toggle_icon_register.svg"
            alt="radvix"
            className="mx-3"
            onClick={() => {
              nextStep(1)
            }}
          />{" "}
          Radvix Essential
        </div>
        <div className="body-form">
        <div className="stepper-wrapper">
            <div className="stepper-item ">
              <div className="step-name">basic info</div>
              <div className="step-counter">1</div>
            </div>
            <div className="stepper-item completed">
              <div className="step-name">payment</div>
              <div className="step-counter">2</div>
            </div>
            <div className="stepper-item ">
              <div className="step-name">login</div>
              <div className="step-counter">3</div>
            </div>
          </div>
          <p className="text-center px-5 desc-form-body mb-0">
            You will be able to try Radvix fore free up to one month. You can
            cancel your subscription at anytime within the next 30 days to
            prevent being charged.
          </p>
          <div className="step-dynamic-form">
            <div className="form row px-3">
              <div className="col-lg-6 left">
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Billing Email:"
                  ></InputComponent>
                </div>
              </div>
              <div className="col-lg-6 right">
                <div className="item">
                  <InputIcon
                    label="Card Information"
                    chilren={
                      <div className="d-flex justify-content-end justify-content-center d-none d-md-flex">
                        <img
                          src="/images/images/visa.svg"
                          width={32}
                          height={24}
                          alt=""
                        />
                        <img
                          src="/images/images/discover.svg"
                          width={32}
                          height={24}
                          alt=""
                        />
                        <img
                          src="/images/images/american-express.svg"
                          width={32}
                          height={24}
                          alt=""
                        />
                        <img
                          src="/images/images/mastercard.svg"
                          width={32}
                          height={24}
                          alt=""
                        />
                      </div>
                    }
                    width="100%"
                    placeholder="1234 1234 1234 1234"
                    TopPosition="4%"
                  ></InputIcon>
                </div>
                <div className="row">
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      placeholder="MM/YY"
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputIcon
                      TopPosition="4%"
                      chilren={
                        <img
                          src="/images/images/cvc.svg"
                          width={32}
                          height={24}
                          alt=""
                          className="mb-2"
                        />
                      }
                      width="100%"
                      placeholder="CVC"
                    ></InputIcon>
                  </div>
                </div>
                <div className="item mb-3">
                  <InputComponent
                    type={InputType.text}
                    placeholder="Name On Card"
                  ></InputComponent>
                </div>
                <div className="item mt-2">
                  <InputComponent
                    type={InputType.text}
                    placeholder="Zipcode"
                  ></InputComponent>
                </div>
                <div className="item d-flex justify-content-between justify-content-baseline mt-3">
                   <span className="d-flex align-items-center">Total:  $119.88</span>   
                  <MainButton
                    type={MainButtonType.dark}
                    minHeight="42px"
                    fontSize="15px"
                    borderRadius="50px"
                    className="px-3"
                    backgroundColor="#00A598"
                    onClick={()=>{nextStep(3)}}
                    children={
                      <div>
                        Activate Account
                        <img
                          src="/Images/icons/arrow.svg"
                          alt="sssss"
                          className="mx-2"
                        />
                      </div>
                    }
                  ></MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(PlanTwo);
