import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
