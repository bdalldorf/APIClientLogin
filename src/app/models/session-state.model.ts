import { ID, guid } from '@datorama/akita';
import { User } from './user.model';
​
export interface SessionState {
    id: ID;
    user: User;
    fingerPrint: string;
}

export function createSessionState() {
    return {
        id: guid(),
        user: new User(),
        fingerPrint: ''
    } as SessionState;
}
