import { toast } from "react-toastify";
import { TaskReq } from "../../data/models/requests/task/task_req";
import { TaskResResult } from "../../data/models/responses/task/task_res";
import { RemoteTask } from "../../data/remotes/task/remote_laboratory";
export class TaskController {
  remote = new RemoteTask();

  createLaboratory(
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
}
