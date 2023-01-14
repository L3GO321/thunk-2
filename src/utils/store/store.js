import { configureStore } from '@reduxjs/toolkit';
import imagesReducer, { preloadedState } from './images/imagesSlice';

export const store = configureStore({
  reducer: imagesReducer,
  preloadedState
});
