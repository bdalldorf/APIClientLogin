import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import * as storage from './storage';
import { SessionState } from '../models/sessionState.model';

export function createInitialCredentialsState(): SessionState {
  return {
    user: null,
    token: null,
    fingerPrint: null,
    ...storage.getSession(),
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialCredentialsState());
  }

  login(sessionState: SessionState) {
    this.update(sessionState);
    storage.saveSession(sessionState);
  }

  logout() {
    storage.clearSesssion();
    this.update(createInitialCredentialsState());
  }
}
