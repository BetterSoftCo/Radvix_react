export interface CreateDraftRes {
    status?:  number;
    result?:  CreateDraftResResult;
    message?: string;
}

export interface CreateDraftResResult {
    id?:                number;
    priority?:          number;
    name?:              string;
    category?:          string;
    submitAt?:          string;
    creatorUserId?:     string;
    creatorFirstName?:  string;
    creatorLastName?:   string;
    nextDraftUploader?: NextDraftUploader;
    startDate?:         Date;
    endDate?:           Date;
    users?:             NextDraftUploader[];
    drafts?:            Draft[];
}

export interface Draft {
    researchId?:           number;
    finalVersion?:         boolean;
    nextPersonToWorkOnId?: string;
    publicationId?:        number;
}

export interface NextDraftUploader {
    id?:        string;
    firstName?: string;
    lastName?:  string;
    image?:     string;
}
