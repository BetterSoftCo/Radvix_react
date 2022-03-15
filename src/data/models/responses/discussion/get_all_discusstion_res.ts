export interface GetAllDiscusstionRes {
    status:  number;
    result:  GetAllDiscusstionResResult;
    message: string;
}

export interface GetAllDiscusstionResResult {
    discussions: Discussion[];
    count:       number;
}

export interface Discussion {
    id:                   number;
    topic:                number;
    subject:              string;
    priority:             number;
    users:                User[];
    histories:            History[];
    isTicket:             boolean;
    creatorUserId:        string;
    creatorUserFirstName: string;
    creatorUserLastName:  string;
}

export interface History {
    id:                 number;
    createDate:         Date;
    discussionId:       number;
    message:            string;
    attachments:        Attachment[];
    userId:             string;
    userFirstName:      string;
    userLastName:       string;
    userProfilePicture: string;
    read:               boolean;
}

export interface Attachment {
    id:            number;
    name:          string;
    title:         string;
    externalUrl:   string;
    useCase:       number;
    inputDataType: number;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    image:     string;
}
