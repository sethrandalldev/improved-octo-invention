import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { update } = userSlice.actions;

export default userSlice.reducer;
