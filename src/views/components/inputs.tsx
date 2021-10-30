import React, { Fragment, ReactNode } from "react";

export enum InputType {
  text,
  select,
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
  placeholder?: string;
  type: InputType;
  items?: any[];
  TextItem?: string;
  ValueItem?: string;
  
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
  placeholder,
  type,
  items,
  TextItem,
  ValueItem,
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
 
  

  return type === InputType.text ? (
    <input
      type="text"
      style={styles}
      onChange={onChange}
      placeholder={placeholder}

      className={`${
        IsclassName +
        " " +
        "InputComponentStyle" +
        " " +
        "form-control"
      }`}
    />
  ) : (
    <select
      className={`${
        IsclassName + " " + "InputSelectStyle" + " " + "form-select"
      }`}
      style={styles}
      aria-label="Default select example"
      onChange={onChange}
    >
      {items?.map((item, index) => (
        <option value={item[`${ValueItem}`]} key={index}>
          {item[`${TextItem}`]}
        </option>
      ))}
    </select>
  );
};
