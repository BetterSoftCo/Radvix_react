export interface GetDataByIDRes {
    status:  number;
    result:  GetDataByIDResResult;
    message: string;
}

export interface GetDataByIDResResult {
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
    title:         string;
    externalUrl:   string;
    useCase:       number;
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
