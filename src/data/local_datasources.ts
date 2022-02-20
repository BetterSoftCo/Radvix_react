import {
  AppSettingResResult,
} from "./models/responses/app_setting/enum_list_res";

export class LocalDataSources {
  getSetting(): { [key: string]: AppSettingResResult[] }  {
    const Setting = localStorage.getItem("setting");
    if (Setting) {
      return JSON.parse(Setting);
    }
    return {}
  }
}
