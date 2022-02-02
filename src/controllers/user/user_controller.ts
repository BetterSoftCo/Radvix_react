import { toast } from "react-toastify";
import { UserSigninResult } from "../../data/models/responses/user/signin_res";
import { RemoteUser } from "../../data/remotes/user/remote_user";
import { UserSigninReq } from "./../../data/models/requests/user/signin_req";
export class UserController {
    remote = new RemoteUser()

    Signin(body: UserSigninReq, action: (res: UserSigninResult) => any) {
        this.remote.signIn(body, res => {
            localStorage.setItem('token', res.result?.token ?? '')
            console.log(res);
            
            toast.success(
                `${res.message}`,
                {
                  position: toast.POSITION.TOP_RIGHT,
                }
              );
            action(res.result!)

        })

    }
}