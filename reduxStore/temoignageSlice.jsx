import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temoignages: [],
};

const temoignageSlice = createSlice({
  name: 'temoignage',
  initialState,
  reducers: {
    addTemoignage: (state, action) => {
      state.temoignages.push(action.payload);
    },
    updateTemoignage: (state, action) => {
      const index = state.temoignages.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.temoignages[index] = action.payload;
      }
    }
  },
});

export const { addTemoignage, updateTemoignage } = temoignageSlice.actions;
export default temoignageSlice.reducer;
