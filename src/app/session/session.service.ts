import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { SessionDataService } from './session-data.service';
import { tap } from 'rxjs/operators';
import { Credentials } from '../models/credentials.models';
import { SessionState } from '../models/sessionState.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private sessionStore: SessionStore, private sessionDataService: SessionDataService) { }

  login(credentials: Credentials) {
      const session: SessionState = new SessionState();
      session.user = new User();
      session.user.userName = credentials.username;
      session.token = credentials.token;
      session.fingerPrint = credentials.fingerPrint;

      return this.sessionStore.login(session);
  }

  logout() {
    this.sessionStore.logout();
  }
}
