export interface DisscutionCreateRes {
    topic:    number;
    subject:  string;
    priority: number;
    usersId:  string[];
    historiy: Historiy;
}


export interface Historiy {
    createDate: Date;
    message:    string;
    medias:     Media[];
    userId:     string;
}

export interface Media {
  id: number;
  name: string;
  externalUrl: string;
  inputDataType: number;
  title: string;
}
