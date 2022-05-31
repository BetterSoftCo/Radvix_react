import { toast } from "react-toastify";
import { ClientsResResult } from "../../data/models/responses/admin/clients_res";
import { DashboardReportsResult } from "../../data/models/responses/admin/dashboard_report_res";
import { ListMemberUserResResult } from "../../data/models/responses/admin/list_member_user_res";
import { PaymentsResResult } from "../../data/models/responses/admin/payments_res";
import { GetAllDiscusstionResResult } from "../../data/models/responses/discussion/get_all_discusstion_res";
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
  getClients(
    body: {
      searchParameter: string;
      pageSize: number;
      pageNumber: number;
    },
    action: (res: ClientsResResult) => any
  ) {
    this.remote.getClients(
      body,
      (res) => action(res.result!),
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
  getAllDiscusstion(
    body: { PageNumber: number; PageSize: number; ticket: boolean },
    action: (res: GetAllDiscusstionResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getAllDiscussion(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
  getListMembers(
    body: {
      searchParameter: string;
      userId: string;
      pageSize: number;
      pageNumber: number;
    },
    action: (res: ListMemberUserResResult) => any
  ) {
    this.remote.getListMember(
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
