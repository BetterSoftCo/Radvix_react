import React, { Fragment, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Header from "./header_layout";
import RightSection from "./right_section";
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";
import { AppSettingController } from "../../controllers/app_setting/setting_controller";

interface IMainLayout {
  children: ReactNode;
}
class MainLayout extends React.Component<IMainLayout & RouteComponentProps> {
  private controller: AppSettingController = new AppSettingController();
  state = {
    loading: false,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.controller.enumList().then(() => {
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/Register" ? (
          <Fragment>
            <Header></Header>
            <div className="main">
              <div className="row" style={{ minHeight: "90vh" }}>
                <div className="col-12 col-md-2 col-lg-1 sidebar">
                  <Sidebar></Sidebar>
                </div>
                {this.state.loading === false ? (
                  <div
                    className={
                      this.props.location.pathname.search("/Admin") >= 0
                        ? "col-12 col-md-10 col-lg-11 col-xl-11"
                        : "col-12 col-md-10 col-lg-10 col-xl-7"
                    }
                  >
                    {this.props.children}
                  </div>
                ) : null}
                {this.props.location.pathname.search("/Admin") >= 0 ? null : (
                  <div className="col-xl-3">
                    <RightSection></RightSection>
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        ) : (
          <div
            className="container-fluid justify-content-center align-items-center d-flex"
            style={{ minHeight: "100vh" }}
          >
            {this.props.children}
          </div>
        )}
        <ToastContainer />
      </Fragment>
    );
  }
}

export default withRouter(MainLayout);
