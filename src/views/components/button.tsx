/* eslint-disable no-extend-native */

import React from "react";
import ReactLoading from "react-loading";
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
  loading?: boolean;
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
  loading,
}) => {
  let IsLoading ;
  if(loading){
    IsLoading = 'loading'
  }
  return (
    <button
      onClick={onClick}
      className={`${className + " " + type + " " + IsLoading}`}
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
      {loading ? (
        <ReactLoading type="spin" color={color} height={20} width={20} />
      ) : (
        children
      )}
    </button>
  );
};
