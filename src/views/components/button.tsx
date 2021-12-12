/* eslint-disable no-extend-native */

import React from "react";
export enum MainButtonType {
  dark = "darkButton",
  light = "lightButton",
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
  className = "",
  color,
}) =>
  <button
    onClick={onClick}
    className={`${className + " " + type}`}
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
  </button>;
