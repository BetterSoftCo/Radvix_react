export interface Profile {
    userName:                string;
    email:                   string;
    createAccount:           string;
    lastLogin:               string;
    credit:                  number;
    firstName:               string;
    lastName:                string;
    provinceName:            string;
    cityName:                string;
    provinceId:              number;
    cityId:                  number;
    cardNumber:              string;
    imageProfile:            string;
    realEstateAdvisorId:     number;
    realEstateAdvisorEnable: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toProfile(json: string): Profile {
        return JSON.parse(json);
    }

    public static ProfileToJson(value: Profile): string {
        return JSON.stringify(value);
    }
}
