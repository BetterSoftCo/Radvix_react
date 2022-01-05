import { TaskViewModel } from "../views/view_models/task_view_model";
import { Convert, GlobalSearch } from "./models/responses/globalsearch_response";
import { TaskResponse } from "./models/responses/task_response";

export class RemoteDataSources {
    datasource: test1 = new fakeTest();


    getData(): Array<TaskViewModel> {
        this.datasource.getTadk();

        let taskResponses: Array<TaskResponse> = [
            new TaskResponse("1", "asas", "asasasasas"),
        ];



        let taskViewModel: Array<TaskViewModel> =
            taskResponses.map(e => new TaskViewModel(e.title, e.daaaate, e.id, 'ssss'));

        return taskViewModel;
    }

    async globalSearch(action: (n: GlobalSearch) => any) {
        let data = await fetch("http://95.216.63.209:5012/api/GlobalSearch", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: "",
                specialties: [],
                newest: true,
                oldest: true,
                reputation: true,
                doctor: true,
                case: true,
                article: true,
                hospital: true,
                specialty: true,
                isBookmark: false
            })
        }).then((response) => {
            return response;
        });

        const content = await data.text();
        action(Convert.toGlobalSearch(content));

    }
}
interface test1 {
    getTadk(): string
}

class testImpl implements test1 {
    getTadk(): any {

    }

}

class fakeTest implements test1 {
    getTadk(): any {
        throw new Error("Method not implemented.");
    }


}