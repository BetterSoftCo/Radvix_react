export interface CreateStateExpenseRes {
    status?:  number;
    result?:  CreateStateExpenseResResult;
    message?: string;
}

export interface CreateStateExpenseResResult {
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
