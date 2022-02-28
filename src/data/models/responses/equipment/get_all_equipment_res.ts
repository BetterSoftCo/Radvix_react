export interface GetAllEquipment {
    status:  number;
    result:  GetAllEquipmentResult;
    message: string;
}

export interface GetAllEquipmentResult {
    id:                   number;
    title:                string;
    description:          string;
    manufacturer:         string;
    model:                string;
    technicianName:       string;
    technicianEmail:      string;
    technicianPhone:      string;
    phone:                string;
    discussionId:         number;
    status:               number;
    isTeamAssigned:       boolean;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
    laboratoriesId:       number[];
    laboratories:         Laboratory[];
    externalUrls:         string[];
    removedMedias:        RemovedMedia[];
    usersCount:           number;
}

export interface Laboratory {
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
    externalUrl:   string;
    inputDataType: number;
}
