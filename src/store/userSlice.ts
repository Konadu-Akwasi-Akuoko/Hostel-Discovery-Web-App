import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  id?: number;
  managerId?: number;
  isManager: boolean;
  name: string;
  image: string;
  email: string;
  isLoggedIn: boolean;
}

const initialUserState: UserState = {
  name: "",
  image: "",
  email: "",
  isLoggedIn: false,
  isManager: false,
};

const userSlice = createSlice({
  name: "user-detials",
  initialState: initialUserState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.id = action.payload.id;
    },
    setIsManger: (state, action: PayloadAction<{ isManager: boolean }>) => {
      state.isManager = action.payload.isManager;
    },
    setManagerId: (state, action: PayloadAction<{ managerId: number }>) => {
      state.managerId = action.payload.managerId;
    },
  },
});

export const { setUserData, setIsManger, setManagerId } = userSlice.actions;

export default userSlice.reducer;

export const selectUserData = (state: RootState) => state.userReducer;

export const selectUserId = (state: RootState) => state.userReducer.id;

export const selectIsManager = (state: RootState) => state.userReducer.isManager;
