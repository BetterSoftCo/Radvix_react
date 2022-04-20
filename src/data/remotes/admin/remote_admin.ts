import { HTTP } from "../../../core/http_common";
import { DashboardReports } from "../../models/responses/admin/dashboard_report_res";

export class RemoteAdmin {
  getDashboardReport(
    body: {
      fromDate: Date;
      untilDate: Date;
    },
    action: (res: DashboardReports) => any,
    error: (res: any) => any
  ) {
    return HTTP.post(`Dashboard/Reports`, body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
