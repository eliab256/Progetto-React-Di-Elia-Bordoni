import { createSlice } from '@reduxjs/toolkit';

export const statusCheckSlice = createSlice({
  name: 'status',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetStatus: (state) => {
      state.loading = false;
      state.error = null;
    }
  },
});

export const { setLoading, setError, resetStatus } = statusCheckSlice.actions;

export default statusCheckSlice.reducer;