export interface LaboratoryCreateRes {
    status:  number;
    result:  LaboratoryCreateResResult;
    message: string;
}

export interface LaboratoryCreateResResult {
    categoryName: string;
    labManagers:  string[];
    webSite:      string;
    address:      string;
    equipments:   Equipment[];
    teamMembers:  TeamMember[];
}

export interface Equipment {
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
    creatorUserId:        string;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
    laboratoriesId:       number[];
    laboratories:         Laboratory[];
    externalUrls:         string[];
    inputFiles:           string[];
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

export interface TeamMember {
    id:             string;
    firstName:      string;
    lastName:       string;
    email:          string;
    username:       string;
    role:           number;
    phoneNumber:    string;
    institution:    string;
    degree:         number;
    major:          string;
    joinedDate:     Date;
    addressLine1:   string;
    addressLine2:   string;
    location:       Location;
    zipCode:        string;
    invitationNote: string;
    token:          string;
}

export interface Location {
    id:     number;
    title:  string;
    medias: Media[];
    type:   number;
}

export interface Media {
    id:                   number;
    name:                 string;
    externalUrl:          string;
    type:                 number;
    useCase:              number;
    researchId:           number;
    laboratoryId:         number;
    equipmentId:          number;
    expenseId:            number;
    creatorUserId:        string;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
    dataId:               number;
    appTaskId:            number;
    discussionHistoryId:  number;
}
