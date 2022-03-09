export interface EquipmentSearchRes {
    status:  number;
    result:  EquipmentSearchResResult[];
    message: string;
}

export interface EquipmentSearchResResult {
    id:    number;
    title: string;
}
