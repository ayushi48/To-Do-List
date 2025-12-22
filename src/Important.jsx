// // // // import React from "react";



// // // // const Important= () => {


   

// // // //   return (
// // // //     <div className="w-[60%] bg-amber-300 p-4 space-y-4 text-white m-7 mt-4 rounded-3xl transition-all ">
// // // //       <h2 className="text-xl font-bold">My Tasks</h2>
// // // //   {/* all the button */}

// // // // <div className=" text-black p-2 w-full h-20 flex  gap-2 ">
// // // //   <button className="flex-1 w-full bg-white text-black rounded-md border border-amber-300 hover:bg-amber-100 active:bg-amber-200 transition">
// // // //     Pending
// // // //   </button>
// // // //   <button className="flex-1 w-full bg-white text-black rounded-md border border-amber-300 hover:bg-amber-100 active:bg-amber-200 transition">
// // // //     Important
// // // //   </button>
// // // //   <button className="flex-1 w-full bg-white text-black rounded-md border border-amber-300 hover:bg-amber-100 active:bg-amber-200 transition">
// // // //     All Tasks
// // // //   </button>
// // // //   <button className="flex-1 w-full bg-white text-black rounded-md border border-amber-300 hover:bg-amber-100 active:bg-amber-200 transition">
// // // //     Completed
// // // //   </button>
// // // // </div>

// // // //     </div>
// // // //   );
// // // // };


// // // // export default Important;
// // // //************************************************************************************************************************************** */
// // // // import React, { useState } from "react";
// // // // import { useSelector } from "react-redux";

// // // // const Important = () => {
// // // //   const todos = useSelector((state) => state.todo.data);
// // // //   const [filterType, setFilterType] = useState("all");

// // // //   const getFilteredData = () => {
// // // //     if (filterType === "completed") {
// // // //       return todos
// // // //         .filter((todo) => todo.complete)
// // // //         .sort((a, b) => Number(b.important) - Number(a.important));
// // // //     } 
// // // //     else if (filterType === "important") {
// // // //       return todos.filter((todo) => todo.important);
// // // //     } 
// // // //     else if (filterType === "pending") {
// // // //       return todos.filter((todo) => !todo.complete);
// // // //     } 
// // // //     else {
// // // //       return todos;
// // // //     }
// // // //   };

// // // //   const filteredData = getFilteredData();

// // // //   return (
// // // //     <div className="p-4 w-full bg-yellow-300 rounded-xl min-h-screen">
// // // //       <h1 className="text-2xl font-bold text-center mb-6 text-pink-800">
// // // //         My Tasks
// // // //       </h1>

// // // //       {/* Buttons */}
// // // //       <div className="grid grid-cols-4 gap-4 mb-6">
// // // //         <button
// // // //           onClick={() => setFilterType("pending")}
// // // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // // //             filterType === "pending"
// // // //               ? "bg-amber-100 font-bold"
// // // //               : "bg-white hover:bg-amber-100"
// // // //           }`}
// // // //         >
// // // //           Pending	⏳
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setFilterType("important")}
// // // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // // //             filterType === "important"
// // // //               ? "bg-amber-200 font-bold"
// // // //               : "bg-white hover:bg-amber-100"
// // // //           }`}
// // // //         >
// // // //           Important🚨
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setFilterType("all")}
// // // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // // //             filterType === "all"
// // // //               ? "bg-amber-200 font-bold"
// // // //               : "bg-white hover:bg-amber-100"
// // // //           }`}
// // // //         >
// // // //           All Tasks	🗂️
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setFilterType("completed")}
// // // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // // //             filterType === "completed"
// // // //               ? "bg-amber-200 font-bold"
// // // //               : "bg-white hover:bg-amber-100"
// // // //           }`}
// // // //         >
// // // //           Completed	✅
// // // //         </button>
// // // //       </div>

