

export interface GlobalSearch {
    Status?:  number;
    Result?:  Result;
    Message?: string;
}

export interface Result {
    Doctors?:     Doctor[];
    Specialties?: Specialty[];
    Cases?:       Case[];
    Articles?:    Article[];
    Hospitals?:   Hospital[];
}

export interface Article {
    Id?:          number;
    Title?:       string;
    UserId?:      string;
    FullName?:    string;
    IsBookmark?:  boolean;
    IsMine?:      boolean;
    VoteUp?:      boolean;
    VoteDown?:    boolean;
    Votes?:       number;
    CreatedAt?:   string;
    Specialties?: Specialty[];
}

export interface Specialty {
    Id?:    number;
    Title?: string;
    Media?: SpecialtyMedia[];
}

export interface SpecialtyMedia {
    Id?:      number;
    Type?:    number;
    UseCase?: number;
    Link?:    string;
}

export interface Case {
    Id?:           number;
    Title?:        string;
    UserId?:       string;
    FullName?:     string;
    IsBookmark?:   boolean;
    IsAccepted?:   boolean;
    IsMine?:       boolean;
    UsersCount?:   number;
    VoteUp?:       boolean;
    VoteDown?:     boolean;
    Votes?:        number;
    AnswersCount?: number;
    CreatedAt?:    string;
    Specialties?:  Specialty[];
}

export interface Doctor {
    Id?:          string;
    FullName?:    string;
    Point?:       number;
    IsFollowing?: boolean;
    Headline?:    null | string;
    Location?:    Location | null;
    Media?:       DoctorMedia[];
    Specialties?: Specialty[];
    Badges?:      Badge[];
}

export interface Badge {
    Id?:          number;
    Description?: string;
    Type?:        number;
    CreatedAt?:   null;
}

export interface Location {
    Id?:    number;
    Title?: string;
    Type?:  number;
}

export interface DoctorMedia {
    Id?:      number;
    Type?:    number;
    UseCase?: number;
    Link?:    string;
}

export interface Hospital {
    Id?:         number;
    Title?:      string;
    CountUsers?: number;
    VoteUp?:     boolean;
    VoteDown?:   boolean;
    Votes?:      number;
    IsBookmark?: boolean;
    IsMine?:     boolean;
    Location?:   Location;
    Media?:      HospitalMedia[];
}

export interface HospitalMedia {
    Id?:      number;
    Type?:    number;
    UseCase?: number;
    Link?:    string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toGlobalSearch(json: string): GlobalSearch {
        return cast(JSON.parse(json), r("GlobalSearch"));
    }

