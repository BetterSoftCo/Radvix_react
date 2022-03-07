export interface CreatePublishReq {
    categoryId?:    number;
    name?:          string;
    submitAt?:      string;
    priority?:      number;
    startDate?:     Date;
    endDate?:       Date;
    users?:         string[];
    draftUploader?: string;
}