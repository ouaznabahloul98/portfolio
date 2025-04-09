import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // liste des utilisateurs inscrits
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const userExists = state.users.some(
        (u) => u.email === action.payload.email
      );
      if (!userExists) {
        state.users.push(action.payload);
      }
    },
    login: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
