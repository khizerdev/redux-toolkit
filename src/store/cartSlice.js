import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        exist.qty++;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );

      state.cart = removeItem;
    },
    addQty(state, action) {
      let product = state.cart.find((item) => item.id === action.payload);
      product.qty++;
    },
    subQty(state, action) {
      let product = state.cart.find((item) => item.id === action.payload);
      if (product.qty == 1) {
        return;
      }
      product.qty--;
    },
  },
});

export const { addToCart, removeFromCart, addQty, subQty } = cartSlice.actions;

export default cartSlice.reducer;
