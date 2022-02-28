export interface UpdateResearchReq {
    id:              number;
    title:           string;
    description:     string;
    startDate:       Date;
    endDate:         Date;
    currency:        number;
    priority:        number;
    removedMediasId: number[];
    addedTeamsId:    number[];
    removedTeamsId:  number[];
    addedUsersId:    string[];
    removedUsersId:  string[];
}
