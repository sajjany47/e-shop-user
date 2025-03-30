import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, token: { accessToken: "", refreshToken: "" } },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setData, setToken } = userSlice.actions;
export default userSlice.reducer;
