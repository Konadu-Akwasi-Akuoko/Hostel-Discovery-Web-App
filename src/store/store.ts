import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";
import { userApiSlice } from "./api/userApiSlice";

export const store = configureStore({
  reducer: {
    themeReducer,
    userReducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
});

// export a type named RootState that represents the state of the store
export type RootState = ReturnType<typeof store.getState>;

// export a type named AppDispatch that represents the dispatch function of the store
export type AppDispatch = typeof store.dispatch;
