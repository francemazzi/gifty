import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/Counter";
import loginReducer from "../features/Login/Login-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
