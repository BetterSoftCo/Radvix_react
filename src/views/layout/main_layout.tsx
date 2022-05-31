import React, { Fragment, ReactNode } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Header from "./header_layout";
import RightSection from "./right_section";
import Sidebar from "./sidebar";
import { ToastContainer } from "react-toastify";
import { AppSettingController } from "../../controllers/app_setting/setting_controller";
import { LocalDataSources } from "../../data/local_datasources";
import { MemberController } from "../../controllers/member/member_controller";
import { store } from "../../data/store";
import { SetUserRole } from "../../data/store/actions/user_action";

interface IMainLayout {
  children: ReactNode;
}
class MainLayout extends React.Component<IMainLayout & RouteComponentProps> {
  private controller: AppSettingController = new AppSettingController();
  private memberController: MemberController = new MemberController();
  private local: LocalDataSources = new LocalDataSources();
  state = {
    role: 0,
    getMmeberInfo: "pending",
  };
  componentDidMount() {
    this.controller.enumList();
    if (this.local.logedin()) {
      this.setState({
        getMmeberInfo: "pending",
      });
      this.memberController.getMember(
        {
          userId: this.local.getUserId(),
          token: localStorage.getItem("token") ?? "",
        },
        (res) => {
          store.dispatch(SetUserRole(res.role));
          const UserInfo = {
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.userEmail,
            image: res.profileImage,
            role: res.role,
            institution:res.companyName
          };
          localStorage.setItem("userInfo", JSON.stringify(UserInfo) ?? "");
          this.setState({
            getMmeberInfo: "succsses",
          });
        },
        (err) => {
          this.setState({
            getMmeberInfo: "succsses",
          });
        }
      );
    }
  }
  openSidebar() {
    const sidebarElement = document.querySelector(".sidebar");
    console.log(sidebarElement);
    console.log("ssssss");

    sidebarElement?.classList.remove("closeing-sidebar");
    sidebarElement?.classList.add("opening-sidebar");
  }

  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== "/login" &&
        this.props.location.pathname !== "/register" &&
        this.props.location.pathname !== "/invite_register" &&
        this.state.getMmeberInfo === "succsses" ? (
          <Fragment>
            <Header></Header>
            <div className="main">
              <div className="row" style={{ minHeight: "90vh" }}>
                <i
                  className="fa fa-bars d-flex d-lg-none"
                  aria-hidden="true"
                  onClick={() => {
                    this.openSidebar();
                  }}
                ></i>
                <div className="col-5 col-md-2 col-lg-1 sidebar closeing-sidebar">
                  <Sidebar></Sidebar>
                </div>
                {this.local.getSetting() ? (
                  <div
                    className={
                      this.props.location.pathname.search("/Admin") >= 0
                        ? "col-12 col-md-12 col-lg-10 col-xl-10"
                        : "col-12 col-md-12 col-lg-10 col-xl-7"
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
