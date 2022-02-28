export interface SearchMemberRes {
    status:  number;
    result:  SearchMemberResResult;
    message: string;
}

export interface SearchMemberResResult {
    researchId:    number;
    creatorUserId: string;
    teams:         Equipment[];
    subTeams:      Equipment[];
    laboratories:  Equipment[];
    equipments:    Equipment[];
    researches:    Equipment[];
}

export interface Equipment {
    id:    number;
    title: string;
}
