import { HTTP } from "../../../core/http_common";
import { ResearchReq } from "../../models/requests/research/research_req";
import { UpdateResearchReq } from "../../models/requests/research/update_research_req";
import { ResearchesRes } from "../../models/responses/research/researches_res";
import { GetResearchByidRes } from "../../models/responses/research/research_by_id_res";
import { ResearchRes } from "../../models/responses/research/research_res";
import { ResearchSearchRes } from "../../models/responses/research/research_search_res";
import { UpdateResearchRes } from "../../models/responses/research/update_research_req";

export class RemoteResearch {
  createResearch(body:ResearchReq,action: (res: ResearchRes) => any,error: (res: any) => any){
    return HTTP.post("/Research" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  updateResearch(body:UpdateResearchReq,action: (res: UpdateResearchRes) => any,error: (res: any) => any){
    return HTTP.put("/Research" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  researchSearch(action: (res: ResearchSearchRes) => any) {
    return HTTP.get("/Research/Search").then((res) => action(res.data));
  }
  getResearches(body:{PageNumber:number , PageSize:number},action: (res: ResearchesRes) => any,error: (res: any) => any){
    return HTTP.get(`/Research?PageNumber=${body.PageNumber}&PageSize=${body.PageSize}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getResearchById(body:{id:number},action: (res: GetResearchByidRes) => any,error: (res: any) => any){
    return HTTP.get(`/Research/${body.id}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
