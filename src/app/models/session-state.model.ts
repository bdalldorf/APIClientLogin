import { ID } from '@datorama/akita';
import { User } from './user.model';
​
export class SessionState {
    id: ID;
    user: User;
    fingerPrint: string;

    constructor(userName: string, fingerPrint: string) {
        this.user = new User();
        this.user.userName = userName;
        this.fingerPrint = fingerPrint;
    }
}
