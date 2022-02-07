import { RemoteSetting } from "../../data/remotes/app_setting/remote_setting";
export class AppSettingController {
  remote = new RemoteSetting();

  enumList() {
    this.remote.enumList((res) => {
      console.log(res);
    });
  }
}
