export interface GetAllTeams {
    status:  number;
    result:  GetAllTeamsResult;
    message: string;
}

export interface GetAllTeamsResult {
    userId: string;
    teams:  Team[];
    count:  number;
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
