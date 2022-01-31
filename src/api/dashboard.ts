import { HTTP } from "./common/http-common";
const listDashboardApi = {
  async GetSettings() {
    return await HTTP.get("/Profile").then((res) => res.data);
  },
};
export default listDashboardApi;
