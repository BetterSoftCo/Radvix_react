export interface GetLaboratoryByID {
    status:  number;
    result:  GetLaboratoryByIDResult;
    message: string;
}

export interface GetLaboratoryByIDResult {
    title:        string;
    id:           number;
    categoryName: string;
    labManagers:  LabManager[];
    webSite:      string;
    address:      string;
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
