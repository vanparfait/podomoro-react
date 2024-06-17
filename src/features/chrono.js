import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: {
    value: 1500,
    runningValue: 1500,
  },
  pause: {
    value: 300,
    runningValue: 300,
  },
  isPlaying: false,
  intervalId: undefined,
  cycles: 0,
  displayedValue: {
    value: 1500,
    heading: "work",
  },
};

export const chronoSlice = createSlice({
  name: "chrono",
  initialState,
  reducers: {
    // chrono: (state) => {
    //   return state;
    // },
  },
});

export const { chrono } = chronoSlice.actions;
export default chronoSlice.reducer;
