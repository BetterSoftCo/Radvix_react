import { HTTP } from "../../../core/http_common";
import { CreateMemberReq } from "../../models/requests/member/create_member_req";
import { CreateMemberRes } from "../../models/responses/member/create_member_res";
import { SearchMemberRes } from "../../models/responses/member/search_member_res";

export class RemoteMember {
  createMember(
    body: CreateMemberReq,
    action: (res: CreateMemberRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Team/CreateMember", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  SearchMember(
    action: (res: SearchMemberRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Team/SearchMember`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
