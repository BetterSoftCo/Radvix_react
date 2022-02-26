export enum Theme {
  light,
  dark,
}
export enum UserRoles {
  level1,
  level2,
  level3,
  admin,
}
export const AccessPermition = (
  role: UserRoles,
  AccessList: Array<UserRoles>
) => {
 return AccessList.includes(role);
};
