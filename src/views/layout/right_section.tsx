/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../core/constants";
import { Theme } from "../../core/utils";
import { MainButton, MainButtonType } from "../components/button";
import { IconTextVertical } from "../components/Icon_text_vertical";
const RightSection: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="righ-section">
      <div className="top d-flex justify-content-around align-items-center text-center">
        <IconTextVertical
          onClick={() => {
            props.history.push(AppRoutes.task_new);
          }}
          text={<span>Create <br /> New Task</span>}
          theme={Theme.light}
          children={<img src="/images/icons/new_task_icon.svg" />}
          className="pointer"
        ></IconTextVertical>
        <IconTextVertical
          text={<span>New <br /> Discussion</span>}
          theme={Theme.light}
          children={<img src="/Images/icons/chat_dark_icon.svg" />}
          onClick={() => {
            props.history.push(AppRoutes.discussion_new);
          }}
          className="pointer"
        ></IconTextVertical>
        <IconTextVertical
          text={<span>Data <br /> Collection</span>}
          theme={Theme.light}
          children={<img src="/images/icons/quick_data_collection.svg" />}
          onClick={() => {
            props.history.push(AppRoutes.data_mydata);
          }}
          className="pointer"
        ></IconTextVertical>
      </div>
      <div className="bottom">
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-start align-items-center">
            <img src="/Images/icons/chat.png" className="mx-2" />
            <span
              className="text-light pointer title-recent"
              onClick={() => {
                props.history.push(AppRoutes.discussion_list);
              }}
            >
              3 Recent Discussions
            </span>
          </div>
          <div className="massages ">
            <ul>
              {[1, 2, 3].map((item, index) => (
                <li
                  onClick={() => {
                    props.history.push(AppRoutes.discussion);
                  }}
                  className="pointer"
                  key={index}
                >
                  <span
                    className="text-truncate d-inline-block"
                    style={{ maxWidth: "155px" }}
                  >
                    TGA issues with are...TGA issues with are...TGA issues with
                    are...
                  </span>
                  <MainButton
                    type={MainButtonType.dark}
                    children="1 message"
                    borderRadius="15px"
                    backgroundColor="#202020"
                    color="#8A8A8A"
                    fontSize="13px"
                  ></MainButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(RightSection);
