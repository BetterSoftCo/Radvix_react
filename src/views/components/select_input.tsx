/* eslint-disable no-useless-concat */
import React, { Fragment, ReactNode } from "react";
import { MainButton, MainButtonType } from "./button";
import { CircleIcon, ThemeCircleIcon } from "./circle_icon";
import Select from "react-select";
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
  border?: string;
  isMulti?: boolean;
  inValid?: string;
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
  label,
  popQuestion,
  optional,
  isMulti,
  inValid,
}) => {
  let styles = {
    width: width,
    height: height,
    minWidth: minWidth,
    minHeigth: minHeigth,
  };
  const customStyles = {
    option: (provided: any, state: { isSelected: any; }) => ({
      ...provided,
      ...styles
    }),

  }
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

  return (
    <Fragment>
      {TemplateLabel}
      <Select
        options={items}
        className={`${
          IsclassName + " " + "InputSelectStyle" 
        }`}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles}
        isMulti={isMulti}
        
      />
      {TemplateValidation}
    </Fragment>
  );
};
