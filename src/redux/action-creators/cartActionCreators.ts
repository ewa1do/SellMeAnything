import { Dispatch } from '@reduxjs/toolkit';
import { CartAction, CartActionType } from '@/redux';
import { ProductResponse } from '@/models';

export const doAddNewItem = (product: ProductResponse) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.ADD_NEW_ITEM,
      payload: {
        ...product,
        qty: product.qty || 1,
      },
    });
  };
};

export const loadActiveProduct = (product: ProductResponse) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.LOAD_ACTIVE_PRODUCT,
      payload: product,
    });
  };
};
