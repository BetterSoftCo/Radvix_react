export interface TeamSearchRes {
    status:  number;
    result:  TeamSearchResResult;
    message: string;
}

export interface TeamSearchResResult {
    managers:     Manager[];
    users:        User[];
    laboratories: Equipment[];
    equipments:   Equipment[];
    researches:   Equipment[];
    teams:        Equipment[];
}

export interface Equipment {
    id:    number;
    title: string;
}

export interface Manager {
    id:        number;
    userId:    string;
    firstName: string;
    lastName:  string;
    image:     string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
