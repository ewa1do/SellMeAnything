import { types } from '../types/types';

export const cartAddNewItem = (item) => {
  return {
    type: types.cartAddNewItem,
    payload: {
      title: item.title,
      thumbnail: item.url || item.thumbnail,
      price: item.price,
      id: item.id,
      stock: item.stock,
      qty: item.productQty || 1,
    },
  };
};
