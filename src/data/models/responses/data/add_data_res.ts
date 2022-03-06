export interface AddDataRes {
    status:  number;
    result:  AddDataResResult;
    message: string;
}

export interface AddDataResResult {
    taskId:               number;
    taskTitle:            string;
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
  id: number;
  name: string;
  externalUrl: string;
  inputDataType: number;
  title: string;
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
