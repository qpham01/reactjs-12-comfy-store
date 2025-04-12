import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './app-specific/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
