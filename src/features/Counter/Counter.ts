import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//conta budget
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decremet(state) {
      state.value--;
    },
    //inserire input string gift
  },
});
export const { increment, decremet } = counterSlice.actions;
export default counterSlice.reducer;
