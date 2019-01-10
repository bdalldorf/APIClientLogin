import { ID, guid } from '@datorama/akita';
import { User } from './user.model';
​
export interface SessionState {
    id: ID;
    user: User;
    fingerPrint: string;
}

export function createSessionState({ user }: Partial<SessionState>) {
    return {
        id: guid(),
        user,
        fingerPrint: guid()
    } as SessionState;
}
