export interface GetAllPublishes {
    status?:  number;
    result?:  GetAllPublishesResult;
    message?: string;
}

export interface GetAllPublishesResult {
    researchId?:   number;
    publications?: Publication[];
    count?:        number;
}

export interface Publication {
    id?:                    number;
    researchId?:            number;
    name?:                  string;
    category?:              string;
    assignedUserId?:        string;
    assignedUserFirstName?: string;
    assignedUserLastName?:  string;
    endDate?:               Date;
}
