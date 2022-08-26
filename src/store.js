import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export default store;
