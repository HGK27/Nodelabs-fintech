import { createSlice } from "@reduxjs/toolkit";

const tokenFromStorage = localStorage.getItem("accessToken");

const initialState = {
  token: tokenFromStorage || null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state,action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  }
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
