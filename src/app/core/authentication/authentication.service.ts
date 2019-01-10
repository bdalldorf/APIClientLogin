import { Injectable } from '@angular/core';
import { HeadersService, HeaderType } from '../services/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RoutesService } from '../../routeservice/routes.service';
import { SessionService } from '../../session/session.service';
import { SessionState } from 'src/app/models/session-state.model';
import { RestService } from 'src/app/restservice/rest.service';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private restService: RestService
    , private sessionService: SessionService
    , private http: HttpClient,
     private headerService: HeadersService, ) { }

  public AuthenticateUser(username: string, password: string): Observable<string> {
    const Authentication: any = this.restService.post(RoutesService.apiVerifyLogin, HeaderType.None, {username, password});
    return Authentication;
  }

  public login(sessionState: SessionState) {
    this.sessionService.login(sessionState);
  }

   public logout() {
    this.sessionService.logout();
   }
}
