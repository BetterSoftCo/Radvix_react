import React from "react";
export enum MainButtonType {
  dark,
  light,
}

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
  color?:string
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
  color
}) => {
  let styleName: string = "";
  if (type === MainButtonType.dark) {
    styleName = "darkButton";
  }

  if (type === MainButtonType.light) {
    styleName = "lightButton";
  }
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
      IsclassName = ''
  }
  return (
    <button
      onClick={onClick}
      className={`${IsclassName + " " + styleName}`}
      style={{
        display: display,
        backgroundColor,
        border,
        borderRadius,
        minHeight,
        minWidth,
        fontSize,
        color
      }}
    >
    {children}
    </button>
  );
};
