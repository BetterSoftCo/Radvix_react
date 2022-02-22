export interface SearchDataRes {
    status?:  number;
    result?:  SearchDataResResult;
    message?: string;
}

export interface SearchDataResResult {
    researchId?:           number;
    accessableEquipments?: Equipment[];
    appTasks?:             AppTask[];
    subAppTasks?:          AppTask[];
}

export interface Equipment {
    id?:    number;
    title?: string;
}

export interface AppTask {
    id?:                  number;
    title?:               string;
    suggestedEquipments?: Equipment[];
}