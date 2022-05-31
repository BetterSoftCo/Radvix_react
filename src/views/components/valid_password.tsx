/* eslint-disable no-useless-concat */
import React, { ReactNode } from "react";
import { Theme } from "../../core/utils";

interface ValidPasswordProp {
  password: string;
  actions: any;
}
export const ValidPassword: React.FC<ValidPasswordProp> = ({
  password,
  actions,
}) => {
  const testedResult = password;
  const createPasswordLabel = () => {
    let score = 0;
    let regexPositive = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    regexPositive.forEach((regex, index) => {
      if (new RegExp(regex).test(testedResult)) {
        score += 1;
      }
    });
    switch (score) {
      case 0:
        return {
          value: 0,
          info: "",
        };
      case 1:
        return {
          value: 1,
          info: "Weak",
        };
      case 2:
        return {
          value: 2,
          info: "Fair",
        };
      case 3:
        return {
          value: 3,
          info: "Good",
        };
      case 4:
        return {
          value: 4,
          info: "Strong",
        };
      default:
        return null;
    }
  };
  // eslint-disable-next-line no-lone-blocks
  {
    actions(createPasswordLabel()?.info);
  }
  return (
    <>
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${
            createPasswordLabel()?.info
          }`}
          value={createPasswordLabel()?.value}
          max="4"
        />
        <br />
        <p className="password-strength-meter-label">
          {password && (
            <>
              <p
                className={`password__label strength-${
                  createPasswordLabel()?.info
                }`}
              >
                Password strength: <span>{createPasswordLabel()?.info} </span>
              </p>
            </>
          )}
        </p>
      </div>
    </>
  );
};
