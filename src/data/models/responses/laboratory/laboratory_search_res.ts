export interface LboratorySearchRes {
    status:  number;
    result:  LboratorySearchResResult;
    message: string;
}

export interface LboratorySearchResResult {
    managers:   Manager[];
    categories: Category[];
}

export interface Category {
    id:           number;
    title:        string;
    iconFileName: string;
    type:         number;
}

export interface Manager {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
