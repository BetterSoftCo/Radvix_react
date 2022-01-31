import api from "../../../api/";
import { UserSigninReq } from "../../models/requests/user/signin_req";
import { UserSigninRes } from "../../models/responses/user/signin_res";
export class RemoteUser {
  async Signin(body:UserSigninReq,action: (res: UserSigninRes) => any) {
    await api.User.SignIn(body).then((res) => {
      action(res);
    });
  }
}