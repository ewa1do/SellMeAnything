import { State, CartAction, CartActionType } from '../actions/cartActions';

const initialState: State = {
  items: [],
};

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionType.ADD_NEW_ITEM:
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };
    default:
      return state;
  }
};
