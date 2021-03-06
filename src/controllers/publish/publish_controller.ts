import { toast } from "react-toastify";
import { CreateDraftReq } from "../../data/models/requests/publish/create_draft_req";
import { CreatePublishReq } from "../../data/models/requests/publish/create_publish_req";
import { EditPublishReq } from "../../data/models/requests/publish/update_publish_req";
import { AddUserResResult } from "../../data/models/responses/publish/add_user_res";
import { CreateDraftResResult } from "../../data/models/responses/publish/create_draft_res";
import { CreatePublishResResult } from "../../data/models/responses/publish/create_publish_res";
import { GetAllPublishesResult } from "../../data/models/responses/publish/publishes_res";
import { GetPublishByIDResult } from "../../data/models/responses/publish/publish_by_id_res";
import { SearchPublishResResult } from "../../data/models/responses/publish/search_publish_res";
import { EditPublishResResult } from "../../data/models/responses/publish/update_publish_res";
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
  getPublishes(
    body: { PageNumber: number; PageSize: number, ResearchId: number, SearchParameter: string },
    action: (res: GetAllPublishesResult) => any,
    error: (res: any) => any
  ) {
    if (body.ResearchId >= 0) {
      this.remote.getPublishes(
        body,
        (res) => {
          action(res.result!);
        },
        (err) => {
          error(err);
        }
      );
    }
  }
  getPublishById(
    body: { publicationId: number },
    action: (res: GetPublishByIDResult) => any
  ) {
    this.remote.getPublishById(
      body,
      (res) => {
        action(res.result!);
      },
      (err) => { }
    );
  }
  createDraft(
    body: CreateDraftReq,
    action: (res: CreateDraftResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createDraft(
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
  addUser(
    body: { publicationId: number; researchId: number },
    action: (res: AddUserResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.addUser(
      body,
      (res) => {
        action(res.result!);
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
  updatePublish(
    body: EditPublishReq,
    action: (res: EditPublishResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.updatePublish(
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
      }
    );
  }
  removeDraft(
    body: { draftId: number },
    action: (res: boolean) => any,
    error: (res: any) => any
  ) {
    this.remote.removeDraft(
      body,
      (res) => {
        action(res.result!);
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        error(err);
      }
    );
  }
}