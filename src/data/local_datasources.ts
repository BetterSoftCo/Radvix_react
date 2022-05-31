import { UserRoles } from "../core/utils";
import { AppSettingResResult } from "./models/responses/app_setting/enum_list_res";
type UserInfo = {
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  role: UserRoles;
  institution:string
};
export class LocalDataSources {
  getSetting(): { [key: string]: AppSettingResResult[] } {
    const Setting = localStorage.getItem("setting");
    if (Setting) {
      return JSON.parse(Setting);
    }
    return {};
  }
  getUserId(): string {
    const userId = localStorage.getItem("userId");
    if (userId) {
      return userId;
    }
    return "";
  }

  getUserInfo(): UserInfo {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      return JSON.parse(userInfo);
    }
    return {
      firstName: "",
      email: "",
      lastName: "",
      image: "",
      role: UserRoles.L1Client,
      institution:""
    };
  }
  logedin(): boolean {
    const logedin = localStorage.getItem("logedin");
    if (logedin) {
      return JSON.parse(logedin);
    }
    return false;
  }
}
