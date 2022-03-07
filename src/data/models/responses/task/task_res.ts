export interface TaskRes {
    status:  number;
    result:  TaskResResult;
    message: string;
}

export interface TaskResResult {
    id:               number;
    creatorUserId:    string;
    discussionId:     number;
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
  id: number;
  name: string;
  externalUrl: string;
  inputDataType: number;
  title: string;
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
