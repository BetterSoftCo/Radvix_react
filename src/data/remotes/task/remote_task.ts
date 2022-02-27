import { HTTP } from "../../../core/http_common";
import { TaskReq } from "../../models/requests/task/task_req";
import { UpdateTaskReq } from "../../models/requests/task/update_task_req";
import { GetAllTasks } from "../../models/responses/task/get_all_tasks_res";
import { GetTaskByID } from "../../models/responses/task/get_task_by_id_res";
import { SearchTaskRes } from "../../models/responses/task/search_task_res";
import { TaskRes } from "../../models/responses/task/task_res";
import { UpdateTaskRes } from "../../models/responses/task/update_task_req";

export class RemoteTask {
  createTask(
    body: TaskReq,
    action: (res: TaskRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.post("/AppTask", body)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  SearchTask(
    body: { researchId: number },
    action: (res: SearchTaskRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/AppTask/Search?researchId=${body.researchId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getTasks(
    body: { researchId: number; PageSize: number; PageNumber: number },
    action: (res: GetAllTasks) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(
      `/AppTask?ResearchId=${body.researchId}&PageSize=${body.PageSize}&PageNumber=${body.PageNumber}`
    )
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  getTaskById(
    body: { TaskId: number },
    action: (res: GetTaskByID) => any,
    error: (res: any) => any
  ) {
    return HTTP.get(`/AppTask/${body.TaskId}`)
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
  updateTask(
    body: UpdateTaskReq,
    action: (res: UpdateTaskRes) => any,
    error: (res: any) => any
  ) {
    return HTTP.put("/AppTask")
      .then((res) => action(res.data))
      .catch((err) => {
        error(err);
      });
  }
}
