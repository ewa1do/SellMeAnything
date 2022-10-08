import { ProductResponse } from '@/models';

export enum CartActionType {
  ADD_NEW_ITEM = 'NEW_ITEM',
  LOAD_ACTIVE_PRODUCT = 'PRODUCT_LOADED',
}

export interface State {
  items: ProductPayload[];
  activeProduct: ProductResponse;
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

export interface LoadActiveProduct {
  type: CartActionType.LOAD_ACTIVE_PRODUCT;
  payload: ProductResponse;
}

export type CartAction = AddNewItemAction | LoadActiveProduct;
