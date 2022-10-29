import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login } from "../../model";

interface LogNow {
  loginList: Login[];
  registrato: boolean;
}

const initialState: LogNow = {
  loginList: [],
  registrato: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAdded: (state, action: PayloadAction<string>) => {
      state.loginList = [
        ...state.loginList,
        {
          id: state.loginList.length,
          username: action.payload,
          mail: action.payload,
          password: action.payload,
        },
      ];
    },
  },
});

export const { loginAdded } = loginSlice.actions;
export default loginSlice.reducer;
