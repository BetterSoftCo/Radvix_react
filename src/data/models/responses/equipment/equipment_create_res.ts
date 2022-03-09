export interface EquipmentCreateRes {
    status:  number;
    result:  EquipmentCreateResResult;
    message: string;
}

export interface EquipmentCreateResResult {
    id:              number;
    title:           string;
    image:           string;
    status:          number;
    laboratories:    Laboratory[];
    manufacturer:    string;
    model:           string;
    technicianName:  string;
    technicianEmail: string;
    technicianPhone: string;
    medias:          Media[];
    teams:           Laboratory[];
    members:         Member[];
}

export interface Laboratory {
    id:    number;
    title: string;
}

export interface Media {
    id:            number;
    name:          string;
    title:         string;
    externalUrl:   string;
    inputDataType: number;
}

export interface Member {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
