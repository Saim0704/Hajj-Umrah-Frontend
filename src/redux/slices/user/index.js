import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  userData: null,
  basic_Details: null,
  flight_Details: null,
  gallery: null,
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
    },
    setFlight_Details: (state, action) => {
      state.flight_Details = action.payload
    },
    setGallery: (state, action) => {
      state.gallery = action.payload
    }
  },
});

export const { setToken, setUserData, setBasic_Details, setFlight_Details, setGallery } = user.actions;

export default user.reducer;
