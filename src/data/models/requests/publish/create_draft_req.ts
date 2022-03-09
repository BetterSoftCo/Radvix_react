export interface CreateDraftReq {
    researchId?:           number;
    finalVersion?:         boolean;
    nextPersonToWorkOnId?: string;
    publicationId?:        number;
}