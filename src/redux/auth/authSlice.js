import { createSlice } from '@reduxjs/toolkit';


const authInitialState = {
  user: { login: null, email: null},
  isLoggedIn: false,
	isLoading: false,
	isAuthError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
	reducers: {
    getRigistrProgress(state, _action) {
      state.isLoading = true;
    },
    getRigistrSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    getRigistrError(state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    getLoginProgress(state, _action) {
      state.isLoading = true;
    },
    getLoginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isAuthError = false;
      state.isLoading = false;
    },
    getLoginError(state, _action) {
      state.isAuthError = true;
      state.isLoading = false;
    },
    logOut(state, _action) {
      state.user = { login: null, email: null };
      state.isLoggedIn = false;
      state.isLoading = false;
    },
	},
});


export const {
  getRigistrProgress, 
  getRigistrSuccess, 
  getRigistrError, 
  getLoginProgress, 
  getLoginSuccess, 
  getLoginError,
  logOut,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
