import { Injectable } from '@angular/core';
import { HeadersService, HeaderType } from './headers.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoutesService } from '../../routeservice/routes.service';
import { Observable } from 'rxjs';
import { Credentials } from '../../models/credentials.models';
import { SessionService } from '../../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private sessionService: SessionService, private http: HttpClient, private headerService: HeadersService, ) { }

  public getToken(username: string, password: string): Observable<string> {
    const token: any = this.http.post(RoutesService.apiVerifyLogin, {username, password},
      { headers: this.headerService.getHeaders(HeaderType.None)}).shareReplay();
    return token;
  }

  public login(credentials: Credentials) {
    this.sessionService.login(credentials);
  }
}
