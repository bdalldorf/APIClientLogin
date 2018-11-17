export interface ICredentials {
    username: string;
    password: string;
    token: string;
    fingerPrint: string;
}

export class Credentials implements ICredentials {
    username: string;
    password: string;
    token: string;
    fingerPrint: string;

    constructor(username: string
        , password: string
        , token: string
        , fingerPrint: string) {
        this.username = username;
        this.password = password;
        this.token = token;
        this.fingerPrint = fingerPrint;
    }
}
