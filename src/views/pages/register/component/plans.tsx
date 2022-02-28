import React, { Fragment, useContext } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RegisterContext } from "../register";
const Plans: React.FC<RouteComponentProps> = (props) => {
  const nextStep = useContext(RegisterContext);
  return (
    <Fragment>
      <div className="Annual">
        <h4>
          Please pick the plan which fits your research projects and team size:
        </h4>
        <span>Annual (Save $)</span>
        <div className="form-check form-switch mx-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
      </div>
      <div className="plans d-flex justify-content-between">
        <div className="plan">
          <div className="plan-head free">Radvix Basic</div>
          <div className="plan-price">Free</div>
          <div className="plan-body">
            <p>
              for researchers who are just putting together their team and want
              to start their first research project as a team
            </p>
            <div className="items d-flex flex-column align-items-center">
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/teamwork.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Single Team</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Single Team"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/user.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Up 5 Members</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Up 5 Members"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/lamp.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">5 Projects/Year</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="5 Projects/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/university.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">1 Laboratory </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="1 Laboratory"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/equipment_Icon.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">10 Equip/Lab </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="10 Equip/Lab"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/server_storage.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">500 MB Storage/Year </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="500 MB Storage/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/clock_circular_outline.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Gantt Charts </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Gantt Charts"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/chat.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Discussion Panels </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Discussion Panels"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/writing.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Publication Organizer </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Publication Organizer"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/money_back.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item"> Expense Manager </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title=" Expense Manager"
                  ></i>
                </CircleIcon>
              </div>
            </div>
            <div className="button mt-3 d-flex justify-content-center align-items-center">
              <MainButton
                type={MainButtonType.light}
                children="Start Now"
                borderRadius="15px"
                fontSize="18px"
                className="mx-2 fw-bold"
                backgroundColor="#A3A3A3"
                minWidth="160px"
                minHeight="45px"
                color="#fff"
              ></MainButton>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="plan-head Essential">Radvix Essential</div>
          <div className="plan-price">
            $9.99
            <span className="month">/month</span>
            <span className="billed">(billed annually)</span>
          </div>
          <div className="plan-body">
            <p>
              for small teams that would like to keep track of their data,
              equipment and tasks all in one place!
            </p>
            <div className="items d-flex flex-column align-items-center">
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/teamwork.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Single Team</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Single Team"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/user.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Up 5 Members</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Up 5 Members"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/lamp.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">10 Projects/Year</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="10 Projects/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/university.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">3 Laboratories </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="3 Laboratories "
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/equipment_Icon.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">10 Equip/Lab </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="10 Equip/Lab"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/server_storage.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">1 GB Storage/Year </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="1 GB Storage/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/clock_circular_outline.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Gantt Charts </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Gantt Charts"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/chat.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Discussion Panels </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Discussion Panels"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/writing.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Publication Organizer </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Publication Organizer"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/money_back.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item"> Expense Manager </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title=" Expense Manager"
                  ></i>
                </CircleIcon>
              </div>
            </div>
            <div className="button mt-3 d-flex justify-content-center align-items-center">
              <MainButton
                type={MainButtonType.light}
                children="Try For Free"
                borderRadius="15px"
                fontSize="18px"
                className="mx-2 fw-bold"
                backgroundColor="#00A598"
                minWidth="160px"
                minHeight="45px"
                color="#fff"
                onClick={() => {
                  nextStep(1);
                }}
              ></MainButton>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="plan-head Standard">Radvix Basic</div>
          <div className="plan-price">
            $29.99
            <span className="month">/month</span>
            <span className="billed">(billed annually)</span>
          </div>
          <div className="plan-body">
            <p>
              for large research teams collaborating on multiple research
              projects
              <br />
              <br />
            </p>
            <div className="items d-flex flex-column align-items-center">
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/teamwork.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Up To 10 Teams</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Up To 10 Teams"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/user.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Up 20 Members</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Up 20 Members"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/lamp.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">100 Projects/Year</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="100 Projects/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/university.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Laboratories </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Laboratories "
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/equipment_Icon.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Equipment </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Equipment"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/server_storage.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">1 TB Storage/Year </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="1 TB Storage/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/clock_circular_outline.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Gantt Charts </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Gantt Charts"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/chat.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Discussion Panels </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Discussion Panels"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/writing.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Publication Organizer </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Publication Organizer"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/money_back.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item"> Expense Manager </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title=" Expense Manager"
                  ></i>
                </CircleIcon>
              </div>
            </div>
            <div className="button mt-3 d-flex justify-content-center align-items-center">
              <MainButton
                type={MainButtonType.light}
                children="Try For Free"
                borderRadius="15px"
                fontSize="18px"
                className="mx-2 fw-bold"
                backgroundColor="#0020A5"
                minWidth="160px"
                minHeight="45px"
                color="#fff"
              ></MainButton>
            </div>
          </div>
        </div>
        <div className="plan">
          <div className="plan-head Enterprise">Radvix Enterprise</div>
          <div className="plan-price">Contact Us</div>
          <div className="plan-body">
            <p>
              for universities, departments and large corporations
              <br />
              <br />
            </p>
            <div className="items d-flex flex-column align-items-center">
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/teamwork.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Teams</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Teams"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/user.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Members</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Members"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/lamp.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Project</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Project"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/university.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Laboratories </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Laboratories "
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/equipment_Icon.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Equipment </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Unlimited Equipment"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/server_storage.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Unlimited Storage</span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="500 MB Storage/Year"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/clock_circular_outline.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Gantt Charts </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Gantt Charts"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/Images/icons/chat.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Discussion Panels </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Discussion Panels"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/writing.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item">Publication Organizer </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title="Publication Organizer"
                  ></i>
                </CircleIcon>
              </div>
              <div className="item d-flex justify-content-center align-items-center">
                <img
                  src="/images/icons/money_back.svg"
                  width={22}
                  height={22}
                  alt="radvix"
                  className="mx-1"
                />
                <span className="mx-1 title-item"> Expense Manager </span>
                <CircleIcon
                  width="20px"
                  height="20px"
                  type={ThemeCircleIcon.dark}
                  backgroundColor="transparent"
                  border="1px solid #D5D5D5"
                  fontSize="10px"
                  color="#D5D5D5"
                  className="mx-1"
                >
                  <i
                    className="fas fa-question pointer"
                    title=" Expense Manager"
                  ></i>
                </CircleIcon>
              </div>
            </div>
            <div className="button mt-3 d-flex justify-content-center align-items-center">
              <MainButton
                type={MainButtonType.light}
                children="Start Now"
                borderRadius="15px"
                fontSize="18px"
                className="mx-2 fw-bold"
                backgroundColor="#FFBA00"
                minWidth="160px"
                minHeight="45px"
                color="#fff"
              ></MainButton>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default withRouter(Plans);
