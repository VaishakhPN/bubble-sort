import { createSlice } from "@reduxjs/toolkit";

const visualSlice = createSlice({
  name: "visual",
  initialState: {
    array: [],
    userInput: "",
    selected: 0,
    time: null,
  },
  reducers: {
    setArray: (state, action) => {
      state.array = action.payload;
    },
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setTime: (state, action) => {
        state.time = action.payload;
      },
  },
});

export const { setArray, setUserInput, setSelected, setTime } = visualSlice.actions;
export default visualSlice.reducer;
