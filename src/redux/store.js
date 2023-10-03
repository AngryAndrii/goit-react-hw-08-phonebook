import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlise';
// import contactsReducer from './contactsSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // filter: filterReducer,
    // contacts: contactsReducer,
  },
});
