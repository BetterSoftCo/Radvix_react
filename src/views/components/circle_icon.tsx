/* eslint-disable no-useless-concat */
import React from "react";
export enum ThemeCircleIcon {
  light,
  dark,
}
interface CircleIconInterface {
  type?: ThemeCircleIcon;
  backgroundColor?: string;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  className?: string;
  onClick?: (e: any) => void;
  border?: string;
}
export const CircleIcon: React.FC<CircleIconInterface> = (props) => {
  let Theme: string;
  if (props.type === ThemeCircleIcon.dark) {
    Theme = "darkCircleIcon";
  } else {
    Theme = "lightCircleIcon";
  }
  let IsclassName;
  if (props.className !== undefined) {
    IsclassName = props.className;
  } else {
    IsclassName = "";
  }
  return (
    <span
      className={`${Theme + " " + IsclassName + " " + "CircleIcon"}`}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: props.height,
        fontSize: props.fontSize,
        border: props.border,
        minWidth: props.width,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
};
