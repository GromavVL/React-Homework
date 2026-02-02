import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lasName: '',
  isFavourite: false,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  
});
