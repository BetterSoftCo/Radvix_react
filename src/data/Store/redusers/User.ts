import { UserRoles } from "../../../core/utils";
import { SET_USER_ROLE } from "../actions/ActionsType";
import { UserRoleAction, UserRoleState } from "../actions/User";

const UserRole: UserRoles = UserRoles.level3;

const reducer = (
  state: UserRoles = UserRole,
  action: UserRoleAction
): UserRoleState => {
  switch (action.type) {
    case SET_USER_ROLE:
      return UserRoles.level1;
  }
  return state;
};

export default reducer;
