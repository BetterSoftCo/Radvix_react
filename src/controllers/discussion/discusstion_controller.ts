import { toast } from "react-toastify";
import { CreateTicketReq } from "../../data/models/requests/discussion/create_ticket_req";
import { DiscusstionCreateReq } from "../../data/models/requests/discussion/discusstion_create_req";
import { BroadCastResResult } from "../../data/models/responses/discussion/create_broadcast_res";
import { CreateMessageRes } from "../../data/models/responses/discussion/create_massage_res";
import { CreateTicketResResult } from "../../data/models/responses/discussion/create_ticket_res";
import { DiscusstionCreateResResult } from "../../data/models/responses/discussion/discusstion_create_res";
import { DiscusstionSearchResResult } from "../../data/models/responses/discussion/discusstion_search_res";
import { GetAllDiscusstionResResult } from "../../data/models/responses/discussion/get_all_discusstion_res";
import { GetDiscusstionPanelResResult } from "../../data/models/responses/discussion/get_discusstion_panel_res";
import { DiscusstionSectionResResult } from "../../data/models/responses/discussion/section_user_res";
import { RemoteDiscusstion } from "../../data/remotes/discussion/remote_discusstion";
export class DiscusstionController {
  remote = new RemoteDiscusstion();

  createDiscusstion(
    body: DiscusstionCreateReq,
    action: (res: DiscusstionCreateResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createDiscusstion(
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
  createMassage(
    body: { discussionId: number; message: string },
    action: (res: CreateMessageRes) => any,
    error: (res: any) => any
  ) {
    this.remote.createMassage(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
  createBroadCast(
    body: { subject: string; broadCastTypes: number[]; message: string },
    action: (res: BroadCastResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createBroadCast(
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
  createTicket(
    body: CreateTicketReq,
    action: (res: CreateTicketResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createTicket(
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
  searchDiscusstion(
    body: { discussionTopic: number; isTicket: boolean },
    action: (res: DiscusstionSearchResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.DiscusstionSearch(
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
  getAllDiscusstion(
    body: {
      PageNumber: number;
      PageSize: number;
      ticket: boolean;
      SearchParameter: string;
    },
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
  getDiscusstionPanel(
    body: { discussionId: number; ticket: boolean },
    action: (res: GetDiscusstionPanelResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getDiscusstionPanel(
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
  discusstionSectionUser(
    body: { discussionTopic: number; sectionId: number },
    action: (res: DiscusstionSectionResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.discusstionSectionUser(
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
}
