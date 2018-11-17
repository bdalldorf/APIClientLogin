import { ID } from '@datorama/akita';
import { User } from './user.model';
​
export class SessionState {
    id: ID;
    user: User;
    token: string;
    fingerPrint: string;

    constructor(userName: string, token: string, fingerPrint: string) {
        this.user = new User();
        this.user.userName = userName;
        this.token = token;
        this.fingerPrint = fingerPrint;
    }
}
