import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SessionState } from '../session/session-state';
import { Observable } from 'rxjs/observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeadersService {
    private sessionState: Observable<SessionState>;
    private session: SessionState;

    constructor(
        private store: Store<any>,
    )  {
        this.sessionState = this.store.select('sessionState');
        this.sessionState.subscribe( session => {
            this.session = session;
        });
    }

    public getHeaders(headerType: HeaderType): object {
        let headers = new HttpHeaders();

        switch (headerType) {
            case HeaderType.Validation:
                headers = headers.set('Authorization', `Token ${this.session.token}`);
                headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
            break;
            case HeaderType.Token:
                headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
                headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
                headers = headers.set('Accept', 'application/json');
            break;
            case HeaderType.Standard:
                headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Accept', '*/*');
            break;
            case HeaderType.Pass:
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
                headers = headers.set('Accept', 'application/json');
            break;
            case HeaderType.None:
                headers = headers.set('Content-Type', 'application/json; charset=utf-8');
                headers = headers.set('Accept', '*/*');
            break;
        }

        return headers;
    }
}
