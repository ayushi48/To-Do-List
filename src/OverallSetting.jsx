// // // // // 

// // // // // OverallSetting.jsx
// // // // import React from "react";

// // // // const OverallSetting = () => {
// // // //   return (
// // // //     <div className="p-4 text-lg text-gray-700 space-y-4 w-[70%] border-1 rounded-3xl m-10">
// // // //       <p>🎨 Choose Background Color</p>

// // // //       <p>🧭 Choose Background Color of Navigation Bar</p>
// // // //       <p>🗂️ Choose Taskbar Colour</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OverallSetting;


// // // // OverallSetting.jsx
// // // import React from "react";
// // // import Setting from "./Setting";

// // // const OverallSetting = () => {
// // //   return (
// // //     <div className=" flex justify-center items-center  w-[70%] m-10">
// // //       <div className="bg-[#D6FCF7] w-full  h-full rounded-3xl p-10 shadow-lg border-4 border-pink-100 ">
// // //         <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
// // //           🎯 TO-DO LIST SETTINGS
// // //         </h2>

// // //         <div className="mb-6">
// // //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// // //             🎨 Choose Background Color:
// // //           </label>
// // //           <select className="w-full p-3 rounded-xl border-2 border-gray-300">
// // //           <option > <Setting/></option> 
// // //           </select>
// // //         </div>

// // //         <div className="mb-6">
// // //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// // //             🍽️ Choose Plate Background Color:
// // //           </label>
// // //           <select className="w-full p-3 rounded-xl border-2 border-gray-300">
// // //             <option>Pink</option>
// // //             <option>White</option>
// // //             <option>Light Blue</option>
// // //             <option>Beige</option>
// // //           </select>
// // //         </div>

// // //         <div className="mb-6">
// // //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// // //             🛠️ Choose Toolbar Background Color:
// // //           </label>
// // //           <select className="w-full p-3 rounded-xl border-2 border-gray-300">
// // //             <option>Red</option>
// // //             <option>Gray</option>
// // //             <option>Dark Blue</option>
// // //             <option>Black</option>
// // //           </select>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OverallSetting;

// // import React, { useState } from "react";
// // import Setting from "./Setting";

// // const OverallSetting = () => {
// //   const [showPalette, setShowPalette] = useState(false);

// //   return (
// //     <div className="flex justify-center items-center w-[70%] m-10">
// //       <div className="bg-[#D6FCF7] w-full h-full rounded-3xl p-10 shadow-lg border-4 border-pink-100">
// //         <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
// //           🎯 TO-DO LIST SETTINGS
// //         </h2>

// //         {/* Background Color Section */}
// //         <div className="mb-6">
// //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// //             🎨 Choose Background Color:
// //           </label>
// //           <button
// //             onClick={() => setShowPalette((prev) => !prev)}
// //             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
// //           >
// //             {showPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
// //           </button>

// //           {showPalette && (
// //             <div>
// //               <Setting  type="bg"/>
// //             </div>
// //           )}
// //         </div>

// //         {/* Other dropdowns */}
// //           <div className="mb-6">
// //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// //             🎨 Choose Background Color of Navigation Bar:
// //           </label>
// //           <button
// //             onClick={() => setShowPalette((prev) => !prev)}
// //             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
// //           >
// //             {showPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
// //           </button>

// //           {showPalette && (
// //             <div>
// //               <Setting  type="navbar"/>
// //             </div>
// //           )}
// //         </div>

// //    {/* option3 */}


// //       <div className="mb-6">
// //           <label className="block text-lg font-semibold text-gray-800 mb-2">
// //             🎨 Choose Color for Task:
// //           </label>
// //           <button
// //             onClick={() => setShowPalette((prev) => !prev)}
// //             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
// //           >
// //             {showPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
// //           </button>

// //           {showPalette && (
// //             <div>
// //               <Setting  type="bg"/>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OverallSetting;


// import React, { useState } from "react";
// import Setting from "./Setting";

// const OverallSetting = () => {
//   const [showMainPalette, setShowMainPalette] = useState(false);
//   const [showNavbarPalette, setShowNavbarPalette] = useState(false);
//   const [showTaskbarPalette, setShowTaskbarPalette] = useState(false);

