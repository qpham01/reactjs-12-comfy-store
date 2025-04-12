import { createSlice } from '@reduxjs/toolkit';

import {
  cartStorageId,
  defaultState,
  addItemAction,
  editItemAction,
  removeItemAction,
  clearCartAction,
} from './cartActions';

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem(cartStorageId);
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => addItemAction(state, action.payload),
    editItem: (state, action) => editItemAction(state, action.payload),
    removeItem: (state, action) => removeItemAction(state, action.payload),
    clearCart: (state) => clearCartAction(state),
  },
});

export const { addItem, editItem, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
