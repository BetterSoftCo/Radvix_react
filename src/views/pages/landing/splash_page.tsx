import React, { Fragment } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { AppRoutes } from "../../../core/constants";
 class SplashPage extends React.Component<RouteComponentProps> {
  componentDidMount(){
    this.props.history.push(AppRoutes.dashboard)
  }
  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}
export default withRouter(SplashPage);