// // // //       {/* Tasks */}
// // // //       <div className="space-y-4">
// // // //         {filteredData.length === 0 ? (
// // // //           <p className="text-center text-gray-700">No tasks found.</p>
// // // //         ) : (
// // // //           filteredData.map((todo) => (
// // // //             <div
// // // //               key={todo.id}
// // // //               className={`p-4 rounded-lg shadow-md ${
// // // //                 todo.important ? "bg-yellow-100" : "bg-white"
// // // //               }`}
// // // //             >
// // // //               <h2 className="text-lg font-bold text-black mb-1">📌 {todo.title}</h2>
// // // //               <p className="text-sm text-gray-700">Start: {todo.start}</p>
// // // //               <p className="text-sm text-gray-700">End: {todo.end}</p>
// // // //               <p
// // // //                 className={`text-sm font-semibold ${
// // // //                   todo.complete ? "text-green-600" : "text-red-600"
// // // //                 }`}
// // // //               >
// // // //                 {todo.complete ? "✅ Completed" : "⏳ Pending"}
// // // //               </p>
// // // //             </div>
// // // //           ))
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Important;


// // // //************************************************************************************************************************************************************ */
// // // // (my task section)

// // // import React, { useState } from "react";
// // // import { useSelector } from "react-redux";

// // // const Important = () => {
// // //   const todos = useSelector((state) => state.todo.data);
// // //   const [filterType, setFilterType] = useState("all");

// // //   const getFilteredData = () => {
// // //     if (filterType === "completed") {
// // //       return todos
// // //         .filter((todo) => todo.complete)
// // //         .sort((a, b) => Number(b.important) - Number(a.important));
// // //     } 
// // //     else if (filterType === "important") {
// // //       return todos.filter((todo) => todo.important);
// // //     } 
// // //     else if (filterType === "pending") {
// // //       return todos.filter((todo) => !todo.complete);
// // //     } 
// // //     else {
// // //       return todos;
// // //     }
// // //   };

// // //   const filteredData = getFilteredData();

// // //   return (
// // //     <div className="p-4 w-full bg-black rounded-3xl max-h-screen overflow-y-auto m-10">
// // //       <h1 className="text-2xl font-bold text-center mb-6 text-pink-800">
// // //         My Tasks
// // //       </h1>

// // //       {/* Buttons */}
// // //       <div className="grid grid-cols-4 gap-4 mb-6">
// // //         <button
// // //           onClick={() => setFilterType("pending")}
// // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // //             filterType === "pending"
// // //               ? "bg-amber-100 font-bold"
// // //               : "bg-white hover:bg-amber-100"
// // //           }`}
// // //         >
// // //           Pending	⏳
// // //         </button>
// // //         <button
// // //           onClick={() => setFilterType("important")}
// // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // //             filterType === "important"
// // //               ? "bg-amber-200 font-bold"
// // //               : "bg-white hover:bg-amber-100"
// // //           }`}
// // //         >
// // //           Important🚨
// // //         </button>
// // //         <button
// // //           onClick={() => setFilterType("all")}
// // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // //             filterType === "all"
// // //               ? "bg-amber-200 font-bold"
// // //               : "bg-white hover:bg-amber-100"
// // //           }`}
// // //         >
// // //           All Tasks	🗂️
// // //         </button>
// // //         <button
// // //           onClick={() => setFilterType("completed")}
// // //           className={`py-2 rounded-md border border-amber-300 transition ${
// // //             filterType === "completed"
// // //               ? "bg-amber-200 font-bold"
// // //               : "bg-white hover:bg-amber-100"
// // //           }`}
// // //         >
// // //           Completed	✅
// // //         </button>
// // //       </div>

// // //       {/* Tasks */}
// // //       <div className="space-y-4">
// // //         {filteredData.length === 0 ? (
// // //           <p className="text-center text-gray-700">No tasks found.</p>
// // //         ) : (
// // //           filteredData.map((todo) => (
// // //             <div
// // //               key={todo.id}
// // //               className={`p-4 rounded-lg shadow-md ${
// // //                 todo.important ? "bg-yellow-100" : "bg-white"
// // //               }`}
// // //             >
// // //               <h2 className="text-lg font-bold text-black mb-1">📌 {todo.title}</h2>
// // //               <p className="text-sm text-gray-700">Start: {todo.start}</p>
// // //               <p className="text-sm text-gray-700">End: {todo.end}</p>
// // //               <p
// // //                 className={`text-sm font-semibold ${
// // //                   todo.complete ? "text-green-600" : "text-red-600"
// // //                 }`}
// // //               >
// // //                 {todo.complete ? "✅ Completed" : "⏳ Pending"}
// // //               </p>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Important;



