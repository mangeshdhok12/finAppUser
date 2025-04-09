import { createSlice } from "@reduxjs/toolkit";

const payinPayoutSlice = createSlice({
  name: "payMode",
  initialState: { mode: "payout" }, // Default to "payout"
  reducers: {
    toggleMode: (state, action) => {
      state.mode = action.payload; // "payin" or "payout"
    },
  },
});

export const { toggleMode } = payinPayoutSlice.actions;
export default payinPayoutSlice.reducer;
