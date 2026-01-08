import { createSlice } from '@reduxjs/toolkit';

//slice ka initial
const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  //simple function jinke pas in state ka access hota hai
  //reducers ke bahar cant access which inreases data security
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;