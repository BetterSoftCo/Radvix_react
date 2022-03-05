import { HTTP } from "../../../core/http_common";
import { CreatePublishReq } from "../../models/requests/publish/create_publish_req";
import { CreatePublishRes } from "../../models/responses/publish/create_publish_res";
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
}