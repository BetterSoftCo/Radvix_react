import { HTTP } from "../../../core/http_common";
import { TeamCreateReq } from "../../models/requests/team/team_create_req";
import { TeamCreateRes } from "../../models/responses/team/team_create_res";
import { TeamSearchRes } from "../../models/responses/team/team_search_res";

export class RemoteTeam {
  createTeam(body:TeamCreateReq,action: (res: TeamCreateRes) => any,error: (res: any) => any){
    return HTTP.post("/Team" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  TeamSearch(action: (res: TeamSearchRes) => any,error: (res: any) => any){
    return HTTP.get("/Team/search" ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
