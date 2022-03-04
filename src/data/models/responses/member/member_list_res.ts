export interface MemberListRes {
    status:  number;
    result:  MemberListResResult;
    message: string;
}

export interface MemberListResResult {
    members: Member[];
    count:   number;
}

export interface Member {
    id:           string;
    firstName:    string;
    lastName:     string;
    teams:        Team[];
    profileImage: string;
}

export interface Team {
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
