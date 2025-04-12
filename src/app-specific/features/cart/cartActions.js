import { toast } from 'react-toastify';

const taxRate = 0.1;

export const defaultState = {
  cartItems: [],
  itemCount: 0,
  itemCost: 0,
  shippingCost: 500,
  taxCost: 0,
  totalCost: 0,
};

export const cartStorageId = 'cart';

const calculateTotals = (state) => {
  state.taxCost = state.itemCost * taxRate;
  state.totalCost = state.itemCost + state.taxCost + state.shippingCost;
  localStorage.setItem(cartStorageId, JSON.stringify(state));
};

export const addItemAction = (state, payload) => {
  const { product } = payload;
  const item = state.cartItems.find((item) => item.cartId === product.cartId);
  if (item) {
    item.amount += product.amount;
  } else {
    state.cartItems.push(product);
  }
  state.itemCount += product.amount;
  state.itemCost += product.price * product.amount;

  calculateTotals(state);
  toast.success('Item added to cart');
};

export const editItemAction = (state, payload) => {
  const { cartId, amount } = payload;
  const item = state.cartItems.find((item) => item.cartId === cartId);
  if (item) {
    var diff = amount - item.amount;
    state.itemCount += diff;
    state.itemCost += diff * item.price;
    item.amount = amount;
    calculateTotals(state);
    toast.success('Item updated in cart');
  }
};

export const removeItemAction = (state, payload) => {
  const { cartId } = payload;
  const product = state.cartItems.find((item) => item.cartId === cartId);
  if (product) {
    state.cartItems = state.cartItems.filter((item) => item.cartId !== cartId);
    state.itemCount -= product.amount;
    state.itemCost -= product.price * product.amount;

    calculateTotals(state);
    toast.success('Item removed from cart');
  }
};

export const clearCartAction = (state) => {
  localStorage.setItem(cartStorageId, JSON.stringify(defaultState));
  return defaultState;
};