    public static globalSearchToJson(value: GlobalSearch): string {
        return JSON.stringify(uncast(value, r("GlobalSearch")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "GlobalSearch": o([
        { json: "Status", js: "Status", typ: u(undefined, 0) },
        { json: "Result", js: "Result", typ: u(undefined, r("Result")) },
        { json: "Message", js: "Message", typ: u(undefined, "") },
    ], false),
    "Result": o([
        { json: "Doctors", js: "Doctors", typ: u(undefined, a(r("Doctor"))) },
        { json: "Specialties", js: "Specialties", typ: u(undefined, a(r("Specialty"))) },
        { json: "Cases", js: "Cases", typ: u(undefined, a(r("Case"))) },
        { json: "Articles", js: "Articles", typ: u(undefined, a(r("Article"))) },
        { json: "Hospitals", js: "Hospitals", typ: u(undefined, a(r("Hospital"))) },
    ], false),
    "Article": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Title", js: "Title", typ: u(undefined, "") },
        { json: "UserId", js: "UserId", typ: u(undefined, "") },
        { json: "FullName", js: "FullName", typ: u(undefined, "") },
        { json: "IsBookmark", js: "IsBookmark", typ: u(undefined, true) },
        { json: "IsMine", js: "IsMine", typ: u(undefined, true) },
        { json: "VoteUp", js: "VoteUp", typ: u(undefined, true) },
        { json: "VoteDown", js: "VoteDown", typ: u(undefined, true) },
        { json: "Votes", js: "Votes", typ: u(undefined, 0) },
        { json: "CreatedAt", js: "CreatedAt", typ: u(undefined, "") },
        { json: "Specialties", js: "Specialties", typ: u(undefined, a(r("Specialty"))) },
    ], false),
    "Specialty": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Title", js: "Title", typ: u(undefined, "") },
        { json: "Media", js: "Media", typ: u(undefined, a(r("SpecialtyMedia"))) },
    ], false),
    "SpecialtyMedia": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Type", js: "Type", typ: u(undefined, 0) },
        { json: "UseCase", js: "UseCase", typ: u(undefined, 0) },
        { json: "Link", js: "Link", typ: u(undefined, "") },
    ], false),
    "Case": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Title", js: "Title", typ: u(undefined, "") },
        { json: "UserId", js: "UserId", typ: u(undefined, "") },
        { json: "FullName", js: "FullName", typ: u(undefined, "") },
        { json: "IsBookmark", js: "IsBookmark", typ: u(undefined, true) },
        { json: "IsAccepted", js: "IsAccepted", typ: u(undefined, true) },
        { json: "IsMine", js: "IsMine", typ: u(undefined, true) },
        { json: "UsersCount", js: "UsersCount", typ: u(undefined, 0) },
        { json: "VoteUp", js: "VoteUp", typ: u(undefined, true) },
        { json: "VoteDown", js: "VoteDown", typ: u(undefined, true) },
        { json: "Votes", js: "Votes", typ: u(undefined, 0) },
        { json: "AnswersCount", js: "AnswersCount", typ: u(undefined, 0) },
        { json: "CreatedAt", js: "CreatedAt", typ: u(undefined, "") },
        { json: "Specialties", js: "Specialties", typ: u(undefined, a(r("Specialty"))) },
    ], false),
    "Doctor": o([
        { json: "Id", js: "Id", typ: u(undefined, "") },
        { json: "FullName", js: "FullName", typ: u(undefined, "") },
        { json: "Point", js: "Point", typ: u(undefined, 0) },
        { json: "IsFollowing", js: "IsFollowing", typ: u(undefined, true) },
        { json: "Headline", js: "Headline", typ: u(undefined, u(null, "")) },
        { json: "Location", js: "Location", typ: u(undefined, u(r("Location"), null)) },
        { json: "Media", js: "Media", typ: u(undefined, a(r("DoctorMedia"))) },
        { json: "Specialties", js: "Specialties", typ: u(undefined, a(r("Specialty"))) },
        { json: "Badges", js: "Badges", typ: u(undefined, a(r("Badge"))) },
    ], false),
    "Badge": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Description", js: "Description", typ: u(undefined, "") },
        { json: "Type", js: "Type", typ: u(undefined, 0) },
        { json: "CreatedAt", js: "CreatedAt", typ: u(undefined, null) },
    ], false),
    "Location": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Title", js: "Title", typ: u(undefined, "") },
        { json: "Type", js: "Type", typ: u(undefined, 0) },
    ], false),
    "DoctorMedia": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Type", js: "Type", typ: u(undefined, 0) },
        { json: "UseCase", js: "UseCase", typ: u(undefined, 0) },
        { json: "Link", js: "Link", typ: u(undefined, "") },
    ], false),
    "Hospital": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Title", js: "Title", typ: u(undefined, "") },
        { json: "CountUsers", js: "CountUsers", typ: u(undefined, 0) },
        { json: "VoteUp", js: "VoteUp", typ: u(undefined, true) },
        { json: "VoteDown", js: "VoteDown", typ: u(undefined, true) },
        { json: "Votes", js: "Votes", typ: u(undefined, 0) },
        { json: "IsBookmark", js: "IsBookmark", typ: u(undefined, true) },
        { json: "IsMine", js: "IsMine", typ: u(undefined, true) },
        { json: "Location", js: "Location", typ: u(undefined, r("Location")) },
        { json: "Media", js: "Media", typ: u(undefined, a(r("HospitalMedia"))) },
    ], false),
    "HospitalMedia": o([
        { json: "Id", js: "Id", typ: u(undefined, 0) },
        { json: "Type", js: "Type", typ: u(undefined, 0) },
        { json: "UseCase", js: "UseCase", typ: u(undefined, 0) },
        { json: "Link", js: "Link", typ: u(undefined, "") },
    ], false),
};
