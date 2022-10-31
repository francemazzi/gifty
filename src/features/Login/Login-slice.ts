import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access, stat } from "fs";
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
    registrato: (state, action: PayloadAction<boolean>) => {},
    checkLogin: (state, action: PayloadAction<LoginModel>) => {
      state.loginList.map((user) =>
        user.mail === action.payload.mail &&
        user.password === action.payload.password
          ? (state.registrato = true)
          : console.log("errore accesso")
      );
    },
  },
});

export const { login, checkLogin } = loginSlice.actions;
export default loginSlice.reducer;
