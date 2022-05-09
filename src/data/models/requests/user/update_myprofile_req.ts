export interface UpdateMyProfileReq {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  degree: number;
  major: string;
  phoneNumber: string;
  institution: string;
  addressLine1: string;
  addressLine2: string;
  locationId: number;
  zipCode: string;
  token: string;
  billingEmail: string;
  billingAddress: string;
  cardInfomation: string;
  cardExpireDate: string;
  cardCVC: string;
  nameOnCard: string;
  role: number;
}
