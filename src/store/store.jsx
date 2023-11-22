import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./features/login";

export const store = configureStore({
  reducer: {
    Login: LoginReducer
  }
});
