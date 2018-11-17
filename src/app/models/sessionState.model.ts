import { ID } from '@datorama/akita';
import { User } from './user.model';
​
export class SessionState {
    id: ID;
    user: User;
    token: string;
    fingerPrint: string;
}
