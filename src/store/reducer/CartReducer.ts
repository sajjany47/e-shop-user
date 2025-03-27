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
      state.product = action.payload;
      state.cartNumber = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
