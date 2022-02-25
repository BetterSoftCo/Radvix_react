import { HTTP } from "../../../core/http_common";
import { TaskReq } from "../../models/requests/task/task_req";
import { GetAllTasks } from "../../models/responses/task/get_all_tasks_res";
import { SearchTaskRes } from "../../models/responses/task/search_task_res";
import { TaskRes } from "../../models/responses/task/task_res";

export class RemoteTask {
  createTask(body:TaskReq,action: (res: TaskRes) => any,error: (res: any) => any){
    return HTTP.post("/AppTask" , body).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  SearchTask(body:{researchId:number},action: (res: SearchTaskRes) => any,error: (res: any) => any){
    return HTTP.get(`/AppTask/Search?researchId=${body.researchId}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
  getTasks(body:{researchId:number},action: (res: GetAllTasks) => any,error: (res: any) => any){
    return HTTP.get(`/AppTask?researchId=${body.researchId}` ).then((res) => action(res.data)).catch((err)=>{error(err)});
  }
}
