export interface UpdateDataReq {
    researchId:          number;
    appTaskId:           number;
    dataId:              number;
    addedEquipmentsId:   number[];
    deletedEquipmentsId: number[];
    newAppTasksId:       number;
    deletedMedias:       number[];
    title:               string;
    description:         string;
}
