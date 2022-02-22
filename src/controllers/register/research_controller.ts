import { toast } from "react-toastify";
import { RegisterReq } from "../../data/models/requests/register/register_req";
import { RegisterResResult } from "../../data/models/responses/register/register_res";
import { RemoteRegister } from "../../data/remotes/register/remote_laboratory";
export class RegisterController {
  remote = new RemoteRegister();

  SignUp(body: RegisterReq, action: (res: RegisterResResult) => any , error:(res:any)=>any) {
    this.remote.SignUp(body, (res) => {
      toast.success(`${res.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      action(res.result);
    },(err)=>{
      error(err)
    });
  }
}
