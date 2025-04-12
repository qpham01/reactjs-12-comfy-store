import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './app-specific/features/cart/cartSlice';
import userReducer from './app-specific/features/user/userSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
