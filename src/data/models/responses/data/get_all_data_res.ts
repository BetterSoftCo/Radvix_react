export interface GetAllDataRes {
    status?:  number;
    result?:  GetAllDataResResult;
    message?: string;
}

export interface GetAllDataResResult {
    dataLists?: DataList[];
    count?:     number;
}

export interface DataList {
    appTaskId?:       number;
    appTaskTitle?:    string;
    researchId?:      number;
    appTaskData?:     AppTaskDatum[];
    subAppTasksData?: SubAppTasksDatum[];
}

export interface AppTaskDatum {
    id?:               number;
    title?:            string;
    creatorUserId?:    string;
    creatorFirstName?: string;
    creatorLastName?:  string;
    createdDate?:      string;
    discussionId?:     number;
    medias?:           Media[];
}

export interface Media {
    id?:            number;
    name?:          string;
    externalUrl?:   string;
    inputDataType?: number;
}

export interface SubAppTasksDatum {
    subAppTaskId?:    number;
    subAppTaskTitle?: string;
    subAppTaskData?:  AppTaskDatum[];
}
