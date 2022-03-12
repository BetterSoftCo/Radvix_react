export interface SearchTaskRes {
    status:  number;
    result:  SearchTaskResResult;
    message: string;
}

export interface SearchTaskResResult {
    researchId:        number;
    equipments:        Equipment[];
    users:             User[];
    teams:             Equipment[];
    researchStartDate: Date;
    researchEndDate:   Date;
    taskhStartDate:    Date;
    taskEndDate:       Date;
    tasks:             Equipment[];
}

export interface Equipment {
    id:    number;
    title: string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
