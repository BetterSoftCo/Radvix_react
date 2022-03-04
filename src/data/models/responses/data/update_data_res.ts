export interface UpdateDataRes {
    status:  number;
    result:  UpdateDataResResult;
    message: string;
}

export interface UpdateDataResResult {
    taskId:               number;
    taskTitle:            string;
    subTaskId:            number;
    subTaskTitle:         string;
    researchId:           number;
    taskCreatorUserId:    string;
    taskCreatorFirstName: string;
    taskCreatorLastName:  string;
    data:                 Data;
    equipments:           Equipment[];
    users:                User[];
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
    externalUrl:   string;
    inputDataType: number;
}

export interface Equipment {
    id:    number;
    title: string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
