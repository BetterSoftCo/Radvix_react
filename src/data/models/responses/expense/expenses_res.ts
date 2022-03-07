export interface GetAllExpenses {
    status?:  number;
    result?:  GetAllExpensesResult;
    message?: string;
}

export interface GetAllExpensesResult {
    researchId?: number;
    expenses?:   Expense[];
    count?:      number;
}

export interface Expense {
    id?:            number;
    title?:         string;
    categoryTitle?: string;
    amount?:        number;
    date?:          Date;
    status?:        number;
}
