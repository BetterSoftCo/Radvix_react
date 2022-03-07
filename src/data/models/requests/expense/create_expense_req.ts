export interface CreateExpenseReq {
    title?:       string;
    appTaskId?:   number;
    description?: string;
    amount?:      number;
    date?:        Date;
    categoryId?:  number;
}