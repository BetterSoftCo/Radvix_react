export interface EditEquipmentRes {
    status:  number;
    result:  EditEquipmentResResult;
    message: string;
}

export interface EditEquipmentResResult {
    id:              number;
    title:           string;
    image:           string;
    description:     string;
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
    useCase:       number;
    inputDataType: number;
}

export interface Member {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
