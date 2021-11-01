import { UserRoles } from "../../../core/utils";
import { SET_USER_ROLE } from "./actions_type";

 
export type UserRoleState = UserRoles

export type UserRoleAction = {
  type: string;
  payload: UserRoles;
};

export function SetUserRole(UserRole: UserRoleState):UserRoleAction {
  return {
    type: SET_USER_ROLE,
    payload: UserRole,
  };
}
