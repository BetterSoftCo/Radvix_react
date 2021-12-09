import React, { Fragment } from "react";
export class SplashPage extends React.Component {
  render() {
    return (
      <Fragment>
        {/* <div className="container">
          <MainButton
            type={MainButtonType.light}
            minHeight="47px"
            minWidth="153px"
            fontSize="1.5rem"
            borderRadius="50px"
            children={"hellow"}
            onClick={() => console.log("hello")}
          />
          <MainButton
            type={MainButtonType.dark}
            minHeight="19px"
            minWidth="153px"
            fontSize="15px"
            borderRadius="50px"
            children={"Principal Investigator "}
            onClick={() => console.log("hello")}
          />
          <MainButton
            type={MainButtonType.dark}
            minHeight="43px"
            fontSize="15px"
            borderRadius="50px"
            children={
              <div>
                <img src="images/component/group_1.svg" alt="sssss" /> Home
              </div>
            }
            onClick={() => console.log("hello")}
          />
          <br />
          <CircleIcon type={ThemeCircleIcon.light} height="22px" width="22px">
            <img src="Images/component/edit.svg" alt="" />
          </CircleIcon>
          <br />

          <InputComponent
            placeholder="ssssssss"
            type={InputType.text}
            items={list}
            TextItem="text"
            ValueItem="id"
            onChange={(e) => {
              handelSelect(e);
            }}
          />
          <br />
          <IconTextVertical
            text="Labratory"
            theme={Theme.light}
            fontSize="35px"
            children={
              <img src="Images/component/edit.svg" width="35px" height="35px" />
            }
          ></IconTextVertical> */}
        {/* </div> */}
      </Fragment>
    );
  }
}
