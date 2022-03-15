export interface DiscusstionCreateReq {
  topic: number;
  sectionId: number;
  subject: string;
  message: string;
  priority: number;
  usersId: string[];
}
