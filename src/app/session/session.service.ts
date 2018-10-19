import { SessionStore } from './session.store';

export class SessionService {
  constructor(private sessionStore: SessionStore) {}
​
  updateUserName(name: string) {
    this.sessionStore.update(state => ({
        sessionUser: {
        ...state.sessionUser,
        name
    }
    }));
  }
}
