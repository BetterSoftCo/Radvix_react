export interface GetMemberByIDRes {
    status:  number;
    result:  GetMemberByIDResResult;
    message: string;
}

export interface GetMemberByIDResResult {
    profileImage:        string;
    firstName:           string;
    lastName:            string;
    role:                number;
    teams:               Equipment[];
    laboratories:        Equipment[];
    equipments:          Equipment[];
    researches:          Equipment[];
    degree:              number;
    invitationSender:    string;
    joinedDate:          Date;
    addressLine1:        string;
    addressLine2:        string;
    userEmail:           string;
    resume:              string;
    socialMediaProfiles: string[];
}

export interface Equipment {
    id:    number;
    title: string;
}
