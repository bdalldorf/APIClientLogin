import { SessionState } from '../models/session-state.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { Injectable } from '@angular/core';

import * as storage from './storage';


export interface State extends EntityState<SessionState> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'SessionState' })
export class SessionStore extends EntityStore<State, SessionState> {
  constructor() {
    super();
  }
}
