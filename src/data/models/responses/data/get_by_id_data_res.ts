export interface GetDataByIDRes {
  status: number;
  result: GetDataByIDResResult;
  message: string;
}

export interface GetDataByIDResResult {
  taskId: number;
  taskTitle: string;
  description: string;
  subTaskId: null;
  subTaskTitle: null;
  researchId: number;
  taskCreatorUserId: string;
  taskCreatorFirstName: string;
  taskCreatorLastName: string;
  data: Data;
  equipments: any[];
  users: any[];
}

export interface Data {
  id: number;
  title: string;
  creatorUserId: string;
  creatorFirstName: string;
  creatorLastName: string;
  createdDate: Date;
  discussionId: number;
  medias: any[];
}
