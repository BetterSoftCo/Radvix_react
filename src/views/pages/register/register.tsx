/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Plans from "./component/plans";
import PlanOne from "./component/step_one";
const RegisterPage: React.FC<RouteComponentProps> = (props) => {
  const [state, setstate] = useState(1)
  return (
    <div className="register">
        {state === 0 ? (<Plans/>):state === 1 ? (<PlanOne/>) : ''}
    </div>
  );
};
export default withRouter(RegisterPage);
