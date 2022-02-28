export interface TeamCreateRes {
    status:  number;
    result:  TeamCreateResResult;
    message: string;
}

export interface TeamCreateResResult {
    id:             number;
    title:          string;
    description:    string;
    managersId:     string[];
    usersId:        string[];
    laboratoriesId: number[];
    equipmentsId:   number[];
    researchesId:   number[];
    subTeamId:      number;
}
