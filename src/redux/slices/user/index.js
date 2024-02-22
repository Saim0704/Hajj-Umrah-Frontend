import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  userData: null,
  basic_Details: null,
  id: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.isLoggedIn = payload.isLoggedIn;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setBasic_Details: (state, action) => {
      state.basic_Details = action.payload;
    }
  },
});

export const { setToken, setUserData, setBasic_Details } = user.actions;

export default user.reducer;
