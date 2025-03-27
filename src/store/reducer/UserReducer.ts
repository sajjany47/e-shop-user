import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { data: {}, token: { accessToken: "", refreshToken: "" } },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      state.token = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
