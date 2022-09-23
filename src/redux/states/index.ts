import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
});
