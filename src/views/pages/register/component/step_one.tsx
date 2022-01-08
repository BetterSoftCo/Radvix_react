import React, { Fragment } from "react";
import { RouteComponentProps, withRouter } from "react-router";

const PlanOne: React.FC<RouteComponentProps> = (props) => {
  return (
    <Fragment>
        <div>plan one</div>
    </Fragment>
  );
};
export default withRouter(PlanOne);
