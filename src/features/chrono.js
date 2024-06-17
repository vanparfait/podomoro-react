import { createSlice } from "@reduxjs/toolkit";

const initialeState = {
  time: 0,
  isRunning: false,
};

export const chronoSlice = createSlice({
  name: "chrono",
  initialeState,
  reducers: {
    start: (state) => {
      state.isRunning = true;
    },
  },
});

export const { start } = chronoSlice.actions;
export default chronoSlice.reducer;
