import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  name: string;
  image: string;
  email: string;
  loggedIn: boolean;
}

const initialUserState: UserState = {
  name: "",
  image: "",
  email: "",
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user-detials",
  initialState: initialUserState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.loggedIn = action.payload.loggedIn;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;

export const selectUserData = (state: RootState) => state.userReducer;
