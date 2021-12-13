import { TaskViewModel } from "../views/view_models/task_view_model";
import { TaskResponse } from "./models/responses/task_response";

export class RemoteDataSources {

    getData(): Array<TaskViewModel> {
        let taskResponses: Array<TaskResponse> = [
            new TaskResponse("1", "asas", "asasasasas"),
        ];



        let taskViewModel: Array<TaskViewModel> =
            taskResponses.map(e => new TaskViewModel(e.title, e.daaaate, e.id, 'ssss'));

        return taskViewModel;
    }
}