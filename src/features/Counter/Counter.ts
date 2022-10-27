import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gift } from "../../model";
interface CounterState {
  value: number;
  giftList: Gift[];
}

const initialState: CounterState = {
  value: 0,
  giftList: [],
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
    giftAdded: (state, action: PayloadAction<string>) => {
      state.giftList = [
        ...state.giftList,
        {
          gift: action.payload,
          id: state.giftList.length,
          delete: false,
        },
      ];
    },
    removeGift: (state, action: PayloadAction<number>) => {
      state.giftList = state.giftList.filter(({ id }) => action.payload !== id);
    },
    modifyGift: (state, action: PayloadAction<Gift>) => {
      //sbagliata
      // state.giftList = state.giftList.map(({gift}) =>  {...gift, gift: action.payload});
      //riferimento
      // gifts.map((item) => (item.id === id ? { ...item, gift: editGift } : item))
    },
  },
});

export const { increment, decremet, giftAdded, removeGift, modifyGift } =
  counterSlice.actions;
export default counterSlice.reducer;
