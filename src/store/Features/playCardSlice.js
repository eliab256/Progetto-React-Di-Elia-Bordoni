import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false
};

const playCardSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    stop: (state) => {
        state.isPlaying = false;
      }
    
  }
});

export const { play, stop } = playCardSlice.actions;

export default playCardSlice.reducer;