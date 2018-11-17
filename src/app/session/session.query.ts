import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';

import { SessionStore } from './session.store';
import { SessionState } from '../models/session-state.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select(state => toBoolean(state.token));
  userName$ = this.select(state => state.user.userName);

  constructor(protected store: SessionStore) {
   super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getSnapshot().token);
  }
}
