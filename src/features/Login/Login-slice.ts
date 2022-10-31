import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginModel } from "../../model";

interface InitLog {
  loginList: LoginModel[];
  registrato: boolean;
}

const initialState: InitLog = {
  loginList: [],
  registrato: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // add data to loginlist of users
    login: (state, action: PayloadAction<LoginModel>) => {
      state.loginList = [
        ...state.loginList,
        {
          id: state.loginList.length,
          username: action.payload.username,
          mail: action.payload.mail,
          password: action.payload.password,
        },
      ];
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
