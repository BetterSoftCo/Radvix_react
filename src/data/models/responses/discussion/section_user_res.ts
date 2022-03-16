export interface DiscusstionSectionRes {
    status:  number;
    result:  DiscusstionSectionResResult;
    message: string;
}

export interface DiscusstionSectionResResult {
    members: Member[];
    teams:   Team[];
}

export interface Member {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     null | string;
}

export interface Team {
    id:    number;
    title: string;
    users: Member[];
}
