// // import { configureStore } from "@reduxjs/toolkit";
// // import slicer1Reducer from "./Slice1";


// // const Store = configureStore({
// //   reducer: {
// //     slice1: slicer1Reducer,

// //  },
// // });

// // export default Store;
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./Slice1"; // ✅ points to slice1.jsx
// import Slice2Reducer from "./Slice2";

// const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//      bgcolor:Slice2Reducer,
//   },
// });

// export default store;//
//************************************************************************************************************************************** */
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./Slice1";
// import Slice2Reducer from "./Slice2";

// const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//     bgcolor: Slice2Reducer,
//   },
// });

// export default store;



//**********************************************************************8 */


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice1";
import Slice2Reducer from "./Slice2";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    bgcolor: Slice2Reducer,
  },
});

export default store;