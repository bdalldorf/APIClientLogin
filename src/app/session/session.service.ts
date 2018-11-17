import { Injectable } from '@angular/core';

import { SessionStore } from './session.store';
import { SessionState } from '../models/session-state.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private sessionStore: SessionStore) { }

  login(sessionState: SessionState) {
      this.sessionStore.login(sessionState);
  }

  logout() {
    this.sessionStore.logout();
  }
}