// // import React, { useState } from "react";
// // import { useSelector } from "react-redux";

// // const Important = () => {
// //   const todos = useSelector((state) => state.todo.data);
// //   const [filterType, setFilterType] = useState("all");

// //   const getFilteredData = () => {
// //     if (filterType === "completed") {
// //       return todos
// //         .filter((todo) => todo.complete)
// //         .sort((a, b) => Number(b.important) - Number(a.important));
// //     } else if (filterType === "important") {
// //       return todos.filter((todo) => todo.important);
// //     } else if (filterType === "pending") {
// //       return todos.filter((todo) => !todo.complete);
// //     } else {
// //       return todos;
// //     }
// //   };

// //   const filteredData = getFilteredData();

// //   return (
// //     <div className="p-4 w-[65%] bg-black rounded-3xl max-h-screen overflow-y-auto hide-scrollbar m-10">
// //       <h1 className="text-2xl font-bold text-center mb-6 text-pink-800">
// //         My Tasks
// //       </h1>

// //       {/* Buttons */}
// //       {/* <div className="flex gap-3 mb-6">
// //         <button
// //           onClick={() => setFilterType("pending")}
// //           className={`flex-1 py-2 px-4 rounded-xl text-black border border-amber-300 shadow hover:shadow-lg transform transition-all duration-200 ease-in-out ${
// //             filterType === "pending" ? "bg-amber-300 font-bold scale-105" : "bg-white hover:bg-yellow-100"
// //           }`}
// //         >
// //           ⏳ Pending
// //         </button>
// //         <button
// //           onClick={() => setFilterType("important")}
// //           className={`flex-1 py-2 px-4 rounded-xl text-black border border-amber-300 shadow hover:shadow-lg transform transition-all duration-200 ease-in-out ${
// //             filterType === "important" ? "bg-amber-300 font-bold scale-105" : "bg-white hover:bg-yellow-100"
// //           }`}
// //         >
// //           🚨 Important
// //         </button>
// //         <button
// //           onClick={() => setFilterType("all")}
// //           className={`flex-1 py-2 px-4 rounded-xl text-black border border-amber-300 shadow hover:shadow-lg transform transition-all duration-200 ease-in-out ${
// //             filterType === "all" ? "bg-amber-300 font-bold scale-105" : "bg-white hover:bg-yellow-100"
// //           }`}
// //         >
// //           🗂️ All Tasks
// //         </button>
// //         <button
// //           onClick={() => setFilterType("completed")}
// //           className={`flex-1 py-2 px-4 rounded-xl text-black border border-amber-300 shadow hover:shadow-lg transform transition-all duration-200 ease-in-out ${
// //             filterType === "completed" ? "bg-amber-300 font-bold scale-105" : "bg-white hover:bg-yellow-100"
// //           }`}
// //         >
// //           ✅ Completed
// //         </button>
// //       </div> */}

// //       <div className="flex overflow-hidden border border-yellow-200 rounded-xl text-black mb-6 shadow">
// //   <button
// //     onClick={() => setFilterType("pending")}
// //     className={`flex-1 py-2 px-4 transition-all duration-200 border-white ${
// //       filterType === "pending"
// //         ? "bg-rose-100 font-bold"
// //         : "bg-amber-200 hover:bg-amber-500"
// //     }`}
// //   >
// //     ⏳ Pending
// //   </button>
// //   <button
// //     onClick={() => setFilterType("important")}
// //     className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //       filterType === "important"
// //         ? "bg-rose-100 font-bold"
// //         : "bg-amber-200 hover:bg-amber-500"
// //     }`}
// //   >
// //     🚨 Important
// //   </button>
// //   <button
// //     onClick={() => setFilterType("all")}
// //     className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //       filterType === "all"
// //         ? "bg-rose-100 font-bold"
// //         : "bg-amber-200 hover:bg-amber-500"
// //     }`}
// //   >
// //     🗂️ All Tasks
// //   </button>
// //   <button
// //     onClick={() => setFilterType("completed")}
// //     className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //       filterType === "completed"
// //         ? "bg-rose-100 font-bold"
// //         : "bg-amber-200 hover:bg-amber-500"
// //     }`}
// //   >
// //     ✅ Completed
// //   </button>
// // </div>


