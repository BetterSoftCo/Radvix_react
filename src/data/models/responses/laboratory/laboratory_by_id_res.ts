export interface GetLaboratoryByID {
    status:  number;
    result:  GetLaboratoryByIDResult;
    message: string;
}

export interface GetLaboratoryByIDResult {
    title:        string;
    id:           number;
    categoryName: string;
    categoryId:   number;
    description:  string;
    labManagers:  LabManager[];
    webSite:      string;
    addressLine1: string;
    addressLine2: string;
    zipCode:      string;
    company:      string;
    phone:        string;
    countryId:    number;
    media:        Media[];
    equipments:   Equipment[];
    teams:        Equipment[];
    members:      LabManager[];
}

export interface Equipment {
    id:    number;
    title: string;
}

export interface LabManager {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}

export interface Media {
    id:            number;
    name:          string;
    title:         string;
    externalUrl:   string;
    inputDataType: number;
}
