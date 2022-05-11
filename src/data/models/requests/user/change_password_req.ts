export interface ChangePasswordReq {
  email: string;
  oldPassword: string;
  newPassword: string;
  token: string;
}
