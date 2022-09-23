export enum CartActionType {
  ADD_NEW_ITEM = 'NEW_ITEM',
}

export interface State {
  items: ProductPayload[];
}

export interface ProductPayload {
  id: string;
  price: number;
  qty: number;
  stock: number;
  thumbnail: string;
  title: string;
  url?: string;
  productQty?: number;
}

export interface AddNewItemAction {
  type: CartActionType.ADD_NEW_ITEM;
  payload: ProductPayload;
}

export type CartAction = AddNewItemAction;
