
export interface UserSigninRes {
    status:  number;
    result:  Result;
    message: string;
}

export interface Result {
    id:             string;
    firstName:      string;
    lastName:       string;
    email:          string;
    username:       string;
    role:           number;
    phoneNumber:    string;
    institution:    string;
    profileImage:   string;
    degree:         number;
    major:          string;
    joinedDate:     Date;
    addressLine1:   string;
    addressLine2:   string;
    location:       Location;
    zipCode:        string;
    status:         boolean;
    invitationNote: string;
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
