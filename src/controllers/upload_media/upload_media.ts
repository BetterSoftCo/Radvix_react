import { toast } from "react-toastify";
import { UploadReq } from "../../data/models/requests/upload_media/upload_req";
import { UploadRes } from "../../data/models/responses/upload_media/upload_res";
import { UserSigninResult } from "../../data/models/responses/user/signin_res";
import { RemoteUpload } from "../../data/remotes/upload_media/upload_media";
import { RemoteUser } from "../../data/remotes/user/remote_user";
export class UploadController {
  remote = new RemoteUpload();
  UloadMedia(body: UploadReq, action: (res: UploadRes) => any, error: () => any) {
    this.remote.Media(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res);
      },
      (err) => {
        error()
      }
    );
  }
}
