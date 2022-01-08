import { UserRoles } from "../../../core/utils";
import { SET_USER_ROLE } from "../actions/actions_type";
import { UserRoleAction, UserRoleState } from "../actions/user_action";

const UserRole: UserRoles = UserRoles.admin;

const reducer = (
  state: UserRoles = UserRole,
  action: UserRoleAction
): UserRoleState => {
  switch (action.type) {
    case SET_USER_ROLE:
      return UserRoles.admin;
  }
  return state;
};

export default reducer;
