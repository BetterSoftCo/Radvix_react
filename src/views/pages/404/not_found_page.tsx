import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
const NotFoundPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="notfound d-flex justify-content-center align-content-center w-100 h-100">
      <div id="container ">
        <h1 className="display-1">404</h1>

        <div className="message text-center">Page not found</div>
      </div>
    </div>
  );
};
export default withRouter(NotFoundPage);
