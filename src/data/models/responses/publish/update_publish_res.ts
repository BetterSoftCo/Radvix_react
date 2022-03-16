export interface EditPublishRes {
    status?:  number;
    result?:  EditPublishResResult;
    message?: string;
}

export interface EditPublishResResult {
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
    nextDraft?:        NextDraft;
    drafts?:           Draft[];
}

export interface Draft {
    id?:            number;
    finalVersion?:  boolean;
    userId?:        string;
    firstName?:     string;
    lastName?:      string;
    publicationId?: number;
    medias?:        Media[];
    createdDate?:   Date;
}

export interface Media {
    id?:            number;
    name?:          string;
    title?:         string;
    externalUrl?:   string;
    useCase?:       number;
    inputDataType?: number;
}

export interface NextDraft {
    id?:                   number;
    finalVersion?:         boolean;
    nextDrafterId?:        string;
    nextDrafterFirstName?: string;
    nextDrafterLastName?:  string;
    publicationId?:        number;
    createdDate?:          Date;
}

export interface User {
    id?:        string;
    firstName?: string;
    lastName?:  string;
    image?:     string;
}
