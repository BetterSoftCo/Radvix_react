import { HTTP } from "../../../core/http_common";
import { AddUserSubscrtiptionReq } from "../../models/requests/register/add_user_subscription";
import { RegisterReq } from "../../models/requests/register/register_req";
import { AddUserSubscrtiptionRes } from "../../models/responses/register/add_user_subscription_res";
import { RegisterRes } from "../../models/responses/register/register_res";
import { SubscriptionRes } from "../../models/responses/register/subscription_res";

export class RemoteRegister {
  SignUp(
    body: RegisterReq,
    action: (res: RegisterRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/User/SignUp", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  addUserSubscription(
    body: AddUserSubscrtiptionReq,
    action: (res: AddUserSubscrtiptionRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Subscription/AddUserSubscription", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getSubscription(
    body: { PageNumber: number; PageSize: number; SearchParameter: string },
    action: (res: SubscriptionRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Subscription?PageNumber=${body.PageNumber}&PageSize=${body.PageSize}&SearchParameter=${body.SearchParameter}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
