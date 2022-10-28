import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GiftsList from "../../Components/Giftslist";
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
      state.value > 0 ? state.value-- : (state.value = 0);
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
    modifyGift: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        giftList: state.giftList.map((gift, i) =>
          i === 0 ? { ...gift, gift: action.payload } : gift
        ),
      };

      // state.giftList = [
      //   ...state.giftList,
      //   { gift: state.giftList.map((gift, i) => console.log(i)) },
      // ];
      //   gifts.map((i) =>
      //   i.id === id ? { ...item, gift: dispatch(giftAdded(editGift)) } : i
      // );
    },
  },
});

export const { increment, decremet, giftAdded, removeGift, modifyGift } =
  counterSlice.actions;
export default counterSlice.reducer;
