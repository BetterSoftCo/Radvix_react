import { HTTP } from "../../../core/http_common";
import { CreateMemberReq } from "../../models/requests/member/create_member_req";
import { UpdateMemberReq } from "../../models/requests/member/update_member_req";
import { CreateMemberRes } from "../../models/responses/member/create_member_res";
import { GetMemberByIDRes } from "../../models/responses/member/get_member_by_id_res";
import { MemberListRes } from "../../models/responses/member/member_list_res";
import { SearchMemberRes } from "../../models/responses/member/search_member_res";
import { UpdateMemberRes } from "../../models/responses/member/update_member_res";

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
  updateMember(
    body: UpdateMemberReq,
    action: (res: UpdateMemberRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/Team/UpdateMember", body)
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
  getMemberList(
    body: { PageNumber: number; PageSize: number; SearchParameter: string },
    action: (res: MemberListRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/Team/MemberList?PageSize=${body.PageSize}&PageNumber=${body.PageNumber}&SearchParameter=${body.SearchParameter}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getMemberById(
    body: { userId: string; token: string },
    action: (res: GetMemberByIDRes) => any,
    error: (res: any) => any
  ) {
    let config = {
      headers: {
        authorization: `Bearer ${body.token}`,
      },
    };
    return HTTP.get(`/Team/MemberById?userId=${body.userId}`, config)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
