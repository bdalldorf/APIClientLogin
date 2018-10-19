import { ID, HashMap } from '@datorama/akita';
​
export interface EntityState<T> {
    entities: HashMap<T>;
    ids: ID[];
    loading: boolean;
    error: any;
  }
​
export function createEntityState({
    entities = null,
    ids = [],
    loading = false,
    error = null
}: Partial<EntityState<any>>) {
    return {
        entities,
        ids,
        loading,
        error
  };
}
