export interface PaymentsRes {
    status:  number;
    result:  PaymentsResResult;
    message: string;
}

export interface PaymentsResResult {
    paymentList: PaymentList[];
    count:       number;
}

export interface PaymentList {
    id:      number;
    title:   string;
    user:    User;
    payDate: Date;
    status:  number;
}

export interface User {
    id:        string;
    firstName: string;
    lastName:  string;
    email:     string;
    image:     string;
}
