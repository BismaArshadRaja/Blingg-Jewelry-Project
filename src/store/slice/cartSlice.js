import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);
      existingItem 
        ? existingItem.quantity += 1
        : state.cartItems.push({ ...item,
          price: parseFloat(item.price) || 0,
           quantity: 1 });
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity === 1
          ? state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
          : item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    }
  }
});

export const { 
  addToCart,
  toggleCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;