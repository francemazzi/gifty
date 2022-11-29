import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/Counter";

import loginReducer from "../features/Login/Login-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
// const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    // persistedReducer,
    counter: counterReducer,
    login: loginReducer,
    // middleware: [thunk],
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
