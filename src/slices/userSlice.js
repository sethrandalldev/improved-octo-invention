import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  firstName: null,
  password: null,
  joined: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.email = action.payload?.email;
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
      state.joined = action.payload?.joined;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
