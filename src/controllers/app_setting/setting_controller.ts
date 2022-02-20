import { RemoteSetting } from "../../data/remotes/app_setting/remote_setting";
import { store } from "../../data/store";
import { SetSettings } from "../../data/store/actions/setting_action";
export class AppSettingController {
  remote = new RemoteSetting();

  async enumList() {
    await this.remote.enumList((res) => {
      store.dispatch(SetSettings(res.result));
      localStorage.setItem("setting", JSON.stringify(res.result));
    });
  }
}
