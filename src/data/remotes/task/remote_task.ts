import { HTTP } from "../../../core/http_common";
import { TaskReq } from "../../models/requests/task/task_req";
import { TaskRes } from "../../models/responses/task/task_res";

export class RemoteTask {
  createTask(body:TaskReq,action: (res: TaskRes) => any,error: (res: any) => any){
    return HTTP.post("/AppTask" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
