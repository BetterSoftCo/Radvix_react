import { HTTP } from "../../../core/http_common";
import { TeamCreateReq } from "../../models/requests/team/team_create_req";
import { TeamCreateRes } from "../../models/responses/team/team_create_res";

export class RemoteTeam {
  createTeam(body:TeamCreateReq,action: (res: TeamCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Team" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
