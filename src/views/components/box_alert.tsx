import React from "react";
interface IBoxAlert {
  text: string;
}
export const BoxAlert: React.FC<IBoxAlert> = ({ text }) => {
  return (
    <div className="item d-flex justify-content-center align-items-center box-alert">
      {text}
    </div>
  );
};
