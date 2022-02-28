import React, { Fragment, useContext, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import { MainButton, MainButtonType } from "../../../components/button";
import { InputComponent, InputType } from "../../../components/inputs";
import { SelectComponent } from "../../../components/select_input";
import { RegisterContext } from "../register";
interface PropsPlanOne {
  SetPaymentCallBack: (pay: any) => void;
}
const PlanOne: React.FC<PropsPlanOne & RouteComponentProps> = (props) => {
  const nextStep = useContext(RegisterContext);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [institution, setinstitution] = useState("");
  const [addressLine1, setaddressLine1] = useState("");
  const [addressLine2, setaddressLine2] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [, forceUpdate] = useState(0);
  const Validator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
    })
  );
  const payment = () => {
    const formValid = Validator.current.allValid();
    if (!formValid) {
      Validator.current.showMessages();
      forceUpdate(1);
    } else {
      props.SetPaymentCallBack({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        institution,
        addressLine1,
        addressLine2,
        phone,
        zipCode
      })
      nextStep(2);
    }
  };

  return (
    <Fragment>
      <div className="form-register">
        <div className="header-form">
          <img
            src="/images/icons/toggle_icon_register.svg"
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
                    onChange={(e) => {
                      setfirstName(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "First Name",
                      firstName,
                      "required"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Last Name:"
                    popQuestion="Last Name:"
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Last Name",
                      lastName,
                      "required"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Email:"
                    popQuestion="Email:"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Email",
                      email,
                      "required|email"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Password:"
                    popQuestion="Password:"
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Password",
                      password,
                      "required"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Confirm Password:"
                    popQuestion="Confirm Password:"
                    onChange={(e) => {
                      setconfirmPassword(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Password",
                      confirmPassword,
                      `required|in:${password}`
                    )}
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
                    onChange={(e) => {
                      setinstitution(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Institution/Company",
                      institution,
                      "required"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 1"
                    onChange={(e) => {
                      setaddressLine1(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Address Line 1",
                      addressLine1,
                      "required"
                    )}
                  ></InputComponent>
                </div>
                <div className="item">
                  <InputComponent
                    type={InputType.text}
                    label="Address Line 2"
                    onChange={(e) => {
                      setaddressLine2(e.target.value);
                    }}
                    inValid={Validator.current.message(
                      "Address Line 2",
                      addressLine2,
                      "required"
                    )}
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
                      onChange={(e) => {
                        setzipCode(e.target.value);
                      }}
                      inValid={Validator.current.message(
                        "ZIP/Postal Code",
                        zipCode,
                        "required"
                      )}
                    ></InputComponent>
                  </div>
                  <div className="item col-md-6">
                    <InputComponent
                      type={InputType.text}
                      label="Phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      inValid={Validator.current.message(
                        "Phone",
                        phone,
                        "required"
                      )}
                    ></InputComponent>
                  </div>
                </div>
                <div className="item">
                  <SelectComponent
                    items={[
                      { label: "test1", value: 1 },
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
                  onClick={() => {
                    payment();
                  }}
                  children={
                    <div>
                      Payment
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
    </Fragment>
  );
};
export default withRouter(PlanOne);
