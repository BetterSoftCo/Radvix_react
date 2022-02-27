export interface UpdateTeamRes {
    status:  number;
    result:  UpdateTeamResResult;
    message: string;
}

export interface UpdateTeamResResult {
    id:                    number;
    title:                 string;
    description:           string;
    addedManagersId:       string[];
    addedUsersId:          string[];
    addedLaboratoriesId:   number[];
    addedEquipmentsId:     number[];
    addedResearchesId:     number[];
    deletedManagersId:     string[];
    deletedUsersId:        string[];
    deletedLaboratoriesId: number[];
    deletedEquipmentsId:   number[];
    deletedResearchesId:   number[];
}
