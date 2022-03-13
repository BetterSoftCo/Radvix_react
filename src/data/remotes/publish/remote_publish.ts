import { HTTP } from "../../../core/http_common";
import { CreateDraftReq } from "../../models/requests/publish/create_draft_req";
import { CreatePublishReq } from "../../models/requests/publish/create_publish_req";
import { AddUserRes } from "../../models/responses/publish/add_user_res";
import { CreateDraftRes } from "../../models/responses/publish/create_draft_res";
import { CreatePublishRes } from "../../models/responses/publish/create_publish_res";
import { GetAllPublishes } from "../../models/responses/publish/publishes_res";
import { GetPublishByID } from "../../models/responses/publish/publish_by_id_res";
import { SearchPublishRes } from "../../models/responses/publish/search_publish_res";

export class RemotePublish {
  createPublish(body:CreatePublishReq,action: (res: CreatePublishRes) => any,error: (res: any) => any){
    return HTTP.post("/Publish" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  SearchPublish(
    body: { researchId: number },
    action: (res: SearchPublishRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Publish/Search?researchId=${body.researchId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getPublishes(body:{PageNumber:number , PageSize:number , ResearchId: number},action: (res: GetAllPublishes) => any,error: (res: any) => any){
    return HTTP.get(`/Publish?PageNumber=${body.PageNumber}&PageSize=${body.PageSize}&ResearchId=${body.ResearchId}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getPublishById(
    body: { publicationId: number },
    action: (res: GetPublishByID) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/Publish/${body.publicationId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  createDraft(body:CreateDraftReq,action: (res: CreateDraftRes) => any,error: (res: any) => any){
    return HTTP.post("/Publish/NextDraft" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  addUser(body:{publicationId:number , researchId:number },action: (res: AddUserRes) => any,error: (res: any) => any){
    return HTTP.post(`/Publish/AddUser/?publicationId=${body.publicationId}&researchId=${body.researchId}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}