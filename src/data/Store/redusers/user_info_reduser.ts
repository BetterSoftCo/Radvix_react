import { UserSigninResult } from "../../models/responses/user/signin_res";
import { SET_USER_INFO } from "../actions/actions_type";
import { UserInfoAction } from "../actions/user_action";

const UserInfo: UserSigninResult = {};

const reducer = (
  state: UserSigninResult = UserInfo,
  action: UserInfoAction
): UserSigninResult => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.payload;
  }
  return state;
};

export default reducer;