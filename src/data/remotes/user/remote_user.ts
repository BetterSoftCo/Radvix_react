import { HTTP } from "../../../core/http_common";
import { ChangePasswordReq } from "../../models/requests/user/change_password_req";
import { UserSigninReq } from "../../models/requests/user/signin_req";
import { UpdateMyProfileReq } from "../../models/requests/user/update_myprofile_req";
import { ChangePasswordRes } from "../../models/responses/user/change_password_res";
import { DashboardMyReport } from "../../models/responses/user/dashboard_report";
import { UserSigninRes } from "../../models/responses/user/signin_res";
import { UpdateMyProfileRes } from "../../models/responses/user/update_myprofile_req";

export class RemoteUser {
  signIn(
    body: UserSigninReq,
    action: (res: UserSigninRes) => any,
    error: (err: any) => any
  ) {
    return HTTP.post("/User/SignIn", body)
      .then((res) => action(res.data))
      .catch((err) => error(err));
  }
  updateMyProfile(
    body: UpdateMyProfileReq,
    action: (res: UpdateMyProfileRes) => any,
    error: (err: any) => any
  ) {
    let config = {
      headers: {
        authorization: `Bearer ${body.token}`,
      },
    };
    return HTTP.put("/User", body, config)
      .then((res) => action(res.data))
      .catch((err) => error(err));
  }
  changePassword(
    body: ChangePasswordReq,
    action: (res: ChangePasswordRes) => any,
    error: (err: any) => any
  ) {
    let config = {
      headers: {
        authorization: `Bearer ${body.token}`,
      },
    };
    return HTTP.put("/User/ChangePassword", body, config)
      .then((res) => action(res.data))
      .catch((err) => error(err));
  }
  dshboardReport(
    action: (res: DashboardMyReport) => any,
    error: (err: any) => any
  ) {
    return HTTP.post("/Dashboard/MyReports")
      .then((res) => action(res.data))
      .catch((err) => error(err));
  }
  requestConfirmEmail(
    email: string,
    action: (res: any) => any,
    error: (err: any) => any
  ) {
    return HTTP.post(`User/Account/RequestConfirmEmail/${email}`)
      .then((res) => action(res))
      .catch((err) => error(err));
  }
}
