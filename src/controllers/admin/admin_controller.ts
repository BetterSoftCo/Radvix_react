import { toast } from "react-toastify";
import { DashboardReportsResult } from "../../data/models/responses/admin/dashboard_report_res";
import { PaymentsResResult } from "../../data/models/responses/admin/payments_res";
import { RemoteAdmin } from "../../data/remotes/admin/remote_admin";
export class AdminController {
  remote = new RemoteAdmin();

  getDashboardReport(
    body: {
      fromDate: Date;
      untilDate: Date;
    },
    action: (res: DashboardReportsResult) => any
  ) {
    this.remote.getDashboardReport(
      body,
      (res) => action(res.result!),
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
  getPayments(
    body: {
      pageNumber: number;
      pageSize: number;
    },
    action: (res: PaymentsResResult) => any
  ) {
    this.remote.getPayments(
      body,
      (res) => action(res.result!),
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
}
