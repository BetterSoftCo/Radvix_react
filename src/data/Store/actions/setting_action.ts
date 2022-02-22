import { AppSettingResResult } from "../../models/responses/app_setting/enum_list_res";
import { SET_SETTING } from "./actions_type";

export type SettingState = { [key: string]: AppSettingResResult[] };

export type SettingAction = {
  type: string;
  payload: { [key: string]: AppSettingResResult[] };
};


export function SetSettings(Setting: SettingState): SettingAction {
  return {
    type: SET_SETTING,
    payload: Setting,
  };
}

