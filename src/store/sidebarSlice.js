
// const sidebarSlice = createSlice({
//     name: 'sidebar',
//     initialState: {
//       isExpanded: false,
//     },
//     reducers: {
//       toggleSidebar: (state) => {
//         state.isExpanded = !state.isExpanded;
//       },
//       expandSidebar: (state) => {
//         state.isExpanded = true;
//       },
//       collapseSidebar: (state) => {
//         state.isExpanded = false;
//       },
//     },
//   });

import { createSlice } from "@reduxjs/toolkit";

  
//   export const { toggleSidebar, expandSidebar, collapseSidebar } = sidebarSlice.actions;
  
// export default sidebarSlice.reducer;

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isExpanded: false,
    isHovered: false, // 👈 add this line
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    expandSidebar: (state) => {
      state.isExpanded = true;
    },
    collapseSidebar: (state) => {
      state.isExpanded = false;
    },
    setSidebarHover: (state, action) => {
      state.isHovered = action.payload; // 👈 add this reducer
    },
  },
});

export const {
  toggleSidebar,
  expandSidebar,
  collapseSidebar,
  setSidebarHover, // 👈 export the action
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
