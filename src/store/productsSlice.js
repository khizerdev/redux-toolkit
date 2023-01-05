import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getPosts = createAsyncThunk("posts/getPosts", async () => {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   console.log("result", data);
//   return data.products;
// });

const initialState = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      // state.push({ id: "1" });
      if (state.length == 0) {
        action.payload.forEach((element) => {
          state.push(element);
        });
      }
    },
  },
  // extraReducers: {
  //   [getPosts.fulfilled]: (state, { payload, meta }) => {
  //     console.log(payload);
  //   },
  // },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
