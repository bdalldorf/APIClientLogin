import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { SessionState } from '../models/session-state.model';

import * as storage from './storage';

export function createInitialCredentialsState(): SessionState {
  return {
    user: null,
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
