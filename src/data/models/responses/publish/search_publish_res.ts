export interface SearchPublishRes {
    status?:  number;
    result?:  SearchPublishResResult;
    message?: string;
}

export interface SearchPublishResResult {
    researchId?:  number;
    users?:       TeamsMember[];
    teamsMember?: TeamsMember[];
    categories?:  Category[];
}

export interface Category {
    id?:    number;
    title?: string;
}

export interface TeamsMember {
    id?:        string;
    firstName?: string;
    lastName?:  string;
    image?:     string;
}
