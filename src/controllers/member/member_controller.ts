import { toast } from "react-toastify";
import { AddDataReq } from "../../data/models/requests/data/add_data_req";
import { CreateMemberReq } from "../../data/models/requests/member/create_member_req";
import { AddDataResResult } from "../../data/models/responses/data/add_data_res";
import { SearchDataResResult } from "../../data/models/responses/data/search_data_res";
import { CreateMemberResResult } from "../../data/models/responses/member/create_member_res";
import { SearchMemberResResult } from "../../data/models/responses/member/search_member_res";
import { RemoteData } from "../../data/remotes/data/remote_data";
import { RemoteMember } from "../../data/remotes/member/remote_member";
import { store } from "../../data/store";
export class MemberController {
  remote = new RemoteMember();

  createMember(
    body: CreateMemberReq,
    action: (res: CreateMemberResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createMember(
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
  SearchMember(
    action: (res: SearchMemberResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.SearchMember(
      (res) => {
        action(res.result!);
      },
      (err) => {
        error(err);
      }
    );
  }
}
