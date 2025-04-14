import { configureStore } from "@reduxjs/toolkit";
import payinPayoutReducer from "./payinPayoutSlice";
import sidebarReducer  from "./sidebarSlice"

export const store = configureStore({
  reducer: {
    payMode: payinPayoutReducer,
    sidebar: sidebarReducer,
  },
});
