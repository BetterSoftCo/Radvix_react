import { toast } from "react-toastify";
import { AddUserSubscrtiptionReq } from "../../data/models/requests/register/add_user_subscription";
import { RegisterReq } from "../../data/models/requests/register/register_req";
import { AddUserSubscrtiptionReqResult } from "../../data/models/responses/register/add_user_subscription_res";
import { RegisterResResult } from "../../data/models/responses/register/register_res";
import { SubscriptionResResult } from "../../data/models/responses/register/subscription_res";
import { RemoteRegister } from "../../data/remotes/register/remote_laboratory";
export class RegisterController {
  remote = new RemoteRegister();

  SignUp(
    body: RegisterReq,
    action: (res: RegisterResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.SignUp(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  addUserSubscription(
    body: AddUserSubscrtiptionReq,
    action: (res: AddUserSubscrtiptionReqResult) => any,
    error: (res: any) => any
  ) {
    this.remote.addUserSubscription(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
  getSubscription(
    body: { PageNumber: number; PageSize: number; SearchParameter: string },
    action: (res: SubscriptionResResult[]) => any,
    error: (res: any) => any
  ) {
    this.remote.getSubscription(
      body,
      (res) => {
        action(res.result);
      },
      (err) => {
        error(err);
      }
    );
  }
}
