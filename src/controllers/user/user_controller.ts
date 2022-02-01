import { UserSigninRes } from "../../data/models/responses/user/signin_res";
import { RemoteUser } from "../../data/remotes/user/remote_user";
import { UserSigninReq } from "./../../data/models/requests/user/signin_req";
export class UserController {
    remote = new RemoteUser()

    Signin(body:UserSigninReq , action:(res:UserSigninRes)=>any){
         this.remote.Signin(body,res=>{
             localStorage.setItem('token' , res.result)
            action(res)
             
         })
         
    }
}