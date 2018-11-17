import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore } from './session.store';
import { SessionState } from '../models/sessionState.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select(state => toBoolean(state.token));
  name$ = this.select(state => state.user.userName);

  constructor(protected store: SessionStore) {
   super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getSnapshot().token);
  }
}
