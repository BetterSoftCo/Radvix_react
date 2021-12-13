import { RemoteDataSources } from "../../../data/remote_datasources";
import { TaskViewModel } from "../../view_models/task_view_model";

export class DashboardController {
    remote = new RemoteDataSources();

    recentTasks: Array<TaskViewModel> = [
        new TaskViewModel("1", "sina", "aaa"),
        new TaskViewModel("1", "sina", "aaa"),
        new TaskViewModel("1", "sina", "aaa"),
        new TaskViewModel("1", "sina", "aaa"),
        new TaskViewModel("1", "sina", "aaa"),
    ];


    getData() {
        this.recentTasks = this.remote.getData();
    }
}