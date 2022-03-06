export interface LaboratoryGetAllRes {
    status:  number;
    result:  LaboratoryGetAllResResult;
    message: string;
}

export interface LaboratoryGetAllResResult {
    laboratories: Laboratory[];
    count:        number;
}

export interface Laboratory {
    id:              number;
    title:           string;
    company:         string;
    categoryTitle:   string;
    equipmentsCount: number;
    allowedToEdit:   boolean;
}
