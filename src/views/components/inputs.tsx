/* eslint-disable no-useless-concat */
import React, { Fragment, ReactNode } from "react";
import { MainButton, MainButtonType } from "./button";
import { CircleIcon, ThemeCircleIcon } from "./circle_icon";

export enum InputType {
  text,
  textarea,
}

interface InputsProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeigth?: string;
  backgroundColor?: string;
  className?: string;
  borderRadius?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  placeholder?: string;
  type: InputType;
  label?: ReactNode;
  popQuestion?: string;
  optional?: string;
  rows?: number;
  inValid?: string;
}
export const InputComponent: React.FC<InputsProps> = ({
  width,
  height,
  minWidth,
  minHeigth,
  backgroundColor,
  className,
  borderRadius,
  onChange,
  onBlur,
  placeholder,
  type,
  label,
  popQuestion,
  optional,
  rows = 4,
  inValid,
}) => {
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
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
  let TemplateValidation;
  let IsinValid;
  if (inValid) {
    TemplateValidation = <div>{inValid}</div>;
    IsinValid = 'is-invalid';
  }
  return type === InputType.text ? (
    <Fragment>
      {TemplateLabel}
      <input
        type="text"
        style={styles}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`${
          IsclassName + " " + "InputComponentStyle" + " " + "form-control" + " " + IsinValid
        }`}
      />
      {TemplateValidation}
    </Fragment>
  ) : (
    <Fragment>
      {TemplateLabel}
      <textarea
        style={styles}
        rows={rows}
        className={`${
          IsclassName + " " + "InputComponentStyle" + " " + "form-control"
        }`}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
      {TemplateValidation}
    </Fragment>
  );
};
