import { HTTP } from "../../../core/http_common";
import { ResearchReq } from "../../models/requests/research/research_req";
import { ResearchRes } from "../../models/responses/research/research_res";
import { ResearchSearchRes } from "../../models/responses/research/research_search_res";

export class RemoteResearch {
  createResearch(body:ResearchReq,action: (res: ResearchRes) => any,error: (res: any) => any){
    return HTTP.post("/Research" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  researchSearch(action: (res: ResearchSearchRes) => any) {
    return HTTP.get("/Research/Search").then((res) => action(res.data));
  }
}
