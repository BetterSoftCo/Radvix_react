import { toast } from "react-toastify";
import { UploadRes } from "../../data/models/responses/upload_media/upload_res";
import { RemoteUpload } from "../../data/remotes/upload_media/upload_media";
export class UploadController {
  remote = new RemoteUpload();
  UloadMedia(body: any, action: (res: UploadRes) => any, error: () => any) {
    this.remote.Media(
      body,
      (res) => {
        toast.success(`Successfull`, {
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
