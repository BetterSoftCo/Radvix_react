export interface DiscusstionSearchRes {
    status:  number;
    result:  DiscusstionSearchResResult;
    message: string;
}

export interface DiscusstionSearchResResult {
    members:         Member[];
    discussionOn:    DiscussionOn[];
    discussionTopic: number;
    ticketCategory:  TicketCategory[];
}

export interface DiscussionOn {
    id:    number;
    title: string;
}

export interface Member {
    researchId:   number;
    teamId:       number;
    appTaskId:    number;
    dataId:       number;
    equipmentId:  number;
    laboratoryId: number;
    userId:       string;
    firstName:    string;
    lastName:     string;
    image:        string;
}

export interface TicketCategory {
    id:           number;
    title:        string;
    iconFileName: string;
    type:         number;
}
