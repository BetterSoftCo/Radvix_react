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
  name: string;
  items: any[];
  TextItem: string;
  ValueItem: string;
  label?: ReactNode;
  popQuestion?: string;
  optional?: string;
  inValid?: string;
  Selected?: number;
}
export const RadioGroup: React.FC<InputsProps> = ({
  width,
  height,
  minWidth,
  minHeigth,
  backgroundColor,
  className,
  borderRadius,
  onChange,
  name,
  items,
  TextItem,
  ValueItem,
  label,
  popQuestion,
  optional,
  inValid,
  Selected,
}) => {
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };
  let IsclassName: string;
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
  let IsinValid: string;
  if (inValid) {
    TemplateValidation = <div>{inValid}</div>;
    IsinValid = "is-invalid";
  }

  return (
    <Fragment>
      {TemplateLabel}
      {items.map((item, index) => (
        <div
          className={`${
            IsclassName +
            " " +
            "RadioButtonGroupStyle" +
            " " +
            "form-check form-check-inline mt-2" +
            " " +
            IsinValid
          }`}
          style={styles}
          key={index}
        >
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={item[ValueItem] + name}
            value={item[ValueItem]}
            onChange={onChange}
            checked={item[ValueItem] === Selected}
          />
          <label
            className="form-check-label"
            htmlFor={item[`${ValueItem}`] + name}
            style={{ fontSize: "12px" }}
          >
            {item[`${TextItem}`]}
          </label>
        </div>
      ))}
      {TemplateValidation}
    </Fragment>
  );
};
