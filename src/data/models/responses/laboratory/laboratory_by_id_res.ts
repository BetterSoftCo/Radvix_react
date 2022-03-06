export interface GetLaboratoryByID {
    status:  number;
    result:  GetLaboratoryByIDResult;
    message: string;
}

export interface GetLaboratoryByIDResult {
    title:           string;
    description:     string;
    webSite:         string;
    company:         string;
    addressLine1:    string;
    addressLine2:    string;
    city:            string;
    state:           string;
    country:         string;
    zipCode:         string;
    phone:           string;
    externalUrls:    string[];
    inputFiles:      string[];
    removedMedias:   RemovedMedia[];
    equipmentsCount: number;
    managersId:      string[];
    discussionId:    number;
    categoryId:      number;
}

export interface RemovedMedia {
    id:            number;
    name:          string;
    title:         string;
    externalUrl:   string;
    inputDataType: number;
}
