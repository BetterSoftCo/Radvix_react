import { HTTP } from "../../../core/http_common";
import { AppSettingRes } from "../../models/responses/app_setting/enum_list_res";


export class RemoteSetting {
    enumList(action: (res: AppSettingRes) => any) {
    return  HTTP.get("/AppSetting/EnumList").then((res) => action(res.data))
  }
}