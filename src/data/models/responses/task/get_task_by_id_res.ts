export interface GetTaskByID {
    status:  number;
    result:  GetTaskByIDResult;
    message: string;
}

export interface GetTaskByIDResult {
    id:               number;
    researchId:       number;
    creatorUserId:    string;
    discription:      string;
    priority:         number;
    title:            string;
    creatorFirstName: string;
    creatorLastName:  string;
    parentTask:       null;
    users:            any[];
    teams:            Equipment[];
    equipments:       Equipment[];
    datas:            Data[];
    subTasks:         any[];
    medias:           any[];
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
    medias:           any[];
}

export interface Equipment {
    id:    number;
    title: string;
}
