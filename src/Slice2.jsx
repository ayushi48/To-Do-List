// //this slice is for background changer 

// import { createSlice } from "@reduxjs/toolkit"; 

// const reactSlicer = createSlice({
//   name: "slice2",
//   initialState: {
//     bg: "bg-red-600",
//     bg_navbar:"bg-red-600",
//     bg_taskbox:"bg-red-600",
//   },
//   reducers: {
//     BackgroundChanger: (state, action) => {
//       state.bg = action.payload;
//     },
//      NavbarBackgroundChanger: (state, action) => {
//       state.bg_navbar = action.payload;
//     },
//         TaskBackgroundChanger: (state, action) => {
//       state.bg_taskbox = action.payload;
//     },
//   },
// });

// export const { BackgroundChanger ,NavbarBackgroundChanger,TaskBackgroundChanger} = reactSlicer.actions;
// export default reactSlicer.reducer;
//********************************************************************************************************************************************* */

// import { createSlice } from "@reduxjs/toolkit";

// const reactSlicer = createSlice({
//   name: "slice2",
//   initialState: {
//     bg: "bg-black",
//     bg_navbar: "bg-black",
//     bg_taskbox: "bg-black",
//   },
//   reducers: {
//     BackgroundChanger: (state, action) => {
//       state.bg = action.payload;
//     },
//     NavbarBackgroundChanger: (state, action) => {
//       state.bg_navbar = action.payload;
//     },
//     TaskBackgroundChanger: (state, action) => {
//       state.bg_taskbox = action.payload;
//     },
//   },
// });

// export const {
//   BackgroundChanger,
//   NavbarBackgroundChanger,
//   TaskBackgroundChanger,
// } = reactSlicer.actions;
// export default reactSlicer.reducer;



///***************************************************************************************************************************************************
//  */



import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
  name: "slice2",
  initialState: {
    bg: "bg-gray-200",
    bg_navbar: "bg-gray-200",
    // bg_taskbox: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    bg_taskbox: "bg-yellow-100",

  },
  reducers: {
    BackgroundChanger: (state, action) => {
      state.bg = action.payload;
    },
    NavbarBackgroundChanger: (state, action) => {
      state.bg_navbar = action.payload;
    },
    TaskBackgroundChanger: (state, action) => {
      state.bg_taskbox = action.payload;
    },
  },
});

export const {
  BackgroundChanger,
  NavbarBackgroundChanger,
  TaskBackgroundChanger,
} = reactSlicer.actions;
export default reactSlicer.reducer;
