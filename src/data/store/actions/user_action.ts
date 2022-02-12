import { UserRoles } from "../../../core/utils";
import { UserSigninResult } from "../../models/responses/user/signin_res";
import { SET_USER_INFO, SET_USER_ROLE } from "./actions_type";

 
export type UserRoleState = UserRoles

export type UserRoleAction = {
  type: string;
  payload: UserRoles;
};
export type UserInfoAction = {
  type: string;
  payload: UserSigninResult;
};

export function SetUserRole(UserRole: UserRoleState):UserRoleAction {
  return {
    type: SET_USER_ROLE,
    payload: UserRole,
  };
}
export function SetUserInfo(UserInfo: UserSigninResult):UserInfoAction {
  return {
    type: SET_USER_INFO,
    payload: UserInfo,
  };
}