//   return (
//     <div className="flex justify-center items-center w-[70%] m-10">
//       <div className="bg-[#D6FCF7] w-full h-full rounded-3xl p-10 shadow-lg border-4 border-pink-100">
//         <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
//           🎯 TO-DO LIST SETTINGS
//         </h2>

//         {/* 1. Main background color */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🎨 Choose Background Color:
//           </label>
//           <button
//             onClick={() => setShowMainPalette(prev => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showMainPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showMainPalette && <Setting type="bg" />}
//         </div>

//         {/* 2. Navbar background color */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🧭 Choose Navbar Background Color:
//           </label>
//           <button
//             onClick={() => setShowNavbarPalette(prev => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showNavbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showNavbarPalette && <Setting type="navbar" />}
//         </div>

//         {/* 3. Taskbar background color */}
//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🗂️ Choose Toolbar Background Color:
//           </label>
//           <button
//             onClick={() => setShowTaskbarPalette(prev => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showTaskbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showTaskbarPalette && <Setting type="taskbox" />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverallSetting;
//********************************************************************************************************************************************************** */


// import React, { useState } from "react";
// import Setting from "./Setting";

// const OverallSetting = () => {
//   const [showMainPalette, setShowMainPalette] = useState(false);
//   const [showNavbarPalette, setShowNavbarPalette] = useState(false);
//   const [showTaskbarPalette, setShowTaskbarPalette] = useState(false);

//   return (
//     <div className="flex justify-center items-center w-[70%] m-10">
//       <div className="bg-[#D6FCF7] w-full h-full rounded-3xl p-10 shadow-lg border-4 border-pink-100">
//         <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
//           🎯 TO-DO LIST SETTINGS
//         </h2>

//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🎨 Choose Background Color:
//           </label>
//           <button
//             onClick={() => setShowMainPalette((prev) => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showMainPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showMainPalette && <Setting type="bg" />}
//         </div>

//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🧭 Choose Navbar Background Color:
//           </label>
//           <button
//             onClick={() => setShowNavbarPalette((prev) => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showNavbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showNavbarPalette && <Setting type="navbar" />}
//         </div>

//         <div className="mb-6">
//           <label className="block text-lg font-semibold text-gray-800 mb-2">
//             🗂️ Choose Toolbar Background Color:
//           </label>
//           <button
//             onClick={() => setShowTaskbarPalette((prev) => !prev)}
//             className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
//           >
//             {showTaskbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
//           </button>
//           {showTaskbarPalette && <Setting type="taskbox" />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OverallSetting;

//*****************************************************************************************************************************88 */



import React, { useState } from "react";
import Setting from "./Setting";

const OverallSetting = () => {
  const [showMainPalette, setShowMainPalette] = useState(false);
  const [showNavbarPalette, setShowNavbarPalette] = useState(false);
  const [showTaskbarPalette, setShowTaskbarPalette] = useState(false);

  return (
    <div className="flex justify-center items-center w-[70%] m-10">
      <div className="bg-gray-200 overflow-y-auto w-full h-full rounded-3xl p-10 shadow-lg border-4 border-pink-100  ">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
          🎯 TO-DO LIST SETTINGS
        </h2>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            🎨 Choose Background Color:
          </label>
          <button
            onClick={() => setShowMainPalette((prev) => !prev)}
            className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
          >
            {showMainPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
          </button>
          {showMainPalette && <Setting type="bg" />}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            🧭 Choose Navbar Background Color:
          </label>
          <button
            onClick={() => setShowNavbarPalette((prev) => !prev)}
            className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
          >
            {showNavbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
          </button>
          {showNavbarPalette && <Setting type="navbar" />}
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            🗂️ Choose Toolbar Background Color:
          </label>
          <button
            onClick={() => setShowTaskbarPalette((prev) => !prev)}
            className="w-1/2 p-3 rounded-xl border-2 border-gray-300 bg-white text-left shadow"
          >
            {showTaskbarPalette ? "Hide Palette 🔽" : "Show Palette 🔼"}
          </button>
          {showTaskbarPalette && <Setting type="taskbox" />}
        </div>
      </div>
    </div>
  );
};

export default OverallSetting;
