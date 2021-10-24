import React, { ReactNode } from "react";
import { Theme } from "../../core/utils";

interface IconTextVerticalProp {
  text: string;
  theme: Theme;
  children: ReactNode;
  className?: string;
  fontSize?: string;
}
export const IconTextVertical: React.FC<IconTextVerticalProp> = ({
  text,
  theme,
  children,
  className,
  fontSize,
}) => {
  let StyleTheme: string = "";
  if (theme === Theme.light) {
    StyleTheme = "IconTextVerticalLight";
  } else {
    StyleTheme = "IconTextVerticalDark";
  }
  let IsclassName;
  if (className !== undefined) {
    IsclassName = className;
  } else {
    IsclassName = "";
  }
  let Styles = {
    fontSize,
  };
  return (
    <div
      style={Styles}
      className={`${IsclassName + " " + StyleTheme + " " + "IconTextVertical"}`}
    >
      {children}
      <span>{text}</span>
    </div>
  );
};
