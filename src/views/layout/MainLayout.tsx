import React, { Fragment, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { routes } from "../../core/constants";
import { Header } from "./Header";
import { RightSection } from "./RightSection";
import { Sidebar } from "./sidebar";

interface IMainLayout {
  children: ReactNode;
}
class MainLayout extends React.Component<IMainLayout & RouteComponentProps> {
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== "/login" ? (
          <Fragment>
            <Header></Header>
            <div className="main">
              <div className="row">
                <div className="col-12 col-md-2 col-lg-1 ">
                  <div className="parent-sidebar">
                    <Sidebar></Sidebar>
                  </div>
                </div>
                <div className="col-12 col-md-10 col-lg-11 col-xl-8">
                  {this.props.children}
                </div>
                <div className="col-xl-3">
                  <RightSection></RightSection>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <div className="container-fluid justify-content-center align-items-center d-flex" style={{height:'100vh'}} >
            {this.props.children}
          </div>
        )}
      </Fragment>
    );
  }
}

export default withRouter(MainLayout);
