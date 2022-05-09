import { toast } from "react-toastify";
import { CreateMemberReq } from "../../data/models/requests/member/create_member_req";
import { UpdateMemberReq } from "../../data/models/requests/member/update_member_req";
import { CreateMemberResResult } from "../../data/models/responses/member/create_member_res";
import { GetMemberByIDResResult } from "../../data/models/responses/member/get_member_by_id_res";
import { MemberListResResult } from "../../data/models/responses/member/member_list_res";
import { SearchMemberResResult } from "../../data/models/responses/member/search_member_res";
import { UpdateMemberResResult } from "../../data/models/responses/member/update_member_res";
import { RemoteMember } from "../../data/remotes/member/remote_member";
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
  updateMember(
    body: UpdateMemberReq,
    action: (res: UpdateMemberResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updateMember(
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
  getMemberList(
    body:{PageNumber:number , PageSize:number , SearchParameter: string},
    action: (res: MemberListResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getMemberList(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => {
        error(err);
      }
    );
  }
  getMember(
    body:{userId:string},
    action: (res: GetMemberByIDResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.getMemberById(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => {
        error(err);
      }
    );
  }
}
