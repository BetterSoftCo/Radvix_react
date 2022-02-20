import { HTTP } from "../../../core/http_common";
import { RegisterReq } from "../../models/requests/register/register_req";
import { RegisterRes } from "../../models/responses/register/register_res";

export class RemoteRegister {
  SignUp(body:RegisterReq,action: (res: RegisterRes) => any,error: (res: any) => any){
    return HTTP.post("/User/SignUp" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
