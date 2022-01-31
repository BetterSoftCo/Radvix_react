import React, { Fragment, useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { MainButton, MainButtonType } from "../../../components/button";
import { InputComponent, InputType } from "../../../components/inputs";
import { SelectComponent } from "../../../components/select_input";
import { RegisterContext } from "../register";

const PlanTwo: React.FC<RouteComponentProps> = (props) => {
 const nextStep = useContext(RegisterContext)
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
            <div className="stepper-item active">
              <div className="step-name">login</div>
              <div className="step-counter">3</div>
            </div>
          </div>
          <p className="text-center px-5 desc-form-body mb-0">
            Thank you for giving Radvix a try. We are sure you will love it!
            Let’s gather some basic information to help create your Radvix
            Client account.
          </p>
          <div className="step-dynamic-form">
            <div className="form row px-3">
              <div className="col-md-6 left">
                <div className="item">
                  <span>Account Information:</span>
                  <InputComponent
                    type={InputType.text}
                    label="First Name:"
                    popQuestion="First Name:"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Last Name:"
                    popQuestion="Last Name:"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Email:"
                    popQuestion="Email:"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Password:"
                    popQuestion="Password:"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Confirm Password:"
                    popQuestion="Confirm Password:"
                  ></InputComponent>
                </div>
              </div>
              <div className="col-md-6 right">
                <div className="item">
                  <span>Contact Info:</span>
                  <InputComponent
                    type={InputType.text}
                    label="Institution/Company"
                    popQuestion="Institution/Company"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 1"
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 2"
                  ></InputComponent>
                </div>
                <div className="row">
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="City"
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="State/Province"
                    ></InputComponent>
                  </div>
                </div>
                <div className="row">
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label=" ZIP/Postal Code"
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="Phone"
                    ></InputComponent>
                  </div>
                </div>
                <div className="item">
                  <SelectComponent
                    items={[
                      { name: "test1", id: 1 },
                      { name: "test2", id: 2 },
                    ]}
                    TextItem="name"
                    ValueItem="id"
                    className="my-2"
                    label="Country"
                  ></SelectComponent>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center my-4">
                <MainButton
                  type={MainButtonType.dark}
                  minHeight="42px"
                  fontSize="15px"
                  borderRadius="50px"
                  className="px-3"
                  backgroundColor="#00A598"
                  onClick={()=>{nextStep(2)}}
                  children={
                    <div>
                      Payment
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
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(PlanTwo);
