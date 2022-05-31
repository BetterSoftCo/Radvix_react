export interface ClientsRes {
  status: number;
  result: ClientsResResult;
  message: string;
}

export interface ClientsResResult {
  users: UserClients[];
  count: number;
}

export interface UserClients {
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
