export interface GetAllTeams {
  status: number;
  result: GetAllTeamsResult;
  message: string;
}

export interface GetAllTeamsResult {
  userId: string;
  teams: Team[];
  subTeams: SubTeam[];
  teamCount: number;
}

export interface SubTeam {
  id: number;
  title: string;
  parentId: number;
  parentTitle: string;
  parentTeamMemberCount: number;
  creatorFirstName: string;
  creatorLastName: string;
  subTeamMemberCount: number;
}

export interface Team {
  id: number;
  title: string;
  description: string;
  discussionId: number;
  creatorUserId: string;
  creatorUserFirstName: string;
  creatorUserLastName: string;
  memberCount: number;
  subTeams: SubTeam[];
}