// //       {/* Tasks */}
// //       {/* <div className="space-y-4">
// //         {filteredData.length === 0 ? (
// //           <p className="text-center text-gray-700">No tasks found.</p>
// //         ) : (
// //           filteredData.map((todo) => (
// //             <div
// //               key={todo.id}
// //               className={`p-4 rounded-lg shadow-md ${
// //                 todo.important ? "bg-yellow-100" : "bg-white"
// //               }`}
// //             >
// //               <h2 className="text-lg font-bold text-black mb-1">📌 {todo.title}</h2>
// //               <p className="text-sm text-gray-700">Start: {todo.start}</p>
// //               <p className="text-sm text-gray-700">End: {todo.end}</p>
// //               <p
// //                 className={`text-sm font-semibold ${
// //                   todo.complete ? "text-green-600" : "text-red-600"
// //                 }`}
// //               >
// //                 {todo.complete ? "✅ Completed" : "⏳ Pending"}
// //               </p>
// //             </div>
// //           ))
// //         )}
// //       </div> */}


// //       <div className="space-y-4 p-5 rounded-3xl shadow-[5px_5px_10px_rgba(0,0,0,0.9)] bg-rose-200 max-h-[75vh] overflow-y-auto hide-scrollbar">
// //   {filteredData.length === 0 ? (
// //     <p className="text-center text-gray-500 text-lg italic">
// //       No tasks found.
// //     </p>
// //   ) : (
// //     filteredData.map((todo) => (
// //       <div
// //         key={todo.id}
// //         className={`p-5 rounded-2xl border-l-[6px] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl
// //         ${
// //           todo.important
// //             ? "bg-yellow-100 border-yellow-400"
// //             : "bg-white border-gray-300"
// //         }`}
// //       >
// //         {/* Title */}
// //         <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
// //           📌 {todo.title}
// //           {todo.important && (
// //             <span className="text-yellow-500 text-xl">⭐</span>
// //           )}
// //         </h2>

        
// //        {/* <div className="text-gray-700 text-sm mb-2 flex flex-wrap gap-4">
// //   <p>
// //     <span className="font-medium text-gray-800">Start:</span> {todo.start}
// //   </p>
// //   <p>
// //     <span className="font-medium text-gray-800">End:</span> {todo.end}
// //   </p>
// // </div>


        
// //         <span
// //           className={`inline-block mt-2 px-3 py-[6px] rounded-full text-xs font-semibold tracking-wide
// //           ${
// //             todo.complete
// //               ? "bg-green-100 text-green-700"
// //               : "bg-red-100 text-red-600"
// //           }`}
// //         >
// //           {todo.complete ? "✅ Completed" : "⏳ Pending"}
// //         </span> */}



// //         <div className="flex justify-between items-center flex-wrap text-sm text-gray-700 mb-2">
// //   <div className="flex gap-4 flex-wrap">
// //     <p>
// //       <span className="font-medium text-gray-800">Start:</span> {todo.start}
// //     </p>
// //     <p>
// //       <span className="font-medium text-gray-800">End:</span> {todo.end}
// //     </p>
// //   </div>
  
// //   <span
// //     className={`mt-2 sm:mt-0 px-3 py-[6px] rounded-full text-xs font-semibold tracking-wide
// //       ${todo.complete ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
// //   >
// //     {todo.complete ? "✅ Completed" : "⏳ Pending"}
// //   </span>
// // </div>

