import { toast } from "react-toastify";
import { CreatePublishReq } from "../../data/models/requests/publish/create_publish_req";
import { CreatePublishResResult } from "../../data/models/responses/publish/create_publish_res";
import { SearchPublishResResult } from "../../data/models/responses/publish/search_publish_res";
import { RemotePublish } from "../../data/remotes/publish/remote_publish";
import { store } from "../../data/store";
export class publishController {
  remote = new RemotePublish();

  createPublish(
    body: CreatePublishReq,
    action: (res: CreatePublishResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createPublish(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result!);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
  SearchPublish(
    action: (res: SearchPublishResResult) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.SearchPublish(
        { researchId: store.getState().ResearchId },
        (res) => {
          action(res.result!);
        },
        (err) => {
          toast.error(`${err.message}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
          error(err);
        }
      );
    } else {
      toast.error(`please select research`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
}