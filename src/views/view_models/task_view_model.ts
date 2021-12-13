export class TaskViewModel {

    constructor(id: string, taskName: string, createdBy: string, createdDate?: string ) {
        this.id = id;
        this.taskName = taskName;
        this.createdBy = createdBy;
        this.createdDate = createdDate ?? ''
    }
 
    id: string;
    taskName: string;
    createdBy: string;
    createdDate: string;

}