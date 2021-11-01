/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Theme } from "../../core/utils";
import { MainButton, MainButtonType } from "../components/button";
import { IconTextVertical } from "../components/Icon_text_vertical";
export const RightSection: React.FC = () => {
  return (
    <div className="righ-section">
      <div className="top d-flex justify-content-around align-items-center text-center">
        <IconTextVertical
          text="Create 
          New Task"
          theme={Theme.light}
          children={<img src="/images/layout/New Task Icon.svg" />}
        ></IconTextVertical>
        <IconTextVertical
          text="New
          Discussion"
          theme={Theme.light}
          children={<img src="/images/layout/Group 27.svg" />}
        ></IconTextVertical>
        <IconTextVertical
          text="Data
          Collection"
          theme={Theme.light}
          children={<img src="/images/layout/Quick Data Collection.svg" />}
        ></IconTextVertical>
      </div>
      <div className="bottom">
        <div className="d-flex flex-column justify-content-center p-3">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/images/layout/chat.svg" className="mx-2" />
            <span className="text-light">3 Recent Discussions</span>
          </div>
          <div className="massages">
            <ul>
              <li>
                <span className="text-truncate d-inline-block" style={{maxWidth:'120px'}}>TGA issues with are...TGA issues with are...TGA issues with are...</span>
                <MainButton
                  type={MainButtonType.dark}
                  children="1 message"
                  borderRadius="15px"
                  backgroundColor="#202020"
                  color="#8A8A8A"
                ></MainButton>
              </li>
              <li>
                <span className="text-truncate d-inline-block" style={{maxWidth:'120px'}}>TGA issues with are...TGA issues with are...TGA issues with are...</span>
                <MainButton
                  type={MainButtonType.dark}
                  children="1 message"
                  borderRadius="15px"
                  backgroundColor="#202020"
                  color="#8A8A8A"
                ></MainButton>
              </li>
              <li>
                <span className="text-truncate d-inline-block" style={{maxWidth:'120px'}}>TGA issues with are...TGA issues with are...TGA issues with are...</span>
                <MainButton
                  type={MainButtonType.dark}
                  children="1 message"
                  borderRadius="15px"
                  backgroundColor="#202020"
                  color="#8A8A8A"
                ></MainButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
