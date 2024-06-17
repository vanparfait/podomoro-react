import { configureStore } from "@reduxjs/toolkit";
import { start } from "./features/chrono";
//import chrono from "./features/chrono";

export const store = configureStore({
  reducer: {
    start,
  },
});
