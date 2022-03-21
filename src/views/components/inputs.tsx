/* eslint-disable no-useless-concat */
import React, { Fragment, ReactNode, useState } from "react";
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
  value?: string;
  isPassword?: boolean;
  fontSize?: string;
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
  value,
  isPassword,
  fontSize,
}) => {
  const [ShowPass, setShowPass] = useState(false);
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    fontSize: fontSize,
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
      <span
        className="label d-flex align-items-center"
        style={{ fontSize: fontSize }}
      >
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
    IsinValid = "is-invalid";
  }
  return type === InputType.text ? (
    <Fragment>
      {TemplateLabel}
      {!isPassword ? (
        <input
          type="text"
          style={styles}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          className={`${
            IsclassName +
            " " +
            "InputComponentStyle" +
            " " +
            "form-control" +
            " " +
            IsinValid
          }`}
        />
      ) : (
        <div className="input-group">
          <span
            className="input-group-text pointer"
            onClick={() => {
              setShowPass(!ShowPass);
            }}
            id="basic-addon1"
          >
            <i className={ShowPass ? "fa fa-eye" : "fa fa-eye-slash"}></i>
          </span>
          <input
            type={ShowPass ? "text" : "password"}
            style={styles}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            className={`${
              IsclassName +
              " " +
              "InputComponentStyle" +
              " " +
              "form-control" +
              " " +
              IsinValid
            }`}
          />
        </div>
      )}

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
        value={value}
      ></textarea>
      {TemplateValidation}
    </Fragment>
  );
};
