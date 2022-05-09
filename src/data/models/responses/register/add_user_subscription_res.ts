export interface AddUserSubscrtiptionRes {
  status: number;
  result: AddUserSubscrtiptionReqResult;
  message: string;
}

export interface AddUserSubscrtiptionReqResult {
  id: string;
  profileImage: string;
  firstName: string;
  lastName: string;
  university: string;
  institution: string;
  role: number;
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
}

export interface Equipment {
  id: number;
  title: string;
}