// //       </div>
// //     ))
// //   )}
// // </div>

// //     </div>
// //   );
// // };

// // export default Important;


// // import React, { useState } from "react";
// // import { useSelector } from "react-redux";

// // const Important = () => {
// //   const todos = useSelector((state) => state.todo.data);
// //   const [filterType, setFilterType] = useState("all");

// //   const getFilteredData = () => {
// //     if (filterType === "completed") {
// //       return todos
// //         .filter((todo) => todo.complete)
// //         .sort((a, b) => Number(b.important) - Number(a.important));
// //     } else if (filterType === "important") {
// //       return todos.filter((todo) => todo.important);
// //     } else if (filterType === "pending") {
// //       return todos.filter((todo) => !todo.complete);
// //     } else {
// //       return todos;
// //     }
// //   };

// //   const filteredData = getFilteredData();

// //   return (
// //     <div className="p-4 w-[65%] bg-rose-200 rounded-3xl max-h-screen overflow-y-auto hide-scrollbar m-10">
// //       <h1 className="text-2xl font-bold text-center mb-6 text-pink-800">
// //         My Tasks
// //       </h1>

// //       {/* Buttons */}
// //       <div className="flex overflow-hidden border border-yellow-200 rounded-xl text-black mb-6 shadow">
// //         <button
// //           onClick={() => setFilterType("pending")}
// //           className={`flex-1 py-2 px-4 transition-all duration-200 border-white ${
// //             filterType === "pending"
// //               ? "bg-rose-100 font-bold"
// //               : "bg-amber-200 hover:bg-amber-500"
// //           }`}
// //         >
// //           ⏳ Pending
// //         </button>
// //         <button
// //           onClick={() => setFilterType("important")}
// //           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //             filterType === "important"
// //               ? "bg-rose-100 font-bold"
// //               : "bg-amber-200 hover:bg-amber-500"
// //           }`}
// //         >
// //           🚨 Important
// //         </button>
// //         <button
// //           onClick={() => setFilterType("all")}
// //           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //             filterType === "all"
// //               ? "bg-rose-100 font-bold"
// //               : "bg-amber-200 hover:bg-amber-500"
// //           }`}
// //         >
// //           🗂️ All Tasks
// //         </button>
// //         <button
// //           onClick={() => setFilterType("completed")}
// //           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
// //             filterType === "completed"
// //               ? "bg-rose-100 font-bold"
// //               : "bg-amber-200 hover:bg-amber-500"
// //           }`}
// //         >
// //           ✅ Completed
// //         </button>
// //       </div>

// //       {/* Tasks */}
// //       <div className="space-y-4">
// //         {filteredData.length === 0 ? (
// //           <p className="text-center text-gray-500 text-lg italic">
// //             No tasks found.
// //           </p>
// //         ) : (
// //           filteredData.map((todo) => (
// //             <div
// //               key={todo.id}
// //               className={`p-5 rounded-2xl border-l-[6px] shadow-md transition-all duration-300 hover:scale-[1.015] hover:shadow-xl ${
// //                 todo.important
// //                   ? "bg-yellow-100 border-gray-400"
// //                   : "bg-yellow-100 border-gray-300"
// //               }`}
// //             >
// //               {/* Title */}
// //               <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
// //                 📌 {todo.title}
// //                 {todo.important && (
// //                   <span className="text-yellow-500 text-xl">⭐</span>
// //                 )}
// //               </h2>

// //               {/* Start, End, and Status Row */}
// //               <div className="flex justify-between items-center flex-wrap text-sm text-gray-700 mb-2">
// //                 <div className="flex gap-4 flex-wrap">
// //                   <p>
// //                     <span className="font-medium text-gray-800">Start:</span>{" "}
// //                     {todo.start}
// //                   </p>
// //                   <p>
// //                     <span className="font-medium text-gray-800">End:</span>{" "}
// //                     {todo.end}
// //                   </p>
// //                 </div>

