export interface RegisterRes {
    status:  number;
    result:  RegisterResResult;
    message: string;
}

export interface RegisterResResult {
    id:             null;
    firstName:      null;
    lastName:       null;
    email:          null;
    username:       null;
    role:           number;
    phoneNumber:    null;
    institution:    null;
    degree:         number;
    major:          null;
    joinedDate:     Date;
    addressLine1:   null;
    addressLine2:   null;
    location:       null;
    zipCode:        null;
    invitationNote: null;
    token:          null;
}
