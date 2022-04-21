export interface ListMemberUserRes {
  status: number;
  result: ListMemberUserResResult;
  message: string;
}

export interface ListMemberUserResResult {
  members: MemberUser[];
  count: number;
}

export interface MemberUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  role: number;
  joinedDate: Date;
  totalMembers: number;
  totalProjects: number;
  storageUsage: number;
  subscription: string;
  profileImage: string;
}
