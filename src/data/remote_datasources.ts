import api from "../api";
import { Profile } from "./models/responses/globalsearch_response";
export class RemoteDataSources {
  async globalSearch(action: (res: Profile) => any) {
    await api.dashboard.GetSettings().then((res) => {
      action(res);
    });
  }
}
