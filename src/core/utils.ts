export enum Theme {
  light,
  dark,
}
export enum UserRoles {
  Admin,
  L1Client,
  L1User,
  L2User,
  L3User,
}
export const AccessPermition = (
  role: UserRoles,
  AccessList: Array<UserRoles>
) => {
  return AccessList.includes(role);
};
