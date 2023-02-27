import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  value: 5,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state, action) {
      state.value = state.value - action.payload;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
