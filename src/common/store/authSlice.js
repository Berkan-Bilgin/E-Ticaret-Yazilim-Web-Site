import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// Initial state
const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
};

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.user = jwtDecode(action.payload); // Token'ı çözümleyip kullanıcı bilgilerini alır
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// Action'ları dışa aktar
export const { loginSuccess, logout } = authSlice.actions;

// Reducer'ı dışa aktar
export default authSlice.reducer;
