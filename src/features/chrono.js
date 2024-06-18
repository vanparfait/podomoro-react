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
    updateChronoValues: (state, action) => {
      const choosenState = state[action.payload.type];

      if (choosenState.value + action.payload.value === 0) return;

      if (action.payload.type === "session") {
        if (!state.isPlaying) {
          choosenState.value = choosenState.value + action.payload.value;
          choosenState.runningValue = choosenState.value + action.payload.value;
          state.displayedValue.value = choosenState.value;
        } else {
          choosenState.value = choosenState.value + action.payload.value;
        }
      } else if (action.payload.type === "pause") {
        choosenState.value = choosenState.value + action.payload.value;
      }
    },
  },
});

export const { updateChronoValues } = chronoSlice.actions;
export default chronoSlice.reducer;
