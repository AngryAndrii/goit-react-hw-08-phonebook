import { createSlice } from '@reduxjs/toolkit';
import { signup } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLogged: false,
  isRefreshing: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signup.fulfilled, (state, action) => {});
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.contacts = action.payload;
    //     state.error = null;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.contacts = state.contacts.filter(
    //       item => item.id !== action.payload.id
    //     );
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     return {
    //       ...state,
    //       loading: false,
    //       contacts: [action.payload, ...state.contacts],
    //     };
    //   });
  },
});