import { configureStore } from "@reduxjs/toolkit";
import payinPayoutReducer from "./payinPayoutSlice";

export const store = configureStore({
  reducer: {
    payMode: payinPayoutReducer,
  },
});
