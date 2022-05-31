import { UserRoles } from "../../../core/utils";
import { SET_USER_ROLE } from "../actions/actions_type";
import { UserRoleAction, UserRoleState } from "../actions/user_action";

const UserRole: UserRoles = UserRoles.L1User;

const reducer = (
  state: UserRoles = UserRole,
  action: UserRoleAction
): UserRoleState => {
  switch (action.type) {
    case SET_USER_ROLE:
      console.log(action.payload, "action type");

      return action.payload;
  }
  return state;
};

// export default reducer;
// const UserRole: UserRoles = UserRoles.L2User;

// const reducer = (
//   state: UserRoles = UserRole,
//   action: UserRoleAction
// ): UserRoleState => {
//   switch (action.type) {
//     case SET_USER_ROLE:
//       return UserRoles.L1User;
//   }
//   return state;
// };

// export default reducer;
// const UserRole: UserRoles = UserRoles.L1User;

// const reducer = (
//   state: UserRoles = UserRole,
//   action: UserRoleAction
// ): UserRoleState => {
//   switch (action.type) {
//     case SET_USER_ROLE:
//       return UserRoles.L1User;
//   }
//   return state;
// };

export default reducer;
