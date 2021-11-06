/* eslint-disable no-useless-concat */
import React, { ReactNode } from "react";
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
  return (
    <div className="Icon-inside">
      <input
        type="text"
        placeholder={placeholder}
        className={`${
          IsclassName + " " + "InputComponentStyle" + " " + "form-control"
        }`}
        style={styles}
      />
      <span className="icon">{chilren}</span>
    </div>
  );
};
