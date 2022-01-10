/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Plans from "./component/plans";
import PlanOne from "./component/step_one";
import PlanTwo from "./component/plan_two";
const RegisterPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setstate] = useState(2)
  return (
    <div className="register">
        {state === 0 ? (<Plans/>):state === 1 ? (<PlanOne/>) : state === 2 ? <PlanTwo/> : ''}
    </div>
  );
};
export default withRouter(RegisterPage);
