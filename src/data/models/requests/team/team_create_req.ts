export interface TeamCreateReq {
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
