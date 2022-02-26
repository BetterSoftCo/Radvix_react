export interface CreateMemberReq {
    userEmail:         string;
    invitationNote:    string;
    accessLevel:       number;
    currentResearchId: number;
    teamsId:           number[];
    subTeamsId:        number[];
    laboratoriesId:    number[];
    equipmentsId:      number[];
    researchesId:      number[];
    role?:              number;
}
