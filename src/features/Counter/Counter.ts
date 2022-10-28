import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idText } from "typescript";
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
      const item = action.payload;
      console.log(item);
      //ERRORE !!!! è oggetto ma non lo apre...
      //trovare id automatico..al momento cambia solo il primo valore
      state.giftList = state.giftList.map((i) =>
        i.id === +action.payload ? { ...i, gift: action.payload } : i
      );
    },
  },
});

export const { increment, decremet, giftAdded, removeGift, modifyGift } =
  counterSlice.actions;
export default counterSlice.reducer;