// //                 <span
// //                   className={`mt-2 sm:mt-0 px-3 py-[6px] rounded-full text-xs font-semibold tracking-wide ${
// //                     todo.complete
// //                       ? "bg-green-100 text-green-700"
// //                       : "bg-red-100 text-red-600"
// //                   }`}
// //                 >
// //                   {todo.complete ? "✅ Completed" : "⏳ Pending"}
// //                 </span>
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Important;


// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Important = () => {
//   const todos = useSelector((state) => state.todo.data);
//   const [filterType, setFilterType] = useState("all");

//   const getFilteredData = () => {
//     if (filterType === "completed") {
//       return todos
//         .filter((todo) => todo.complete)
//         .sort((a, b) => Number(b.important) - Number(a.important));
//     } else if (filterType === "important") {
//       return todos.filter((todo) => todo.important);
//     } else if (filterType === "pending") {
//       return todos.filter((todo) => !todo.complete);
//     } else {
//       return todos;
//     }
//   };

//   const filteredData = getFilteredData();

//   return (
//     <div className="p-4 w-[65%] bg-rose-200 rounded-3xl max-h-screen overflow-y-auto hide-scrollbar m-10">
//       <h1 className="text-4xl font-bold text-center mb-6 text-pink-800">
      
// 📝 My Tasks
//       </h1>

//       {/* Buttons */}
//       <div className="flex overflow-hidden border border-yellow-200 rounded-xl text-black mb-6 shadow">
//         <button
//           onClick={() => setFilterType("pending")}
//           className={`flex-1 py-2 px-4 transition-all duration-200 border-white ${
//             filterType === "pending"
//               ? "bg-gray-300 font-bold text-black"
//               : " bg-purple-300 "
//           }`}
//         >
//           ⏳ Pending
//         </button>
//         <button
//           onClick={() => setFilterType("important")}
//           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
//             filterType === "important"
//               ? "bg-gray-300 font-bold"
//               : "bg-purple-300  "
//           }`}
//         >
//           🚨 Important
//         </button>
//         <button
//           onClick={() => setFilterType("all")}
//           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
//             filterType === "all"
//               ? "bg-gray-300 font-bold"
//               : "bg-purple-300  "
//           }`}
//         >
//           🗂️ All Tasks
//         </button>
//         <button
//           onClick={() => setFilterType("completed")}
//           className={`flex-1 py-2 px-4 transition-all duration-200 border-l border-white ${
//             filterType === "completed"
//               ? "bg-gray-300 font-bold"
//               : "bg-purple-300  "
//           }`}
//         >
//           ✅ Completed
//         </button>
//       </div>

//       {/* Tasks */}
//       <div className="space-y-4">
//         {filteredData.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg italic">
//             No tasks found.
//           </p>
//         ) : (
//           filteredData.map((todo) => (
//             <div
//               key={todo.id}
//               className={`p-5 rounded-2xl  bg-yellow-100 shadow-[3px_3px_8px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-[1.015] hover:shadow-black ${
//                 todo.important ? "border-yellow-500" : "border-yellow-400"
//               }`}
//             >
           


//               <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-between">
//   <span className="flex items-center gap-2">
//     📌 {todo.title}
//   </span>
//   {todo.important && (
//     // <span className="text-yellow-300 text-xl">⭐</span>
//     <i className="fa-solid fa-star text-yellow-300 text-xl"></i>

//   )}
// </h2>


//               {/* Start, End, and Status Row */}
//               <div className="flex justify-between items-center flex-wrap text-sm text-gray-700 mb-2">
//                 <div className="flex gap-4 flex-wrap">
//                   <p>
//                     <span className="font-medium text-gray-800">Start:</span>{" "}
//                     {todo.start}
//                   </p>
//                   <p>
//                     <span className="font-medium text-gray-800">End:</span>{" "}
//                     {todo.end}
//                   </p>
//                 </div>

//                 <span
//                   className={`mt-2 sm:mt-0 px-3 py-[6px] rounded-full text-xs font-semibold tracking-wide ${
//                     todo.complete
//                       ? "bg-green-400 text-green-800"
//                       : "bg-red-300 text-red-800"
//                   }`}
//                 >
//                   {todo.complete ? "✅ Completed" : "⏳ Pending"}
//                 </span>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Important;


