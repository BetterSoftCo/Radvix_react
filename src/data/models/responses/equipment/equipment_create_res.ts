export interface EquipmentCreateRes {
    status:  number;
    result:  EquipmentCreateResResult;
    message: string;
}

export interface EquipmentCreateResResult {
    id:              number;
    title:           string;
    status:          number;
    manufacturer:    string;
    support:         Support;
    laboratoryNames: string[];
    medias:          ResultMedia[];
    teamMembers:     Array<Support[]>;
    teams:           Team[];
}

export interface ResultMedia {
    id:            number;
    name:          string;
    externalUrl:   string;
    inputDataType: number;
}

export interface Support {
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
    medias: LocationMedia[];
    type:   number;
}

export interface LocationMedia {
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

export interface Team {
    id:                   number;
    title:                string;
    description:          string;
    discussionId:         number;
    creatorUserId:        string;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
    memberCount:          number;
    managers:             Manager[];
    users:                User[];
    laboratories:         AppTask[];
    equipments:           AppTask[];
    researches:           AppTask[];
    appTasks:             AppTask[];
    subAppTasks:          AppTask[];
    subTeams:             SubTeam[];
    mainTeam:             MainTeam;
}

export interface AppTask {
    id:    number;
    title: string;
}

export interface MainTeam {
    id:    number;
    title: string;
    users: User[];
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}

export interface Manager {
    id:        number;
    userId:    string;
    firstName: string;
    lastName:  string;
    image:     string;
}

export interface SubTeam {
    id:               number;
    title:            string;
    creatorFirstName: string;
    creatorLastName:  string;
    memberCount:      number;
}
