import { types } from '../types/types';

const initialState = {
  items: [],
  // total: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.cartAddNewItem:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
