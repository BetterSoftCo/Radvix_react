import { toast } from "react-toastify";
import { TaskReq } from "../../data/models/requests/task/task_req";
import { SearchTaskResResult } from "../../data/models/responses/task/search_task_res";
import { TaskResResult } from "../../data/models/responses/task/task_res";
import { RemoteTask } from "../../data/remotes/task/remote_task";
import { store } from "../../data/store";
export class TaskController {
  remote = new RemoteTask();

  createTask(
    body: TaskReq,
    action: (res: TaskResResult) => any,
    error: (res: any) => any
  ) {
    this.remote.createTask(
      body,
      (res) => {
        toast.success(`${res.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        action(res.result);
      },
      (err) => {
        toast.error(`${err.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );
  }
  SearchTask(
    action: (res: SearchTaskResResult) => any,
    error: (res: any) => any
  ) {
    if (store.getState().ResearchId > 0) {
      this.remote.SearchTask(
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
