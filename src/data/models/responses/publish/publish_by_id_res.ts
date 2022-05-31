export interface GetPublishByID {
  status?: number;
  result?: GetPublishByIDResult;
  message?: string;
}

export interface GetPublishByIDResult {
  id?: number;
  priority?: number;
  name?: string;
  category?: string;
  submitAt?: string;
  creatorUserId?: string;
  creatorFirstName?: string;
  creatorLastName?: string;
  startDate?: Date;
  endDate?: Date;
  users?: UserPublish[];
  nextDraft?: NextDraft;
  drafts?: Draft[];
}

export interface Draft {
  finalVersion?: boolean;
  userId?: string;
  firstName?: string;
  lastName?: string;
  publicationId?: number;
  medias?: Media[];
  createdDate?: Date;
}

export interface Media {
  id?: number;
  name?: string;
  title?: string;
  externalUrl?: string;
  useCase?: number;
  inputDataType?: number;
}

export interface NextDraft {
  finalVersion?: boolean;
  nextDrafterId?: string;
  nextDrafterFirstName?: string;
  nextDrafterLastName?: string;
  publicationId?: number;
  createdDate?: Date;
}

export interface UserPublish {
  id?: string;
  firstName?: string;
  lastName?: string;
  image?: string;
}
