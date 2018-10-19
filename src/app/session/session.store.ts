import { Store, StoreConfig, EntityState, EntityStore,  } from '@datorama/akita';
import { Item } from '../models/item.model';
import { User} from '../models/user.model';
​
export interface SessionState {
   token: string;
   fingerPrint: string;
   sessionUser: User;
}
​
export function createInitialState(): SessionState {
  return {
    token: '',
    fingerPrint: '',
    sessionUser: null
  };
}
​
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}

export interface ItemState extends EntityState<Item> { }

@StoreConfig({ name: 'item' })
export class ItemStore extends EntityStore<ItemState, Item> {
  constructor() {
    super();
  }
}
