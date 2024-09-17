import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  activeCard: null,
};

const playCardSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    play: (state, action) => {
      state.isPlaying = true;
      state.activeCard = action.payload;
    },
    stop: (state) => {
        state.isPlaying = false;
        state.activeCard = null;
      }
    
  }
});

export const { play, stop } = playCardSlice.actions;

export default playCardSlice.reducer;