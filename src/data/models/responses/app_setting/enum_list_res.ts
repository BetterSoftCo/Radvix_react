export interface AppSettingRes {
    status:  number;
    result:  Array<AppSettingResult[]>;
    message: string;
}

export interface AppSettingResult {
    enumName: string;
    id:       number;
    title:    string;
}