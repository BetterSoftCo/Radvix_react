export interface CreateExpenseRes {
    status?:  number;
    result?:  CreateExpenseResResult;
    message?: string;
}

export interface CreateExpenseResResult {
    id?:               number;
    title?:            string;
    appTaskId?:        number;
    appTaskTitle?:     string;
    creatorUserId?:    string;
    creatorFirstName?: string;
    creatorLastName?:  string;
    description?:      string;
    amount?:           number;
    date?:             Date;
    medias?:           Media[];
    categoryId?:       number;
    categoryTitle?:    string;
    status?:           number;
}

export interface Media {
    id?:            number;
    name?:          string;
    title?:         string;
    externalUrl?:   string;
    inputDataType?: number;
}