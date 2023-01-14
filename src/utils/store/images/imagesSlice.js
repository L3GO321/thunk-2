import { createSlice } from '@reduxjs/toolkit';

export const preloadedState = JSON.parse(localStorage.getItem('images')) || []

export const imagesSlice = createSlice({
  name: 'images',
  initialState: [],

  reducers: {
    addImage: (state, action) => { state.unshift(action.payload) },
  },
});

export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;
