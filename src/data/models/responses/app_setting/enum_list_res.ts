export interface AppSettingRes {
    result:                  { [key: string]: AppSettingResResult[] };
    id:                      number;
    exception:               null;
    status:                  number;
    isCanceled:              boolean;
    isCompleted:             boolean;
    isCompletedSuccessfully: boolean;
    creationOptions:         number;
    asyncState:              null;
    isFaulted:               boolean;
}

export interface AppSettingResResult {
    id:    number;
    title: string;
}