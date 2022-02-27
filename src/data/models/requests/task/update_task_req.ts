export interface UpdateTaskReq {
    id:                  number;
    parentId:            number;
    title:               string;
    description:         string;
    priority:            number;
    startDate:           Date;
    endDate:             Date;
    status:              number;
    researchId:          number;
    addedEquipmentsId:   number[];
    addedUsersId:        string[];
    addedTeamsId:        number[];
    removedEquipmentsId: number[];
    removedUsersId:      string[];
    removedTeamsId:      number[];
    removedMedia:        number[];
}