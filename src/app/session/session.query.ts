import { SessionStore, SessionState, ItemStore } from './session.store';
import { Item, creatItem } from '../models/item.model';
import { Query, EntityState } from '@datorama/akita';
​
export class SessionQuery extends Query<SessionState> {
​    item: Item;
    isLoggedIn$ = this.select(session => !!session.token);

    constructor(protected store: SessionStore, protected itemStore: ItemStore) {
        super(store);
        this.item.id = 1;
        this.item.itemname = 'test';
        this.item.itemprice = 1.00;

        this.itemStore.set({1: this.item});
  }
}
