import { Dispatch } from '@reduxjs/toolkit';
import { CartAction, CartActionType, ProductPayload } from '../actions/';

export const doAddNewItem = (item: ProductPayload) => {
  return (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionType.ADD_NEW_ITEM,
      payload: {
        title: item.title,
        thumbnail: item.url || item.thumbnail,
        price: item.price,
        id: item.id,
        stock: item.stock,
        qty: item.productQty || 1,
      },
    });
  };
};
