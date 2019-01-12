import { Store, StoreConfig, guid  } from '@datorama/akita';
import { Injectable } from '@angular/core';

import * as storage from './storage';

export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    fingerPrint: string;
}

export interface SessionState {
    user: User | null;
}

export function createInitialState(): SessionState {
    return {
        ...storage.getSession()
    };
}

export function createSession(user: User) {
    return { ...user };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {

    constructor() {
        super(createInitialState());
    }

    login(data: User) {
        const user = createSession(data);
        this.update({ user });
        storage.saveSession({ user });
    }

    logout() {
        storage.clearSesssion();
        this.update(createInitialState());
    }
}
