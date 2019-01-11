import { Component, NgZone } from '@angular/core';
import { akitaDevtools } from '@datorama/akita';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { SessionQuery, SessionState, SessionStore,  } from 'src/app/state';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  isLoggedIn: boolean;
  userName: string;

  constructor(private ngZone: NgZone
    , sessionQuery: SessionQuery
    , private sessionStore: SessionStore
    , private router: Router
    , private authentication: AuthenticationService) {

    this.title = 'Clarity Project';
    sessionQuery.isLoggedIn$.subscribe(loggedin => this.isLoggedIn = loggedin);
    sessionQuery.loggedInUserName$.subscribe(user => this.userName = user);

    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }

  public logout(): void {
    this.sessionStore.logout();
  }
}
