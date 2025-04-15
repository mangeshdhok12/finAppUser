
import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return action.payload; // Store the entire response in Redux
    },
  },
});

export const { setUser } = userDataSlice.actions;
export default userDataSlice.reducer;