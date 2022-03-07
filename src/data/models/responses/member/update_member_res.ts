export interface UpdateMemberRes {
    status:  number;
    result:  UpdateMemberResResult;
    message: string;
}

export interface UpdateMemberResResult {
    profileImage:        string;
    firstName:           string;
    lastName:            string;
    role:                string;
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
