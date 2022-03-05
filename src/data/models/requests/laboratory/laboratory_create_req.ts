export interface LaboratoryCreateReq {
    researchId?:   number;
    title:        string;
    categoryId:   number;
    webSite:      string;
    description:  string;
    managersId:   string[];
    company:      string;
    addressLine1: string;
    addressLine2: string;
    city:         string;
    state:        string;
    zipCode:      string;
    phone:        string;
    countryId:    number;
}