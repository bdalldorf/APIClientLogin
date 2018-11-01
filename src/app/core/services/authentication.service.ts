import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HeadersService, HeaderType} from '../../restservice/headers.service';
import { HttpHeaders } from '@angular/common/http';

class TokenRequest {
    username: string;
    password: string;
    token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private headerService: HeadersService;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const tokenRequest = new TokenRequest();
        tokenRequest.username = username;
        tokenRequest.password = password;
        this.headerService = new HeadersService();

        return this.http.post<any>(`${environment.apiUrl}authenticate/login`,
        tokenRequest ,
        {headers: this.headerService.getHeaders(HeaderType.None)})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
