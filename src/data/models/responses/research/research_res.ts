export interface ResearchRes {
    status:  number;
    result:  ResearchResResult;
    message: string;
}

export interface ResearchResResult {
    id:                   number;
    title:                string;
    description:          string;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
    startDate:            Date;
    endDate:              Date;
    currency:             number;
    priority:             number;
    status:               number;
    medias:               Media[];
    users:                User[];
    teams:                Team[];
    laboratories:         Equipment[];
    equipments:           Equipment[];
}

export interface Equipment {
    id:             number;
    title:          string;
    image:          string;
    invitationNote: string;
}

export interface Media {
  id: number;
  name: string;
  externalUrl: string;
  inputDataType: number;
  title: string;
}

export interface Team {
    id:    number;
    title: string;
    users: User[];
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
