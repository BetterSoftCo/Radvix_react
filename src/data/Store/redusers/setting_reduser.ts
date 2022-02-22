import { AppSettingResResult } from "../../models/responses/app_setting/enum_list_res";
import { SET_SETTING } from "../actions/actions_type";
import { SettingAction, SettingState } from "../actions/setting_action";

const SettingApp: { [key: string]: AppSettingResResult[] } = {};

const reducer = (
  state: { [key: string]: AppSettingResResult[] } = SettingApp,
  action: SettingAction
): SettingState => {
  switch (action.type) {
    case SET_SETTING:
      return action.payload;
  }
  return state;
};

export default reducer;
