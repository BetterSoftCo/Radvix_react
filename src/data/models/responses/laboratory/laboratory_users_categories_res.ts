export interface LaboratoryUsersCategoriesRes {
    status:  number;
    result:  LaboratoryUsersCategoriesResResult;
    message: string;
}

export interface LaboratoryUsersCategoriesResResult {
    users:      User[];
    categories: Category[];
}

export interface Category {
    id:           number;
    title:        string;
    iconFileName: null;
    type:         number;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     null;
}
