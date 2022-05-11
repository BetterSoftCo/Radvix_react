/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
import { InputComponent, InputType } from "../../components/inputs";
import SimpleReactValidator from "simple-react-validator";
import { MainButton, MainButtonType } from "../../components/button";
import { UpdateMyProfileReq } from "../../../data/models/requests/user/update_myprofile_req";
import { UserController } from "../../../controllers/user/user_controller";
import { MemberController } from "../../../controllers/member/member_controller";
const InviteRegister: React.FC<RouteComponentProps> = (props) => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let token = params.get("token");
  let userId = params.get("userId");
  console.log(userId);
  console.log(token);

  console.log(token === localStorage.getItem("token"));

  const controller: UserController = new UserController();
  const memberController: MemberController = new MemberController();
  const [, forceUpdate] = useState(0);
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
  const [role, setRole] = useState(0);
  const [degree, setdegree] = useState(0);
  const [loading, setloading] = useState(false);

  const [listCountry, setlistCountry] = useState<
    Array<{ label: string; value: number } | {}>
  >([]);
  const Validator = useRef(
    new SimpleReactValidator({
      className: "text-danger",
    })
  );
  useEffect(() => {
    memberController.getMember(
      { userId: userId!, token: token ?? "" },
      (res) => {
        setfirstName(res.firstName);
        setlastName(res.lastName);
        setemail(res.userEmail);
        setRole(res.role);
        setdegree(res.degree);
      },
      () => {}
    );
  }, []);
  const handelRegister = () => {
    const formValid = Validator.current.allValid();
    if (!formValid) {
      Validator.current.showMessages();
      forceUpdate(1);
    } else {
      const body: UpdateMyProfileReq = {
        id: userId!,
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email: email ?? "",
        degree: degree,
        major: "",
        phoneNumber: "",
        institution: "",
        addressLine1: "",
        addressLine2: "",
        locationId: 0,
        zipCode: "",
        token: token ?? "",
        role: role,
        billingEmail: email,
        billingAddress: "",
        cardInfomation: "",
        cardExpireDate: "",
        cardCVC: "",
        nameOnCard: "",
      };
      setloading(true);
      controller.UpdateMyProfile(
        body,
        () => {
          controller.changePassword(
            {
              email: email,
              oldPassword: password,
              newPassword: password,
              token: token ?? "",
            },
            () => {
              setloading(false);
              props.history.push(AppRoutes.login);
            },
            () => {}
          );
        },
        () => {
          setloading(false);
        }
      );
    }
  };
  return (
    <div className="register">
      <div className="form-register" id="invite-register">
        <div className="header-form">
          <span className="ms-3">Welcome to Radvix</span>
        </div>
        <div className="body-form">
          <h5 className="text-center pt-4">Complete Registration</h5>
          <p className="text-center px-5 desc-form-body mb-0">
            You have been invited by{" "}
            <h6 className="font-bolder">
              {" "}
              Full name of the user who has sent the invite{" "}
            </h6>{" "}
            to join Radvix to coordinate and manage research projects in a a
            very simple and smart way!
          </p>
          <p className="text-center px-5 desc-form-body mb-0">
            <h6 className="font-bolder">Invitation Note:</h6>{" "}
            {
              "Show this section if invitation note section has been completed. If there is no note, don’t need to show the whole Invitation note section."
            }
          </p>

          <div className="step-dynamic-form">
            <div className="form row px-3">
              <div className="col-md-6 px-4 left">
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
                <p className="px-0 desc-form-body my-4">
                  For completing your registration, you have two options:
                </p>
              </div>
              <div className="col-md-6 px-4 right">
                <div className="item">
                  <br />
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
              </div>
            </div>
            <div className="form form-2 row px-3">
              <div className="col-md-6 px-4 left">
                <h6 className="font-bolder">Option 1:</h6>
                <p className="desc-form-body">
                  Use your email and password to login and use Radvix:
                </p>
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
                    value={email}
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
                    isPassword={true}
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
                    isPassword={true}
                  ></InputComponent>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center mt-5 mb-4">
                  <MainButton
                    type={MainButtonType.dark}
                    minHeight="40px"
                    fontSize="13px"
                    borderRadius="50px"
                    className="px-3"
                    backgroundColor="#00A598"
                    onClick={() => {
                      handelRegister();
                    }}
                    loading={loading}
                    children={
                      <div>
                        Enter Radvix Dashboard
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
              <div className="col-md-6 px-4 right">
                <h6 className="font-bolder">Option 2:</h6>
                <p className="desc-form-body">
                  OAuth login using third-party apps like Google, LinkedIn or
                  ORCID:
                </p>
                <div className="d-flex flex-column pe-5 ps-0 me-4 justify-content-start">
                  <MainButton
                    type={MainButtonType.dark}
                    minHeight="30px"
                    minWidth="60px"
                    fontSize="12px"
                    borderRadius="50px"
                    className="mb-2 pe-3"
                    backgroundColor="#A6CE39"
                    children={
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src="/images/images/orcid-og-image.png"
                          width={30}
                          height={30}
                          className="me-2"
                        />{" "}
                        Login using ORCiD
                      </div>
                    }
                  ></MainButton>
                  <MainButton
                    type={MainButtonType.dark}
                    minHeight="35px"
                    minWidth="76px"
                    fontSize="12px"
                    borderRadius="50px"
                    className="mb-2 pe-3"
                    backgroundColor="#4285F4"
                    children={
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src="/images/images/google_scholar_icon_130918.png"
                          className="me-2"
                        />{" "}
                        Login using Google
                      </div>
                    }
                  ></MainButton>
                  <MainButton
                    type={MainButtonType.dark}
                    minHeight="35px"
                    minWidth="76px"
                    fontSize="12px"
                    borderRadius="50px"
                    className="mb-2 pe-3"
                    backgroundColor="#0274B3"
                    children={
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src="/images/images/linkedIn_logo_initials.png"
                          className="me-2"
                        />{" "}
                        Login using LinkedIn
                      </div>
                    }
                  ></MainButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(InviteRegister);
