export interface GetTaskByID {
    status:  number;
    result:  GetTaskByIDResult;
    message: string;
}

export interface GetTaskByIDResult {
    id:               number;
    creatorUserId:    string;
    discription:      string;
    priority:         number;
    title:            string;
    creatorFirstName: string;
    creatorLastName:  string;
    parentTask:       ParentTask;
    users:            User[];
    teams:            ParentTask[];
    equipments:       ParentTask[];
    datas:            Data[];
    subTasks:         null[];
    medias:           Media[];
    endDate:          Date;
    startDate:        Date;
    status:           number;
}

export interface Data {
    id:               number;
    title:            string;
    creatorUserId:    string;
    creatorFirstName: string;
    creatorLastName:  string;
    createdDate:      Date;
    discussionId:     number;
    medias:           Media[];
}

export interface Media {
    id:            number;
    name:          string;
    title:         string;
    externalUrl:   string;
    inputDataType: number;
}

export interface ParentTask {
    id:    number;
    title: string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
