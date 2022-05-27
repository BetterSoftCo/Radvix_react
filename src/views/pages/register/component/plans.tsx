import React, { Fragment, useContext, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { RegisterController } from "../../../../controllers/register/research_controller";
import { SubscriptionResResult } from "../../../../data/models/responses/register/subscription_res";
import { MainButton, MainButtonType } from "../../../components/button";
import { CircleIcon, ThemeCircleIcon } from "../../../components/circle_icon";
import { RegisterContext } from "../register";
interface Iprops {
  setSubscriptionID: (subId: number) => void;
}
const Plans: React.FC<Iprops & RouteComponentProps> = (props) => {
  const controller = new RegisterController();
  const [Subscription, setSubscription] = useState<SubscriptionResResult[]>([]);
  const getSubscription = () => {
    controller.getSubscription(
      {
        PageNumber: 1,
        PageSize: 10,
        SearchParameter: "",
      },
      (res) => {
        setSubscription(res);
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    getSubscription();
  }, []);
  const SetSubId = (id: number) => {
    props.setSubscriptionID(id);
  };
  const nextStep = useContext(RegisterContext);
  return (
    <Fragment>
      <div className="Annual">
        <h4>
          Please pick the plan which fits your research projects and team size:
        </h4>
        <span className="ms-3">Annual (Save $)</span>
        <div className="form-check form-switch mx-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Monthly
          </label>
        </div>
      </div>
      {Subscription.length ? (
        <div className="plans d-flex justify-content-between flex-wrap flex-lg-nowrap">
          <div className="plan">
            <div className="plan-head free">{Subscription[0].title}</div>
            <div className="plan-price">Free</div>
            <div className="plan-body">
              <p>
                for researchers who are just putting together their team and
                want to start their first research project as a team
              </p>
              <div className="items d-flex flex-column align-items-center">
                <div className="item d-flex justify-content-center align-items-center">
                  <img
                    src="/images/icons/teamwork.svg"
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Single Team</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Up {Subscription[0].memberCount} Members
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[0].researchPerYear} Projects/Year
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[0].laboratoryCount} Laboratory{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[0].equipmentPerLaboratory} Equip/Lab{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[0].storage} MB Storage/Year{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Gantt Charts </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Discussion Panels </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Publication Organizer{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item"> Expense Manager </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                  fontSize="13px"
                  className="mx-2 fw-bold"
                  backgroundColor="#A3A3A3"
                  minWidth="160px"
                  minHeight="45px"
                  color="#fff"
                  onClick={() => {
                    SetSubId(Subscription[0].id);
                    nextStep(1);
                  }}
                ></MainButton>
              </div>
            </div>
          </div>
          <div className="plan">
            <div className="plan-head Essential">{Subscription[1].title}</div>
            <div className="plan-price">
              ${Subscription[1].price}
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Single Team</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Up {Subscription[1].memberCount} Members
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[1].researchPerYear} Projects/Year
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[1].laboratoryCount} Laboratories{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[1].equipmentPerLaboratory} Equip/Lab{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[1].storage} MB Storage/Year{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Gantt Charts </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Discussion Panels </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Publication Organizer{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item"> Expense Manager </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                  fontSize="13px"
                  className="mx-2 fw-bold"
                  backgroundColor="#00A598"
                  minWidth="160px"
                  minHeight="45px"
                  color="#fff"
                  onClick={() => {
                    SetSubId(Subscription[1].id);
                    nextStep(1);
                  }}
                ></MainButton>
              </div>
            </div>
          </div>
          <div className="plan">
            <div className="plan-head Standard">{Subscription[2].title}</div>
            <div className="plan-price">
              ${Subscription[2].price}
              <span className="month">/month</span>
              <span className="billed">(billed annually)</span>
            </div>
            <div className="plan-body">
              <p>
                for large research teams collaborating on multiple research
                projects
              </p>
              <div className="items d-flex flex-column align-items-center">
                <div className="item d-flex justify-content-center align-items-center">
                  <img
                    src="/images/icons/teamwork.svg"
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Up To {Subscription[2].teamCount} Teams
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Up {Subscription[2].memberCount} Members
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[2].researchPerYear} Projects/Year
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Unlimited Laboratories{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Equipment </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    {Subscription[2].storage} MB Storage/Year{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Gantt Charts </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Discussion Panels </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Publication Organizer{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item"> Expense Manager </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                  fontSize="13px"
                  className="mx-2 fw-bold"
                  backgroundColor="#0020A5"
                  minWidth="160px"
                  minHeight="45px"
                  color="#fff"
                  onClick={() => {
                    SetSubId(Subscription[2].id);
                    nextStep(1);
                  }}
                ></MainButton>
              </div>
            </div>
          </div>
          <div className="plan">
            <div className="plan-head Enterprise">{Subscription[3].title}</div>
            <div className="plan-price">Contact Us</div>
            <div className="plan-body">
              <p>for universities, departments and large corporations</p>
              <div className="items d-flex flex-column align-items-center">
                <div className="item d-flex justify-content-center align-items-center">
                  <img
                    src="/images/icons/teamwork.svg"
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Teams</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Members</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Project</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Unlimited Laboratories{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Equipment </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Unlimited Storage</span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Gantt Charts </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">Discussion Panels </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item">
                    Publication Organizer{" "}
                  </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                    width={16}
                    height={16}
                    alt="radvix"
                    className="mx-1"
                  />
                  <span className="mx-1 title-item"> Expense Manager </span>
                  <CircleIcon
                    width="16px"
                    height="16px"
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
                  fontSize="13px"
                  className="mx-2 fw-bold"
                  backgroundColor="#FFBA00"
                  minWidth="160px"
                  minHeight="45px"
                  color="#fff"
                  onClick={() => {
                    SetSubId(Subscription[3].id);
                    nextStep(1);
                  }}
                ></MainButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default withRouter(Plans);
