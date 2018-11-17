import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { SessionState } from 'src/app/models/sessionState.model';

export enum HeaderType {
    Validation = 1,
    Token = 2,
    Standard = 3,
    Pass = 4,
    Form = 5,
    None = 6
  }

@Injectable()
export class HeadersService {
    private session: SessionState;

    constructor(
       // private store: Store<any>,
    )  {
       // this.sessionState = this.store.select('sessionState');
       // this.sessionState.subscribe( session => {
       //     this.session = session;
       // });
    }

    public getHeaders(headerType: HeaderType): HttpHeaders {
        let headers: HttpHeaders;

        switch (headerType) {
            case HeaderType.Validation:
            headers =  new HttpHeaders({
                'Authorization': `Token ${this.session.token}`,
                'X-Auth-Fingerprint': this.session.fingerPrint
            });
            break;
            case HeaderType.Token:
            headers =  new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Auth-Fingerprint': this.session.fingerPrint,
                'Accept': 'application/json'
            });
            break;
            case HeaderType.Standard:
            headers =  new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Auth-Fingerprint': this.session.fingerPrint,
                'Accept': '*/*'
            });
            break;
            case HeaderType.Pass:
            headers =  new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'X-Auth-Fingerprint': this.session.fingerPrint,
                'Accept': 'application/json'
            });
            break;
            case HeaderType.Form:
                headers =  new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
            });
            break;
            case HeaderType.None:
                headers =  new HttpHeaders({
                    'Content-Type':  'application/json',
                    'Accept': '*/*'
            });
            break;
        }

        return headers;
    }
}
