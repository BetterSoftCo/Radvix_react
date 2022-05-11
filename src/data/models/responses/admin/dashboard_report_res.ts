export interface DashboardReports {
  status: number;
  result: DashboardReportsResult;
  message: string;
}

export interface DashboardReportsResult {
  countUsers: number;
  countOpenTickets: number;
  countProjects: number;
  countInstitutions: number;
  sinceLaunch: number;
  userSignUps: any[];
  income: any[];
  dateUsage: any[];
}

export interface UserSignUp {
  dateTime: Date;
  countUsers: number;
}
