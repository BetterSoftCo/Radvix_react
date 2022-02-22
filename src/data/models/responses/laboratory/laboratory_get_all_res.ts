export interface LaboratoryGetAllRes {
    status:  number;
    result:  LaboratoryGetAllResResult[];
    message: string;
}

export interface LaboratoryGetAllResResult {
    id:    number;
    title: string;
}
