import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    seconds: 0,
    isActive: false,
  };

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
      startTimer(state) {
        state.isActive = true;
      },
      stopTimer(state) {
        state.isActive = false;
      },
      resetTimer(state) {
        state.seconds = 0.00;
      },
      incrementTimer(state) {
        if (state.isActive) {
          state.seconds += 0.01;
        }
      },
    },
  });

  export const { startTimer, stopTimer, resetTimer, incrementTimer } = timerSlice.actions;
  export default timerSlice.reducer;