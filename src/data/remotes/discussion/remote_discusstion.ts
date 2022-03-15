import { HTTP } from "../../../core/http_common";
import { DiscusstionCreateReq } from "../../models/requests/discussion/discusstion_create_req";
import { CreateMessageRes } from "../../models/responses/discussion/create_massage_res";
import { DiscusstionCreateRes } from "../../models/responses/discussion/discusstion_create_res";
import { DiscusstionSearchRes } from "../../models/responses/discussion/discusstion_search_res";
import { GetAllDiscusstionRes } from "../../models/responses/discussion/get_all_discusstion_res";
import { GetDiscusstionPanelRes } from "../../models/responses/discussion/get_discusstion_panel_res";

export class RemoteDiscusstion {
  createDiscusstion(
    body: DiscusstionCreateReq,
    action: (res: DiscusstionCreateRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Discussion", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  createMassage(
    body: { discussionId: number; message: string },
    action: (res: CreateMessageRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Discussion/CreateMessage", body)
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
      `/Discussion?PageSize=${body.PageSize}&PageNumber=${body.PageNumber}&Ticket=${body.ticket}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getDiscusstionPanel(
    body: { discussionId: number; ticket: boolean },
    action: (res: GetDiscusstionPanelRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Discussion/Panel?discussionId=${body.discussionId}&ticket=${body.ticket}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  DiscusstionSearch(
    body: { discussionTopic: number; isTicket: boolean },
    action: (res: DiscusstionSearchRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Discussion/Search?discussionTopic=${body.discussionTopic}&isTicket=${body.isTicket}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
