export interface UpdateMyProfileRes {
    status:  number;
    result:  UpdateMyProfileResResult;
    message: string;
}

export interface UpdateMyProfileResResult {
    id:                  string;
    profileImage:        string;
    firstName:           string;
    lastName:            string;
    role:                number;
    teams:               Equipment[];
    laboratories:        Equipment[];
    equipments:          Equipment[];
    researches:          Equipment[];
    degree:              number;
    major:               string;
    zipCode:             string;
    phoneNumber:         string;
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
