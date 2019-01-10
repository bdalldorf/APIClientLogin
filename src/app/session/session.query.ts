import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionStore, State } from './session.store';
import { SessionState } from '../models/session-state.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends QueryEntity<State, SessionState> {

  isLoggedIn$ = this.select(state => toBoolean(state.fingerprint));
  userName$ = this.select(state => state.user.userName);
  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getSnapshot().fingerPrint);
  }
}
