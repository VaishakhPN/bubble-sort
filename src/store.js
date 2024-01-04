import { configureStore } from "@reduxjs/toolkit";
import visualReducer from "./binarySlice";

const store = configureStore({
  reducer: {
    visual: visualReducer,
  },
});

export default store;
