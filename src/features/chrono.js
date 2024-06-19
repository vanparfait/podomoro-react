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
          choosenState.runningValue =
            choosenState.runningValue + action.payload.value;
          state.displayedValue.value = choosenState.runningValue;
        } else {
          choosenState.value = choosenState.value + action.payload.value;
        }
      } else if (action.payload.type === "pause") {
        choosenState.value = choosenState.value + action.payload.value;
      }
    },
    tick(state, action) {
      if (state.session.runningValue > 0) {
        state.session.runningValue--;
        state.displayedValue.value = state.session.runningValue;
        state.displayedValue.heading = "work";
      } else if (state.pause.runningValue) {
        state.pause.runningValue--;
        state.displayedValue.value = state.pause.runningValue;
        state.displayedValue.heading = "pause";
      } else {
        state.cycles++;
        state.session.runningValue = state.session.value - 1;
        state.displayedValue.value = state.session.value - 1;
        state.displayedValue.heading = "work";
        state.pause.runningValue = state.pause.value;
      }
    },
    setUpChrono: (state, action) => {
      state.isPlaying = true;
      state.intervalId = action.payload;
    },
    resetChrono: (state, action) => {
      window.clearInterval(state.intervalId);
      state.isPlaying = false;
      state.session.runningValue = state.session.value;
      state.pause.runningValue = state.pause.value;
      state.displayedValue.value = state.session.runningValue;
      state.cycles = 0;
    },
  },
});

export function startChrono(action) {
  return function (dispatch, getState) {
    const intervalID = setInterval(() => {
      dispatch(tick());
    }, 1000);
    dispatch(setUpChrono(intervalID));
    dispatch(tick());
  };
}

export const { updateChronoValues, setUpChrono, resetChrono, tick } =
  chronoSlice.actions;
export default chronoSlice.reducer;
