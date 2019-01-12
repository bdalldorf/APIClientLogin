import { Injectable } from '@angular/core';
import { HeadersService, HeaderType } from '../services/headers.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RoutesService } from '../../routeservice/routes.service';
import { RestService } from 'src/app/restservice/rest.service';
import { SessionStore } from 'src/app/state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  sessionStore: SessionStore;
  router: Router;

  constructor(private restService: RestService
    , sessionStore: SessionStore
    , router: Router) {
      this.sessionStore = sessionStore;
      this.router = router;
    }

  public AuthenticateUser(username: string, password: string) {
    this.restService.post(RoutesService.apiVerifyLogin,
      HeaderType.None, {username, password}).subscribe(data => {
        if (this.sessionStore == null) {
          this.sessionStore  = new SessionStore();
        }
        console.log('Login Data: ' + data);
        this.sessionStore.login(data);
        this.restService.get(RoutesService.apiVerifyAntiForgeryCookie, HeaderType.None).subscribe();
    });
  }

  public logout() {
    this.restService.post(RoutesService.apiVerifyLogout, HeaderType.None, null).subscribe(d => {
    console.log('LOGGING OUT');
      this.sessionStore.logout();
      this.router.navigateByUrl('/login');
    });
  }
}
