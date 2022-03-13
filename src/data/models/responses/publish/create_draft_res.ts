export interface CreateDraftRes {
    status?:  number;
    result?:  CreateDraftResResult;
    message?: string;
}

export interface CreateDraftResResult {
    publicationId?: number;
    draftId?:       number;
}
