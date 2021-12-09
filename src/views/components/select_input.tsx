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
  items: any[];
  TextItem: string;
  ValueItem: string;
  label?: ReactNode;
  popQuestion?: string;
  optional?: string;
  border?:string;
}
export const SelectComponent: React.FC<InputsProps> = ({
  width,
  height,
  minWidth,
  minHeigth,
  backgroundColor,
  className,
  borderRadius,
  border,
  onChange,
  placeholder,
  items,
  TextItem,
  ValueItem,
  label,
  popQuestion,
  optional,
}) => {
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    border:border
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

  return (
    <Fragment>
      {TemplateLabel}
      <select
        className={`${
          IsclassName + " " + "InputSelectStyle" + " " + "form-select"
        }`}
        style={styles}
        aria-label="Default select example"
        onChange={onChange}
        defaultValue={placeholder}
      >
        <option disabled>{placeholder}</option>
        {items.map((item, index) => (
          <option value={item[`${ValueItem}`]} key={index}>
            {item[`${TextItem}`]}
          </option>
        ))}
      </select>
    </Fragment>
  );
};
