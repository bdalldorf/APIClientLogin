import { Injectable } from '@angular/core';
import { HeadersService, HeaderType } from '../services/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RoutesService } from '../../routeservice/routes.service';
import { SessionService } from '../../session/session.service';
import { SessionState } from 'src/app/models/session-state.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private sessionService: SessionService, private http: HttpClient, private headerService: HeadersService, ) { }

  public AuthenticateUser(username: string, password: string): Observable<string> {
    const Authentication: any = this.http.post(RoutesService.apiVerifyLogin, {username, password},
      { headers: this.headerService.getHeaders(HeaderType.None)}).shareReplay();
    return Authentication;
  }

  public login(sessionState: SessionState) {
    this.sessionService.login(sessionState);
  }

  public logout() {
    this.sessionService.logout();
  }
}
