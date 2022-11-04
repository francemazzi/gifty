import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { idText } from "typescript";
import GiftsList from "../../Components/Giftslist";
import { Gift } from "../../model";

//firebase
import GiftDataService from "../../services/gift.services";

//fetch data from firebase --> non fnziona
// const GiftGroup = () => {
//   const [gifts, setGifts] = useState([]);
//   useEffect(() => {
//     getGiftGroup();
//   }, []);
//   const getGiftGroup = async () => {
//     const data = await GiftDataService.getAllGifts();
//     console.log(data.docs);
//   };
// };

interface CounterState {
  value: number;
  giftList: Gift[];
  budget: number;
  error: string;
}

const initialState: CounterState = {
  value: 0,
  giftList: [],
  budget: 0,
  error: "",
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
    giftAdded: (state, action: PayloadAction<Gift>) => {
      state.giftList = [...state.giftList, action.payload];
      console.log(state.giftList);
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
    budgetAdd: (state, action: PayloadAction<number>) => {
      state.budget = action.payload;
      console.log(state.budget);
    },
  },
});

export const {
  increment,
  decremet,
  giftAdded,
  removeGift,
  modifyGift,
  budgetAdd,
} = counterSlice.actions;
export default counterSlice.reducer;
