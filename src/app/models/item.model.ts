import { ID } from '@datorama/akita';

export interface Item {
    id: ID;
    itemname: string;
    itemprice: number;
}

export function creatItem({
  id = null,
  itemname = '',
  itemprice = 0.00
}: Partial<Item>) {
  return {
    id,
    itemname,
    itemprice
  } as Item;
}
