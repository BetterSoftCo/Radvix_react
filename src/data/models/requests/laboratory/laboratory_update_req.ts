export interface UpdateLaboratoryReq {
    id:            number;
    title:         string;
    categoryId:    number;
    webSite:       string;
    description:   string;
    managersId:    string[];
    addressLine1:  string;
    addressLine2:  string;
    zipCode:       string;
    creatorUserId: string;
    company:       string;
    phone:         string;
}
