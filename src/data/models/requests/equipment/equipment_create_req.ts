export interface EquipmentCreateReq {
    title:           string;
    description:     string;
    technicianName:  string;
    technicianEmail: string;
    model:           string;
    manufacturer:    string;
    laboratoriesId:  number[];
    externalUrls:    string[];
    addressLine1:    string;
    addressLine2:    string;
    zipCode:         string;
    company:         string;
    phone:           string;
    status:          number;
}
