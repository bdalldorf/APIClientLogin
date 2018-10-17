import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HeadersService } from '../services/headers.service';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/shareReplay';

interface ApiRouteConfig {
    route: string;
    header: HeaderType;
}

@Injectable()
export class ApiEndpoint {
    public url: string = environment.apiUrl;
    public config: ApiRouteConfig;
    private sessionState;
    private session;
    public getAction;
    public postAction;
    public putAction;
    public deleteAction;
    public getError;
    public postError;
    public putError;
    public deleteError;

    constructor(
        public http: HttpClient,
        public headerService: HeadersService,
        public store: Store<any>,
    ) {
        this.sessionState = this.store.select('sessionState');
        this.sessionState.subscribe( session => {
            this.session = session;
        });
    }

    initialize(config: ApiRouteConfig) {
        this.config = config;
    }

    get(paramPayload: any, paramHeader: HeaderType, paramRoute: string ) {
        const headers = this.headerService.getHeaders(paramHeader);

        const apiRequest = {
            route: this.config.route,
            paramPayload,
            type: 'get',
            headers: headers,
            response: null,
            status: null,
        };

        const subscription = this.http.post(`${this.url}${paramRoute}`, paramPayload, headers).shareReplay();

        subscription.subscribe(
            response => {
                apiRequest.response = response;
                apiRequest.status = response;
                if (this.getAction) {
                    this.store.dispatch( {type: this.getAction, payload: response});
                } else {				}
            },
            error => {
                try {
                    apiRequest.response = error.json();
                } catch (e) {
                    apiRequest.response = null;
                }
                apiRequest.status = error.status;
                if (this.getError) {
                    this.store.dispatch( {type: this.getError, payload: error});
              } else {				}
            },
        );
        return subscription;
    }

    post(paramPayload: any, paramHeader: HeaderType, paramRoute: string ) {
        const headers = this.headerService.getHeaders(paramHeader);

        const apiRequest = {
            route: this.config.route,
            paramPayload,
            type: 'post',
            headers: headers,
            response: null,
            status: null,
        };

        const subscription = this.http.post(`${this.url}${paramRoute}`, paramPayload, headers).shareReplay();

        subscription.subscribe(
            response => {
                apiRequest.response = response;
                apiRequest.status = response;
                if (this.postAction) {
                    this.store.dispatch( {type: this.postAction, payload: response});
                } else {				}
            },
            error => {
                try {
                    apiRequest.response = error.json();
                } catch (e) {
                    apiRequest.response = null;
                }
                apiRequest.status = error.status;
                if (this.postError) {
                    this.store.dispatch( {type: this.postError, payload: error});
              } else {				}
            },
        );
        return subscription;
    }
}
