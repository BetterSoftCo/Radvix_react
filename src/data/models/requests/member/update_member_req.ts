export interface UpdateMemberReq {
    userEmail:             string;
    invitationNote:        string;
    currentResearchId:     number;
    addedTeamsId:          number[];
    addedLaboratoriesId:   number[];
    addedEquipmentsId:     number[];
    addedResearchesId:     number[];
    deletedTeamsId:        number[];
    deletedLaboratoriesId: number[];
    deletedEquipmentsId:   number[];
    deletedResearchesId:   number[];
    role:                  number;
}
