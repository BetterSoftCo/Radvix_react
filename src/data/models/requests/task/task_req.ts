export interface TaskReq {
    id?:                    number;
    title:                 string;
    description:           string;
    priority:              number;
    startDate:             Date;
    endDate:               Date;
    researchId:            number;
    suggestedEquipmentsId: number[];
    addedUsersId:          string[];
    addedTeamsId:          number[];
}
