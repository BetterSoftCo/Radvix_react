import { HTTP } from "../../../core/http_common";
import { ClientsRes } from "../../models/responses/admin/clients_res";
import { DashboardReports } from "../../models/responses/admin/dashboard_report_res";
import { ListMemberUserRes } from "../../models/responses/admin/list_member_user_res";
import { PaymentsRes } from "../../models/responses/admin/payments_res";
import { GetAllDiscusstionRes } from "../../models/responses/discussion/get_all_discusstion_res";

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
  getAllDiscussion(
    body: { PageNumber: number; PageSize: number; ticket: boolean },
    action: (res: GetAllDiscusstionRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Discussion/GetListTicket?PageSize=${body.PageSize}&PageNumber=${body.PageNumber}&Ticket=${body.ticket}`
    )
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
