import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add more reducers here as your app grows
  },
});

export default store;