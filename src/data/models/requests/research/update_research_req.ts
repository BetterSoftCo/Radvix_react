export interface UpdateResearchReq {
    id:              number;
    title:           string;
    description:     string;
    status:          number;
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
