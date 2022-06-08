import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserData = {
  userName: string;
  userClass: string;
};

export interface UserDataState {
  userData: UserData;
}

const initial: UserDataState = {
  userData: { userName: "", userClass: "" },
};

const userSlice = createSlice({
  name: "userData",
  initialState: initial,
  reducers: {
    setUserData: (
      state: UserDataState,
      { payload }: PayloadAction<UserData>
    ) => {
      state.userData = payload;
    },
    resetUserData: (state: UserDataState) => {
      state.userData = { userName: "", userClass: "" };
    },
  },
});

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
