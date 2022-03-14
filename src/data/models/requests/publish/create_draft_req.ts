export interface CreateDraftReq {
    finalVersion?:  boolean;
    nextDrafterId?: string;
    publicationId?: number;
}