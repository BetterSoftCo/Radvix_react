import { RemoteUser } from "../../data/remotes/user/remote_user";
import { UserSigninReq } from "./../../data/models/requests/user/signin_req";
export class UserController {
    remote = new RemoteUser()

    Signin(body:UserSigninReq){
         this.remote.Signin(body,res=>{
             console.log(res);
             
         })
         
    }
}