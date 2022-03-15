import { toast } from "react-toastify";
import { UpdateMyProfileReq } from "../../data/models/requests/user/update_myprofile_req";
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
          image:res.result?.profileImage
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
}
