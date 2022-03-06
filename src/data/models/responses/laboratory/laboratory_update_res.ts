export interface UpdateLaboratoryRes {
    status:  number;
    result:  UpdateLaboratoryResResult;
    message: string;
}

export interface UpdateLaboratoryResResult {
    id:                number;
    title:             string;
    categoryId:        number;
    webSite:           string;
    description:       string;
    removedManagersId: string[];
    addedManagersId:   string[];
    removedMedia:      number[];
    company:           string;
    addressLine1:      string;
    addressLine2:      string;
    city:              string;
    state:             string;
    zipCode:           string;
    creatorUserId:     string;
    phone:             string;
    countryId:         number;
}
