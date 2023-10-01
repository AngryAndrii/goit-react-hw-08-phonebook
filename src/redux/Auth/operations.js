import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      const resp = await axios.post('/users/signup', body);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
