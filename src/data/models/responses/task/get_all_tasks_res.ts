export interface GetAllTasks {
    status:  number;
    result:  GetAllTasksResult;
    message: string;
}

export interface GetAllTasksResult {
    researchId: number;
    appTasks:   AppTask[];
    count:      number;
}

export interface AppTask {
    appTask:     SubAppTaskClass;
    subAppTasks: SubAppTaskClass[];
}

export interface SubAppTaskClass {
    id:               number;
    discussionId:     number;
    title:            string;
    creatorUserId:    string;
    creatorFirstName: string;
    creatorLastName:  string;
    users:            User[];
    teams:            Team[];
    endDate:          Date;
    startDate:        Date;
    status:           number;
}

export interface Team {
    id:    number;
    title: string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
