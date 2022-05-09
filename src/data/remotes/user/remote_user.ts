import { HTTP } from "../../../core/http_common";
import { UserSigninReq } from "../../models/requests/user/signin_req";
import { UpdateMyProfileReq } from "../../models/requests/user/update_myprofile_req";
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
}
