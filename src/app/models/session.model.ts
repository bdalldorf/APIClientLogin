import { ID } from '@datorama/akita';
​
export interface Session {
    id: ID;
    firstName: string;
    lastName: string;
    token: string;
  }
​
export function createSession({
    id = null,
    firstName = '',
    lastName = '',
    token = ''
}: Partial<Session>) {
    return {
        id,
        firstName,
        lastName,
        token
  };
}
