import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlise';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
