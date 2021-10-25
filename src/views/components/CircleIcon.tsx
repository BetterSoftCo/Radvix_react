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
}
export const CircleIcon: React.FC<CircleIconInterface> = (
  props,
) => {
  console.log(props);
  
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
      IsclassName = ''
  }
  return (
    <span
      className={`${Theme + " " + IsclassName + " " + 'CircleIcon'}`}
      style={{
        backgroundColor:props.backgroundColor,
        color:props.color,
        width:props.width,
        height:props.height,
        fontSize:props.fontSize,
      }}
    >
      {props.children}
    </span>
  );
};
