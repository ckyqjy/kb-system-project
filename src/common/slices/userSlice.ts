import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserData = {
  [key: string]: string;
};

export interface UserDataState {
  userDataList: UserData;
}

const initial: UserDataState = {
    userDataList: {
    '이병학': '테스트',
  }
};

const userSlice = createSlice({
  name: 'userData',
  initialState: initial,
  reducers: {
    setUserData: (
      state: UserDataState,
      { payload }: PayloadAction<UserData>
    ) => {
      state.userDataList = payload;
    },
    resetUserData: (state: UserDataState) => {
      state.userDataList = {};
    }
  }
});

export const { setUserData, resetUserData } = userSlice.actions;

export default userSlice.reducer;
