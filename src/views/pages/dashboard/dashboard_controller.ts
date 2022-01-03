import { GlobalSearch } from "../../../data/models/responses/globalsearch_response";
import { RemoteDataSources } from "../../../data/remote_datasources";
import { TaskViewModel } from "../../view_models/task_view_model";

export class DashboardController {
    remote = new RemoteDataSources();

    recentTasks: Array<TaskViewModel> = [
        new TaskViewModel("1", "sina", "aaa"),

    ];


    getData() {
        this.recentTasks = this.remote.getData();
    }
    postGlobalSearch(){
         this.remote.globalSearch((result: GlobalSearch) => {
             console.log(result.Result?.Doctors![0].FullName);
             
             

         });
         console.log('sssssss');
         
    }
}