import React, { useState } from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import noTaskAnimation from "./alltask.json"; // 🔁 Update path if needed

const Important = () => {
  const todos = useSelector((state) => state.todo.data);
  const [filterType, setFilterType] = useState("all");

  const getFilteredData = () => {
    if (filterType === "completed") {
      return todos
        .filter((todo) => todo.complete)
        .sort((a, b) => Number(b.important) - Number(a.important));
    } else if (filterType === "important") {
      return todos.filter((todo) => todo.important);
    } else if (filterType === "pending") {
      return todos.filter((todo) => !todo.complete);
    } else {
      return todos;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="p-4 w-[65%] bg-gray-200 rounded-3xl max-h-screen overflow-y-auto hide-scrollbar m-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-[blue]">
        📝 My Tasks
      </h1>

      {/* Filter Buttons */}
      <div className="flex overflow-hidden border border-white rounded-xl text-black mb-6 shadow">
        <button
          onClick={() => setFilterType("pending")}
          className={`flex-1 py-2 px-4 text-white text-xl transition-all duration-200 border-white ${
            filterType === "pending"
              ? "bg-red-600  "
              : "bg-[#0606ac]"
          }`}
        >
          ⏳ Pending
        </button>
        <button
          onClick={() => setFilterType("important")}
          className={`flex-1 py-2 px-4 transition-all text-white text-xl duration-200 border-l border-white ${
            filterType === "important"
              ? "bg-red-600 "
              : "bg-[#0606ac]"
          }`}
        >
          🚨 Important
        </button>
        <button
          onClick={() => setFilterType("all")}
          className={`flex-1 py-2 px-4 transition-all text-white text-xl duration-200 border-l border-white ${
            filterType === "all"
              ? "bg-red-600  "
              : "bg-[#0606ac]"
          }`}
        >
          🗂️ All Tasks
        </button>
        <button
          onClick={() => setFilterType("completed")}
          className={`flex-1 py-2 px-4 transition-all text-white text-xl
             duration-200 border-l border-white ${
            filterType === "completed"
              ? "bg-red-600  "
              : "bg-[#0606ac]"
          }`}
        >
          ✅ Completed
        </button>
      </div>

      {/* Task Cards or Lottie Animation */}
      <div className="space-y-4">
        {filteredData.length === 0 ? (
          <div className="flex flex-col justify-center items-center p-12">
            <div className="w-100 h-80">
              <Lottie animationData={noTaskAnimation} loop autoplay />
            </div>
            <p className="text-red-600 font-bold  text-center  mt-4 text-[18px]">
              Your task list is empty — a perfect canvas for your next big move! 🌈✨🚀
            </p>
          </div>
        ) : (
          filteredData.map((todo) => (
            <div
              key={todo.id}
              className={`p-5 rounded-2xl bg-yellow-100 shadow-[3px_3px_8px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-[1.015] hover:shadow-black ${
                todo.important ? "border-yellow-500" : "border-yellow-400"
              }`}
            >
              <h2 className="text-xl font-bold text-red-500 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  📌 {todo.title}
                </span>
                {todo.important && (
                  <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
                )}
              </h2>

              <div className="flex justify-between items-center flex-wrap text-sm text-gray-700 mb-2">
                <div className="flex gap-4 flex-wrap">
                  <p>
                    <span className="font-medium text-[blue]"> 🗓️Start:</span>{" "}
                   {todo.start}
                  </p>
                  <p>
                    <span className="font-medium text-[blue]">  🕒End:</span>{" "}
                   {todo.end}
                  </p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 px-3 py-[6px] rounded-full text-xs font-semibold tracking-wide ${
                    todo.complete
                      ? "bg-green-400 text-green-800"
                      : "bg-red-300 text-red-800"
                  }`}
                >
                  {todo.complete ? "✅ Completed" : "⏳ Pending"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Important;
