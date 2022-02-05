import { HTTP } from "../../../core/http_common";
import { UserSigninReq } from "../../models/requests/user/signin_req";
import { UserSigninRes } from "../../models/responses/user/signin_res";

export class RemoteUser {
   signIn(body: UserSigninReq, action: (res: UserSigninRes) => any) {
    return  HTTP.post("/User/SignIn", body).then((res) => action(res.data))
  }
}