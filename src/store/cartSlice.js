import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === action.payload.product.id) {
          state.cart[i] = action.payload;
          return;
        }
      }
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log(`${action.payload.product.id} ${state.cart[0].product.id}`);
      //   console.log(state.cart.product.id, action.payload.product.id);
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload.product.id
      );
    },
    addQuantity: (state, action) => {
      console.log(action.payload);
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === action.payload.product.id) {
          state.cart[i].quantity = action.payload.quantity + 1;
          return;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      console.log(action.payload);
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].product.id === action.payload.product.id) {
          if (state.cart[i].quantity > 1) {
            state.cart[i].quantity = action.payload.quantity - 1;
          }
          return;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
