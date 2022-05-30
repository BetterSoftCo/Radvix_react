export interface GetMemberByIDRes {
  status: number;
  result: GetMemberByIDResResult;
  message: string;
}

export interface GetMemberByIDResResult {
  id: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  role: number;
  institution: string,
  teams: Equipment[];
  laboratories: Equipment[];
  equipments: Equipment[];
  researches: Equipment[];
  degree: number;
  major: string;
  zipCode: string;
  phoneNumber: string;
  invitationSender: string;
  joinedDate: Date;
  addressLine1: string;
  addressLine2: string;
  userEmail: string;
  resume: string;
  socialMediaProfiles: string[];
  billingEmail: string;
  billingAddress: string;
  cardInfomation: string;
  cardExpireDate: string;
  cardCVC: string;
  nameOnCard: string;
  companyName:string
}

export interface Equipment {
  id: number;
  title: string;
}
