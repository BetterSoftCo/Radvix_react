export interface CreatePublishRes {
    status?:  number;
    result?:  CreatePublishResResult;
    message?: string;
}

export interface CreatePublishResResult {
    id?:               number;
    priority?:         number;
    name?:             string;
    category?:         string;
    submitAt?:         string;
    creatorUserId?:    string;
    creatorFirstName?: string;
    creatorLastName?:  string;
    startDate?:        Date;
    endDate?:          Date;
    users?:            User[];
    drafts?:           Draft[];
}

export interface Draft {
    finalVersion?:         boolean;
    nextPersonToWorkOnId?: string;
    publicationId?:        number;
}

export interface User {
    id?:        string;
    firstName?: string;
    lastName?:  string;
    image?:     string;
}