export interface TimelineRes {
    status:  number;
    result:  TimelineResResult[];
    message: string;
}

export interface TimelineResResult {
    id:               number;
    discussionId:     number;
    title:            string;
    creatorUserId:    string;
    creatorFirstName: string;
    creatorLastName:  string;
    users:            User[];
    teams:            Team[];
    endDate:          Date;
    startDate:        Date;
    status:           number;
    subTasks:         null[];
    count:            number;
}

export interface Team {
    id:    number;
    title: string;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
