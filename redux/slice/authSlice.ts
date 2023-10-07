import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user?: null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isOnboarded: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isOnboarded: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AuthStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    AuthSuccess(state, action: PayloadAction<any>) {
      // state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    AuthFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setOnBoarding(state, action: PayloadAction<any>) {
      state.isOnboarded = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { AuthSuccess, AuthFailure, AuthStart, logout, setOnBoarding } =
  authSlice.actions;
export default authSlice.reducer;
