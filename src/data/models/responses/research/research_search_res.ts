export interface ResearchSearchRes {
    status:  number;
    result:  ResearchSearchResResult;
    message: string;
}

export interface ResearchSearchResResult {
    users: User[];
    teams: Team[];
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