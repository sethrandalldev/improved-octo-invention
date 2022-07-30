import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(state);
      state.projects = [...state.projects, action.payload];
    },
  },
});

export const { add } = projectsSlice.actions;

export default projectsSlice.reducer;
