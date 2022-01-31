/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Plans from "./component/plans";
import PlanOne from "./component/step_one";
import PlanTwo from "./component/plan_two";
import PlanThree from "./component/plan_three";
export const RegisterContext = React.createContext((stpe: number) => {});
 const RegisterPage: React.FC<RouteComponentProps> = () => {
  const [state, setStete] = useState(0);
  const nextStep = (step: number) => {
    setStete(step);
  };
  return (
    <div className="register">
      <RegisterContext.Provider value={nextStep}>
        {state === 0 ? (
          <Plans />
        ) : state === 1 ? (
          <PlanOne />
        ) : state === 2 ? (
          <PlanTwo />
        ) : state === 3 ? (
          <PlanThree />
        ) : (
          ""
        )}
      </RegisterContext.Provider>
    </div>
  );
};
export default withRouter(RegisterPage);
