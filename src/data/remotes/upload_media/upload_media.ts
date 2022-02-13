import { HTTP } from "../../../core/http_common";
import { UploadReq } from "../../models/requests/upload_media/upload_req";
import { UploadRes } from "../../models/responses/upload_media/upload_res";

export class RemoteUpload {
  Media(body: UploadReq, action: (res: UploadRes) => any , error:(err:any)=>any) {
    return  HTTP.post("/Media", body).then((res) => action(res)).catch(err=>error(err))
  }
}