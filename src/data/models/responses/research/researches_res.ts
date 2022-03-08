export interface ResearchesRes {
  status?: number;
  result?: ResearchesResResult;
  message?: string;
}

export interface ResearchesResResult {
  userId?: string;
  researchesList?: ResearchesList[];
  count?: number;
}

export interface ResearchesList {
  id?: number;
  title?: string;
  description?: string;
  creatorUserFirstName?: string;
  creatorUserLastName?: string;
  startDate?: string;
  endDate?: string;
  currency?: number;
  priority?: number;
  status: number;
  medias?: Media[];
}

export interface Media {
  id?: number;
  name?: string;
  externalUrl?: string;
  inputDataType?: number;
  title?: string;
}
