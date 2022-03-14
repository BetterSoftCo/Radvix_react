export interface EditPublishReq {
  id?:         number;
  startDate?:  Date;
  endDate?:    Date;
  name?:       string;
  categoryId?: number;
  addedUsers?: string[];
}