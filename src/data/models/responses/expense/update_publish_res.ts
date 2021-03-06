export interface EditExpenseRes {
    status?:  number;
    result?:  EditExpenseResResult;
    message?: string;
}

export interface EditExpenseResResult {
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
    useCase?:       number;
    inputDataType?: number;
}