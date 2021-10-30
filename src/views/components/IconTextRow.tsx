import React, { ReactNode } from "react";
import { Theme } from "../../core/utils";

interface IconTextRowProp {
  text: string;
  theme: Theme;
  children: ReactNode;
  className?: string;
  fontSize?: string;
}
export const IconTextRow: React.FC<IconTextRowProp> = ({
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
      className={`${IsclassName + " " + StyleTheme + " " + "IconTextRow"}`}
    >
      {children}
      <span>{text}</span>
    </div>
  );
};
