export interface GetEquimentByIDRes {
  status:  number;
  result:  GetEquimentByIDResResult;
  message: string;
}

export interface GetEquimentByIDResResult {
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
  medias:          any[];
  teams:           any[];
  members:         any[];
}

export interface Laboratory {
  id:    number;
  title: string;
}
