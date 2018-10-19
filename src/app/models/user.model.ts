import { ID } from '@datorama/akita';
​
export interface User {
  id: ID;
  firstName: string;
  lastName: string;
}
​
export function createUser({
    id = null,
    firstName = '',
    lastName = '',
}: Partial<User>) {
    return {
        id,
        firstName,
        lastName,
  };
}
