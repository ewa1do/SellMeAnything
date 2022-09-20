import { types } from '../types/types';

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartAddNewItem:
      const totalPrice =
        action.payload.price * action.payload.qty;

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, totalPrice },
        ],
      };
    default:
      return state;
  }
};
