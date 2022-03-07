export interface SearchExpenseRes {
    status?:  number;
    result?:  SearchExpenseResResult;
    message?: string;
}

export interface SearchExpenseResResult {
    appTasks?: AppTask[];
    category?: Category[];
}

export interface AppTask {
    id?:    number;
    title?: string;
}

export interface Category {
    id?:           number;
    title?:        string;
    iconFileName?: string;
    type?:         number;
}
