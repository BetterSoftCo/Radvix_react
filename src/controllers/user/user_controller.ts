import { toast } from "react-toastify";
import { ChangePasswordReq } from "../../data/models/requests/user/change_password_req";
import { UpdateMyProfileReq } from "../../data/models/requests/user/update_myprofile_req";
import { ChangePasswordResResult } from "../../data/models/responses/user/change_password_res";
import { DashboardMyReportResult } from "../../data/models/responses/user/dashboard_report";
import { UserSigninResult } from "../../data/models/responses/user/signin_res";
import { UpdateMyProfileResResult } from "../../data/models/responses/user/update_myprofile_req";
import { RemoteUser } from "../../data/remotes/user/remote_user";
import { UserSigninReq } from "./../../data/models/requests/user/signin_req";
export class UserController {
  remote = new RemoteUser();

  Signin(
    body: UserSigninReq,
    action: (res: UserSigninResult) => any,
    error: () => any
  ) {
    this.remote.signIn(
      body,
      (res) => {
        localStorage.setItem("token", res.result?.token ?? "");
        localStorage.setItem("userId", res.result?.id ?? "");
        localStorage.setItem("logedin", "true");
        const UserInfo = {
          firstName: res.result?.firstName,
          lastName: res.result?.lastName,
          email: res.result?.email,
          image: res.result?.profileImage,
          role: res.result?.role,
          institution:res.result?.institution
        };
        localStorage.setItem("userInfo", JSON.stringify(UserInfo) ?? "");
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result!);
      },
      (err) => {
        error();
      }
    );
  }
  UpdateMyProfile(
    body: UpdateMyProfileReq,
    action: (res: UpdateMyProfileResResult) => any,
    error: () => any
  ) {
    this.remote.updateMyProfile(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error();
      }
    );
  }
  changePassword(
    body: ChangePasswordReq,
    action: (res: ChangePasswordResResult) => any,
    error: () => any
  ) {
    this.remote.changePassword(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error();
      }
    );
  }
  dashboardReport(
    action: (res: DashboardMyReportResult) => any,
    error: () => any
  ) {
    this.remote.dshboardReport(
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error();
      }
    );
  }
  requestConfirmEmail(
    email: string,
    action: (res: any) => any,
    error: () => any
  ) {
    this.remote.requestConfirmEmail(
      email,
      (res) => {
        toast.success("Email sent successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        toast.error("Email failed", {
          position: toast.POSITION.TOP_RIGHT,
        });
        error();
      }
    );
  }
}
