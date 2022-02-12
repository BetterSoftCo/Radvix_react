export interface ResearchReq {
    title:       string;
    description: string;
    startDate:   Date;
    endDate:     Date;
    currency:    number;
    priority:    number;
    teamsId:     number[];
    usersId:     string[];
    status:      number;
}