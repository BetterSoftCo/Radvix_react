import { HTTP } from "../../../core/http_common";
import { UploadRes } from "../../models/responses/upload_media/upload_res";

export class RemoteUpload {
  Media(body: any, action: (res: UploadRes) => any , error:(err:any)=>any) {
    return  HTTP.post("/Media", body).then((res) => action(res)).catch(err=>error(err))
  }
}