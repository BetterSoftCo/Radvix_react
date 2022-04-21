import { HTTP } from "../../../core/http_common";
import { ClientsRes } from "../../models/responses/admin/clients_res";
import { DashboardReports } from "../../models/responses/admin/dashboard_report_res";
import { ListMemberUserRes } from "../../models/responses/admin/list_member_user_res";
import { PaymentsRes } from "../../models/responses/admin/payments_res";

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
  getClients(
    body: {
      searchParameter: string;
      pageSize: number;
      pageNumber: number;
    },
    action: (res: ClientsRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post(`Dashboard/ListUsers`, body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getListMember(
    body: {
      searchParameter: string;
      userId: string;
      pageSize: number;
      pageNumber: number;
    },
    action: (res: ListMemberUserRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post(`Dashboard/ListMembers`, body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getPayments(
    body: {
      pageNumber: number;
      pageSize: number;
    },
    action: (res: PaymentsRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post(`Payment/Filter`, body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
