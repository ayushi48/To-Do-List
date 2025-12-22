

// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { BackgroundChanger } from "./Slice2";
// // // // import './index.css';

// // // const colors = [
// // //   "bg-pink-200", "bg-blue-200", "bg-purple-200",
// // //   "bg-red-400", "bg-green-300", "bg-yellow-200",
// // //   "bg-cyan-200", "bg-orange-200", "bg-lime-300",
// // // ];

// // // const Setting = () => {
// // //   const dispatch = useDispatch();
// // //   const bg = useSelector((state) => state.bgcolor.bg);
// // //   const [showPalette, setShowPalette] = useState(false);

// // //   const handleChange = (color) => {
// // //     dispatch(BackgroundChanger(color));
// // //     setShowPalette(false);
// // //   };

// // //   return (
// // //     <div className={`${bg} min-h-screen p-4 transition-all`}>
// // //       <button
// // //         onClick={() => setShowPalette((prev) => !prev)}
// // //         className="bg-white text-black px-4 py-2 rounded shadow"
// // //       >
// // //         Settings
// // //       </button>

// // //       {showPalette && (
// // //         <div className="mt-2 p-3 bg-white text-black rounded shadow-md grid grid-cols-4 gap-2 w-[300px] h-[220px] border">
// // //           {colors.map((color) => (
// // //             <div
// // //               key={color}
// // //               className={`${color} w-8 h-8 rounded cursor-pointer border hover:scale-110 transition-transform`}
// // //               onClick={() => handleChange(color)}
// // //               title={color}
// // //             ></div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Setting;



// // import React from "react";
// // import { useDispatch } from "react-redux";
// // import { BackgroundChanger } from "./Slice2";

// // const colors = [
// //   "bg-pink-200", "bg-blue-200", "bg-purple-200",
// //   "bg-red-400", "bg-green-300", "bg-yellow-200",
// //   "bg-cyan-200", "bg-orange-200", "bg-lime-300",
// // ];

// // const Setting = () => {
// //   const dispatch = useDispatch();

// //   const handleChange = (color) => {
// //     dispatch(BackgroundChanger(color));
// //   };

// //   return (
// //     <div className="mt-4 p-3 bg-white text-black rounded shadow-md grid grid-cols-4 gap-2 w-[300px] border">
// //       {colors.map((color) => (
// //         <div
// //           key={color}
// //           className={`${color} w-8 h-8 rounded cursor-pointer border hover:scale-110 transition-transform`}
// //           onClick={() => handleChange(color)}
// //           title={color}
// //         ></div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Setting;



// import React from "react";
// import { useDispatch } from "react-redux";
// import { BackgroundChanger, NavbarBackgroundChanger, TaskBackgroundChanger } from "./Slice2";

// const colors = [
//   "bg-pink-200", "bg-blue-200", "bg-purple-200",
//   "bg-red-400", "bg-green-300", "bg-yellow-200",
//   "bg-cyan-200", "bg-orange-200", "bg-lime-300",
// ];

// const Setting = ({ type = "bg" }) => {
//   const dispatch = useDispatch();

//   const handleChange = (color) => {
//     if (type === "bg") dispatch(BackgroundChanger(color));
//     else if (type === "navbar") dispatch(NavbarBackgroundChanger(color));
//     else if (type === "taskbox") dispatch(TaskBackgroundChanger(color));
//   };

//   return (
//     <div className="mt-4 p-3 bg-white text-black rounded shadow-md grid grid-cols-4 gap-2 w-[300px] border">
//       {colors.map((color) => (
//         <div
//           key={color}
//           className={`${color} w-8 h-8 rounded cursor-pointer border hover:scale-110 transition-transform`}
//           onClick={() => handleChange(color)}
//           title={color}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Setting;

//*****************************************************************************************************************************************88 */
// import React from "react";
// import { useDispatch } from "react-redux";
// import {
//   BackgroundChanger,
//   NavbarBackgroundChanger,
//   TaskBackgroundChanger,
// } from "./Slice2";

// const colors = [
//   "bg-pink-200", "bg-blue-200", "bg-purple-200",
//   "bg-red-400", "bg-green-300", "bg-yellow-200",
//   "bg-cyan-200", "bg-orange-200", "bg-lime-300",
// ];

// const Setting = ({ type = "bg" }) => {
//   const dispatch = useDispatch();

//   const handleChange = (color) => {
//     if (type === "bg") dispatch(BackgroundChanger(color));
//     else if (type === "navbar") dispatch(NavbarBackgroundChanger(color));
//     else if (type === "taskbox") dispatch(TaskBackgroundChanger(color));
//   };

//   return (
//     <div className="mt-4 p-3 bg-white text-black rounded shadow-md grid grid-cols-4 gap-2 w-[300px] border">
//       {colors.map((color) => (
//         <div
//           key={color}
//           className={`${color} w-8 h-8 rounded cursor-pointer border hover:scale-110 transition-transform`}
//           onClick={() => handleChange(color)}
//           title={color}
//         ></div>
//       ))}
//     </div>
//   );
// };

// export default Setting;



////////8888888888888****************************************************************************************************************************************88

import React from "react";
import { useDispatch } from "react-redux";
import {
  BackgroundChanger,
  NavbarBackgroundChanger,
  TaskBackgroundChanger,
} from "./Slice2";

const colors = [
   "bg-pink-100",
      "bg-pink-200",
      "bg-pink-300",
      "bg-pink-400",
     
     "bg-blue-100",
     "bg-blue-200",
     "bg-blue-300",
    
     

    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
     "bg-yellow-100",
     "bg-yellow-200",
     "bg-yellow-300",
   ,
     "bg-yellow-500",
     
     
     "bg-purple-300",
     "bg-purple-400",
    
    "bg-rose-100",
    "bg-rose-200",
    "bg-rose-300",
    "bg-rose-400",
    "bg-rose-500",
    "bg-rose-600",
    "bg-rose-700",
     "bg-orange-300",
     "bg-teal-300",
    "bg-indigo-100",
    "bg-amber-100",
 
    "bg-amber-300",    
        
    "bg-amber-500",    
    "bg-amber-600",    


];

const Setting = ({ type = "bg" }) => {
  const dispatch = useDispatch();

  const handleChange = (color) => {
    if (type === "bg") dispatch(BackgroundChanger(color));
    else if (type === "navbar") dispatch(NavbarBackgroundChanger(color));
    else if (type === "taskbox") dispatch(TaskBackgroundChanger(color));
  };

  return (
    <div className="mt-4 p-3 bg-white text-black rounded shadow-md grid grid-cols-4 gap-2 w-[300px] border">
      {colors.map((color) => (
        <div
          key={color}
          className={`${color} w-8 h-8 rounded cursor-pointer border hover:scale-110 transition-transform`}
          onClick={() => handleChange(color)}
          title={color}
        ></div>
      ))}
    </div>
  );
};

export default Setting;