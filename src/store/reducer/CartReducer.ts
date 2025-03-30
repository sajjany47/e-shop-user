import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  cartNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartNumber = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setCart, setProduct } = cartSlice.actions;
export default cartSlice.reducer;
