export interface EditExpenseReq {
  id?:             number;
  title?:          string;
  appTaskId?:      number;
  description?:    string;
  amount?:         number;
  date?:           Date;
  categoryId?:     number;
  removedMediaId?: number[];
}