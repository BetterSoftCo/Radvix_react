/* eslint-disable no-useless-concat */
import React, { Fragment, ReactNode } from "react";
import { MainButton, MainButtonType } from "./button";
import { CircleIcon, ThemeCircleIcon } from "./circle_icon";
interface InputsProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeigth?: string;
  backgroundColor?: string;
  className?: string;
  borderRadius?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  chilren: ReactNode;
  label?: ReactNode;
  optional?: string;
  popQuestion?: string;
  TopPosition:string
}
export const InputIcon: React.FC<InputsProps> = ({
  width,
  height,
  minHeigth,
  minWidth,
  backgroundColor,
  className,
  borderRadius,
  onChange,
  placeholder,
  chilren,
  label,
  optional,
  popQuestion,
  TopPosition
}) => {
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };
  let TemplateLabel;
  if (label !== null && label !== undefined) {
    TemplateLabel = (
      <span className="label d-flex align-items-center">
        {label}
        {optional ? (
          <MainButton
            type={MainButtonType.light}
            children={optional}
            borderRadius="50px"
            fontSize="15px"
            className="mx-2"
          ></MainButton>
        ) : null}
        {popQuestion ? (
          <CircleIcon
            width="20px"
            height="20px"
            type={ThemeCircleIcon.dark}
            backgroundColor="transparent"
            border="1px solid #D5D5D5"
            fontSize="10px"
            color="#D5D5D5"
          >
            <i className="fas fa-question pointer" title={popQuestion}></i>
          </CircleIcon>
        ) : null}
      </span>
    );
  }
  return (
    <Fragment>
      {TemplateLabel}
      <div className="Icon-inside">
        <input
          type="text"
          placeholder={placeholder}
          className={`${
            IsclassName + " " + "InputComponentStyle" + " " + "form-control"
          }`}
          onKeyDown={onChange}
          style={styles}
        />
        <span className="icon" style={{top:`${TopPosition}`}}>{chilren}</span>
      </div>
    </Fragment>
  );
};
