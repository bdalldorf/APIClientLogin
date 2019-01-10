
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { ID } from '@datorama/akita';
import { SessionStore } from './session.store';
import { createSessionState, SessionState } from '../models/session-state.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStore: SessionStore) { }
  updateFilter(filter: VISIBILITY_FILTER) {
    this.sessionStore.updateRoot({
      ui: {
        filter
      }
    });
  }


  complete({ id }: SessionState) {
    this.sessionStore.update(id, {
    });
  }

  login(sessionState: SessionState) {
    this.sessionStore.add(sessionState);
  }

  // logout(id: ID) {
  //  this.sessionStore.remove(id);
  // }

  logout() {
    this.sessionStore.remove();
  }


  delete(id: ID) {
    this.sessionStore.remove(id);
  }

}
