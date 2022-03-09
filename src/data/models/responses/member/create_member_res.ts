export interface CreateMemberRes {
  status: number;
  result: CreateMemberResResult;
  message: string;
}

export interface CreateMemberResResult {
  profileImage: string;
  firstName: string;
  lastName: string;
  role: string;
  teams: Equipment[];
  laboratories: Equipment[];
  equipments: Equipment[];
  researches: Equipment[];
  degree: number;
  invitationSender: string;
  joinedDate: Date;
  addressLine1: string;
  addressLine2: string;
  userEmail: string;
  resume: string;
  socialMediaProfiles: string[];
  id: string;
}

export interface Equipment {
  id: number;
  title: string;
}
