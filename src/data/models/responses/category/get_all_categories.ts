
export interface GetAllCategories {
    status?:  number;
    result?:  GetAllCategoriesResult[];
    message?: string;
}

export interface GetAllCategoriesResult {
    id?:           number;
    title?:        string;
    iconFileName?: string;
    type?:         number;
}