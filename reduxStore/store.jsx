import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/reduxStore/authSlice';
import temoignageReducer from './temoignageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    temoignage: temoignageReducer,
  },
});
