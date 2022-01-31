import { HTTP } from "./common/http-common";
import { UserSigninReq } from "./../data/models/requests/user/signin_req";
const ListUserApi = {
  async SignIn(body: UserSigninReq) {
    return await HTTP.post("/User/SignIn", body).then((res) => res.data);
  },
};
export default ListUserApi;
