import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ThemeState {
  isDark: boolean;
}

const initialThemeState: ThemeState = { isDark: false };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setIsDarkTheme: (state, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
  },
});

export const { setIsDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectIsDark = (state: RootState) => state.themeReducer.isDark;
