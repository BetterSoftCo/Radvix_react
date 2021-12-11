/* eslint-disable no-extend-native */

import React from "react";
export enum MainButtonType {
  dark,
  light,
}
declare global {
   interface Number {
    islight(): string;
  }
}
Number.prototype.islight = function (this: MainButtonType) {
  if(this === MainButtonType.light){
    return 'lightButton'
  }else{
    return 'darkButton'
  }
};


interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  border?: string;
  backgroundColor?: string;
  minHeight?: string;
  borderRadius?: string;
  minWidth?: string;
  display?: string;
  type?: MainButtonType;
  fontSize?: string;
  className?: string;
  color?: string;
}

export const MainButton: React.FC<MainButtonProps> = ({
  border,
  backgroundColor,
  minHeight,
  minWidth,
  borderRadius,
  display,
  onClick,
  type,
  children,
  fontSize,
  className,
  color,
}) => {

  

  
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  return (
    <button
      onClick={onClick}
      className={`${IsclassName + " " + type?.islight()}`}
      style={{
        display: display,
        backgroundColor,
        border,
        borderRadius,
        minHeight,
        minWidth,
        fontSize,
        color,
      }}
    >
      {children}
    </button>
  );
};
