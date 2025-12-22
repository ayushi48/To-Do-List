

// // // // // // import React, { useState } from "react";
// // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // import { add_data, remove_data, complete_data } from "./Slice1";
// // // // // // import { FaStar, FaRegStar } from "react-icons/fa";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { BackgroundChanger ,TaskBackgroundChanger} from "./Slice2";

// // // // // // const ToDo = () => {

// // // // // // // for changing dynamically background color and task box color 
// // // // // // const dispatch = useDispatch();
// // // // // // const bg = useSelector((state) => state.bgcolor.bg);

// // // // // // const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);


// // // // // //   const todos = useSelector((state) => state.todo.data);
// // // // // //   const [important, setImportant] = useState(false);

// // // // // //   function formatDateToDDMMYYYY(isoDate) {
// // // // // //     if (!isoDate) return "";
// // // // // //     const [year, month, day] = isoDate.split("-");
// // // // // //     return `${day}-${month}-${year}`;
// // // // // //   }

// // // // // //   function handleSubmit(e) {
// // // // // //     e.preventDefault();
// // // // // //     const form = e.target;
// // // // // //     const title = form.tast.value;
// // // // // //     const rawDate = form.data.value;
// // // // // //     const endDate = form.dataend.value;
// // // // // //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// // // // // //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// // // // // //     dispatch(
// // // // // //       add_data({
// // // // // //         title,
// // // // // //         start: formattedDate,
// // // // // //         end: formattedEndDate,
// // // // // //         important,
// // // // // //         complete: false, // ✅ new task is not completed by default
// // // // // //       })
// // // // // //     );

// // // // // //     form.reset();
// // // // // //     setImportant(false);
// // // // // //   }

// // // // // //   function removedatafun(id) {
// // // // // //     dispatch(remove_data(id));
// // // // // //   }

// // // // // //   function handleCheckbox(id) {
// // // // // //     dispatch(complete_data(id));
// // // // // //   }

// // // // // //   return (
// // // // // // <div className={`flex flex-col items-center shadow-[12px_10px_15px_rgba(12,12,12,0.9)] w-[65%]  border   rounded-3xl m-10 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto  overflow-x-hidden  hide-scrollbar`}>


// // // // // //       <p className="font-bold text-5xl mb-3">To-DoList 📝</p>

// // // // // //       {/* Form */}
// // // // // //       <form
// // // // // //         onSubmit={handleSubmit}
// // // // // //         className="w-full max-w-3xl bg-gray-800 rounded-full p-3 flex items-center gap-2 mb-6"
// // // // // //       >
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           name="tast"
// // // // // //           placeholder="Enter your task..."
// // // // // //           className="flex-grow bg-transparent text-white placeholder:text-gray-400 outline-none"
// // // // // //           required
// // // // // //         />
// // // // // //         <input
// // // // // //           type="date"
// // // // // //           name="data"
// // // // // //           className="bg-gray-700 text-white rounded px-2 py-1"
// // // // // //         />
// // // // // //         <input
// // // // // //           type="date"
// // // // // //           name="dataend"
// // // // // //           className="bg-gray-700 text-white rounded px-2 py-1"
// // // // // //         />

// // // // // //         {/* ⭐ Star toggle */}
// // // // // //         <button
// // // // // //           type="button"
// // // // // //           onClick={() => setImportant((prev) => !prev)}
// // // // // //           className="text-yellow-400 text-2xl focus:outline-none"
// // // // // //         >
// // // // // //           {important ? <FaStar /> : <FaRegStar />}
// // // // // //         </button>

// // // // // //         <button
// // // // // //           type="submit"
// // // // // //           className="bg-white text-black px-4 py-1 rounded-full shadow hover:bg-yellow-100"
// // // // // //         >
// // // // // //           ➕
// // // // // //         </button>
// // // // // //       </form>

// // // // // //       {/* Task List */}
// // // // // //       <div className="w-full max-w-3xl space-y-4">
// // // // // //         {todos.map((task) => (
// // // // // //           <div
// // // // // //             key={task.id}
// // // // // //             className={`${bgtask} p-4 rounded-xl  shadow flex justify-between items-start break-words whitespace-normal ${
// // // // // //               task.complete ? "opacity-100" : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             <div>

// // // // // // <h2 className="font-bold text-lg text-pink-700 break-words whitespace-pre-wrap">
// // // // // //   📌{" "}
// // // // // //   {task.complete ? (
// // // // // //     <>
// // // // // //       <span className="line-through">{task.title}</span>{" "}
// // // // // //       <motion.span
// // // // // //         initial={{ opacity: 0, scale: 0.9 }}
// // // // // //         animate={{ opacity: 1, scale: 1 }}
// // // // // //         transition={{ duration: 0.4 }}
// // // // // //         className="text-green-800 font-medium"
// // // // // //       >
// // // // // //         this task has been completed ✅🎉
// // // // // //       </motion.span>
// // // // // //     </>
// // // // // //   ) : (
// // // // // //     task.title
// // // // // //   )}
// // // // // // </h2>

// // // // // //               <p className="text-sm text-gray-700">
// // // // // //                 📅 <strong>Start:</strong> {task.start}
// // // // // //               </p>
// // // // // //               <p className="text-sm text-gray-700">
// // // // // //                 ⏰ <strong>End:</strong> {task.end}
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             <div className="flex items-center gap-3">
// // // // // //               {/* ⭐ importance */}
// // // // // //               {task.important ? (
// // // // // //                 <FaStar className="text-yellow-500 text-xl" />
// // // // // //               ) : (
// // // // // //                 <FaRegStar className="text-gray-400 text-xl" />
// // // // // //               )}

// // // // // //               {/* ✅ Completion checkbox */}
// // // // // //               <label className="flex items-center gap-1">
// // // // // //                 <input
// // // // // //                   type="checkbox" className="w-5 h-5 accent-green-600"
// // // // // //                   checked={task.complete}
// // // // // //                   onChange={() => handleCheckbox(task.id)}
// // // // // //                 />
// // // // // //                 <span className="text-sm">Done</span>
// // // // // //               </label>

// // // // // //               {/* 🗑️ Remove */}
// // // // // //               <button
// // // // // //                 onClick={() => removedatafun(task.id)}
// // // // // //                 className="text-red-600 hover:text-red-800 text-xl"
// // // // // //               >
// // // // // //                 🗑️
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ToDo;


// // // // /************************************************************************************************ */

// // // // import React, { useState } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import { add_data, remove_data, complete_data } from "./Slice1";
// // // // import { FaStar, FaRegStar } from "react-icons/fa";
// // // // import { motion } from "framer-motion";
// // // // import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";

// // // // const ToDo = () => {
// // // //   const dispatch = useDispatch();
// // // //   const bg = useSelector((state) => state.bgcolor.bg);
// // // //   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
// // // //   const todos = useSelector((state) => state.todo.data);
// // // //   const [important, setImportant] = useState(false);

// // // //   function formatDateToDDMMYYYY(isoDate) {
// // // //     if (!isoDate) return "";
// // // //     const [year, month, day] = isoDate.split("-");
// // // //     return `${day}-${month}-${year}`;
// // // //   }

// // // //   function handleSubmit(e) {
// // // //     e.preventDefault();
// // // //     const form = e.target;
// // // //     const title = form.tast.value;
// // // //     const rawDate = form.data.value;
// // // //     const endDate = form.dataend.value;
// // // //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// // // //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// // // //     dispatch(
// // // //       add_data({
// // // //         title,
// // // //         start: formattedDate,
// // // //         end: formattedEndDate,
// // // //         important,
// // // //         complete: false,
// // // //       })
// // // //     );

// // // //     form.reset();
// // // //     setImportant(false);
// // // //   }

// // // //   function removedatafun(id) {
// // // //     dispatch(remove_data(id));
// // // //   }

// // // //   function handleCheckbox(id) {
// // // //     dispatch(complete_data(id));
// // // //   }

// // // //   return (
// // // //     <div
// // // //       className={`flex flex-col items-center shadow-[12px_10px_15px_rgba(12,12,12,0.9)] w-[65%] border rounded-3xl m-10 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
// // // //     >
// // // //       <p className="font-bold text-5xl mb-3">To-DoList 📝</p>

// // // //       {/* Form */}
// // // //       <form
// // // //         onSubmit={handleSubmit}
// // // //         className="w-full max-w-3xl bg-gray-800 rounded-full p-3 flex items-center gap-2 mb-6"
// // // //       >
// // // //         <input
// // // //           type="text"
// // // //           name="tast"
// // // //           placeholder="Enter your task..."
// // // //           className="flex-grow bg-transparent text-white placeholder:text-gray-400 outline-none"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="date"
// // // //           name="data"
// // // //           className="bg-gray-700 text-white rounded px-2 py-1"
// // // //         />
// // // //         <input
// // // //           type="date"
// // // //           name="dataend"
// // // //           className="bg-gray-700 text-white rounded px-2 py-1"
// // // //         />

// // // //         {/* ⭐ Star toggle */}
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => setImportant((prev) => !prev)}
// // // //           className="text-yellow-400 text-2xl focus:outline-none"
// // // //         >
// // // //           {important ? <FaStar /> : <FaRegStar />}
// // // //         </button>

// // // //         <button
// // // //           type="submit"
// // // //           className="bg-white text-black px-4 py-1 rounded-full shadow hover:bg-yellow-100"
// // // //         >
// // // //           ➕
// // // //         </button>
// // // //       </form>

// // // //       {/* Task List */}
// // // //       <div className="w-full max-w-3xl space-y-4">
// // // //         {todos.map((task) => (
// // // //           <div
// // // //             key={task.id}
// // // //             className={`${bgtask} p-4 mb-4 rounded-xl shadow flex flex-wrap justify-between items-start break-words whitespace-normal w-full`}
// // // //           >
// // // //             {/* ✅ LEFT SIDE: Task Info */}
// // // //             <div className="flex-1 min-w-0 break-words overflow-hidden">
// // // //               <h2 className="font-bold text-lg text-pink-700 break-words whitespace-pre-wrap">
// // // //                 📌{" "}
// // // //                 {task.complete ? (
// // // //                   <>
// // // //                     <span className="line-through">{task.title}</span>{" "}
// // // //                     <motion.span
// // // //                       initial={{ opacity: 0, scale: 0.9 }}
// // // //                       animate={{ opacity: 1, scale: 1 }}
// // // //                       transition={{ duration: 0.4 }}
// // // //                       className="text-green-800 font-medium"
// // // //                     >
// // // //                       this task has been completed ✅🎉
// // // //                     </motion.span>
// // // //                   </>
// // // //                 ) : (
// // // //                   task.title
// // // //                 )}
// // // //               </h2>

// // // //               <p className="text-sm text-gray-700">
// // // //                 📅 <strong>Start:</strong> {task.start}
// // // //               </p>
// // // //               <p className="text-sm text-gray-700">
// // // //                 ⏰ <strong>End:</strong> {task.end}
// // // //               </p>
// // // //             </div>

// // // //             {/* ✅ RIGHT SIDE: Controls */}
// // // //             <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 mt-3 sm:mt-0 ml-auto">
// // // //               {/* ⭐ Importance */}
// // // //               {task.important ? (
// // // //                 <FaStar className="text-yellow-500 text-xl" />
// // // //               ) : (
// // // //                 <FaRegStar className="text-gray-400 text-xl" />
// // // //               )}

// // // //               {/* ✅ Checkbox */}
// // // //               <label className="flex items-center gap-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   className="w-5 h-5 accent-green-600"
// // // //                   checked={task.complete}
// // // //                   onChange={() => handleCheckbox(task.id)}
// // // //                 />
// // // //                 <span className="text-sm">Done</span>
// // // //               </label>

// // // //               {/* 🗑️ Delete */}
// // // //               <button
// // // //                 onClick={() => removedatafun(task.id)}
// // // //                 className="text-red-600 hover:text-red-800 text-xl"
// // // //               >
// // // //                 🗑️
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ToDo;




// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { add_data, remove_data, complete_data } from "./Slice1";
// // // import { FaStar, FaRegStar } from "react-icons/fa";
// // // import { motion } from "framer-motion";
// // // import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";
// // // import { FaHandPointRight } from "react-icons/fa"; // ✅ MUST HAVE



// // // const ToDo = () => {
// // //   const dispatch = useDispatch();
// // //   const bg = useSelector((state) => state.bgcolor.bg);
// // //   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
// // //   const todos = useSelector((state) => state.todo.data);
// // //   const [important, setImportant] = useState(false);

// // //   function formatDateToDDMMYYYY(isoDate) {
// // //     if (!isoDate) return "";
// // //     const [year, month, day] = isoDate.split("-");
// // //     return `${day}-${month}-${year}`;
// // //   }

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     const form = e.target;
// // //     const title = form.tast.value;
// // //     const rawDate = form.data.value;
// // //     const endDate = form.dataend.value;
// // //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// // //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// // //     dispatch(
// // //       add_data({
// // //         title,
// // //         start: formattedDate,
// // //         end: formattedEndDate,
// // //         important,
// // //         complete: false,
// // //       })
// // //     );

// // //     form.reset();
// // //     setImportant(false);
// // //   }

// // //   function removedatafun(id) {
// // //     dispatch(remove_data(id));
// // //   }

// // //   function handleCheckbox(id) {
// // //     dispatch(complete_data(id));
// // //   }

// // //   return (
// // //     <div
// // //       className={`flex flex-col items-center shadow-[12px_10px_15px_rgba(12,12,12,0.9)] w-[65%] border rounded-3xl m-10 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
// // //     >
     
// // //      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center mb-4">
// // //   📝 TO DO LIST
// // // </h1>


// // //       {/* Form */}
// // //     <form
// // //   onSubmit={handleSubmit}
// // //   className="w-full max-w-3xl bg-white rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
// // // >
// // //   <input
// // //     type="text"
// // //     name="tast"
// // //     placeholder="➕ Add a Task"
// // //     className="flex-grow bg-transparent text-black placeholder:text-black outline-none"
// // //     required
// // //   />

// // //   <input
// // //     type="date"
// // //     name="data"
// // //     placeholder="Start Date"
// // //     className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// // //     onFocus={(e) => e.target.type = "date"}
// // //     onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
// // //   />

// // //   <input
// // //     type="date"
// // //     name="dataend"
// // //     placeholder="End Date"
// // //     className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// // //     onFocus={(e) => e.target.type = "date"}
// // //     onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
// // //   />

// // //   {/* ⭐ Star toggle */}
// // //   <button
// // //     type="button"
// // //     onClick={() => setImportant((prev) => !prev)}
// // //     className="text-yellow-400 text-2xl focus:outline-none"
// // //   >
// // //     {important ? <FaStar /> : <FaRegStar />}
// // //   </button>

// // //   {/* Submit Button */}
// // //   <button
// // //     type="submit"
// // //     className="text-black px-4 py-1 rounded-full shadow hover:bg-yellow-100 flex items-center gap-1"
// // //   >
// // //     <i className="fa-solid fa-house mr-2"></i>Tasks
// // //   </button>
// // // </form>


// // //       {/* Task List */}
// // //      <div className="w-full max-w-3xl space-y-5">
// // //   {todos.map((task) => (
// // //     <div
// // //       key={task.id}
// // //       className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[0_4px_12px_rgba(255,165,0,0.4)] transition-transform hover:scale-[1.01] duration-300`}
// // //     >
// // //       {/* ✅ LEFT SIDE: Task Info */}
// // //       <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
// // //         <h2 className="font-bold text-xl text-white break-words whitespace-pre-wrap flex items-center gap-2">
// // //           <FaHandPointRight className="text-red-500 text-2xl" />
// // //           {task.complete ? (
// // //             <>
// // //               <span className="line-through">{task.title}</span>
// // //               <motion.span
// // //                 initial={{ opacity: 0, scale: 0.9 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 transition={{ duration: 0.4 }}
// // //                 className="text-green-400 font-medium ml-2"
// // //               >
// // //                 ✅ Completed 🎉
// // //               </motion.span>
// // //             </>
// // //           ) : (
// // //             task.title
// // //           )}
// // //         </h2>

// // //         <div className="flex flex-wrap gap-4 mt-2 text-md text-white">
// // //           <p>
// // //             📅 <strong>Start:</strong> {task.start}
// // //           </p>
// // //           <p>
// // //             ⏰ <strong>End:</strong> {task.end}
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* ✅ RIGHT SIDE: Controls */}
// // //       <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
// // //         {/* ⭐ Importance */}
// // //         {task.important ? (
// // //           <FaStar className="text-red-500 text-2xl hover:scale-110 transition-transform" />
// // //         ) : (
// // //           <FaRegStar className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
// // //         )}

// // //         {/* ✅ Checkbox */}
// // //         <label className="flex items-center gap-2 text-white">
// // //           <input
// // //             type="checkbox"
// // //             className="w-5 h-5 accent-green-500"
// // //             checked={task.complete}
// // //             onChange={() => handleCheckbox(task.id)}
// // //           />
// // //           <span className="text-sm">Done</span>
// // //         </label>

// // //         {/* 🗑️ Delete */}
// // //         <button
// // //           onClick={() => removedatafun(task.id)}
// // //           className="text-red-500 hover:text-red-700 text-xl transition-all"
// // //         >
// // //           🗑️
// // //         </button>
// // //       </div>
// // //     </div>
// // //   ))}
// // // </div>

// // //     </div>
// // //   );
// // // };

// // // export default ToDo;



// // // import React, { useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { add_data, remove_data, complete_data } from "./Slice1";
// // // import { FaStar, FaRegStar, FaHandPointRight } from "react-icons/fa";
// // // import { motion } from "framer-motion";
// // // import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";

// // // const ToDo = () => {
// // //   const dispatch = useDispatch();
// // //   const bg = useSelector((state) => state.bgcolor.bg);
// // //   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
// // //   const todos = useSelector((state) => state.todo.data);
// // //   const [important, setImportant] = useState(false);

// // //   function formatDateToDDMMYYYY(isoDate) {
// // //     if (!isoDate) return "";
// // //     const [year, month, day] = isoDate.split("-");
// // //     return `${day}-${month}-${year}`;
// // //   }

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     const form = e.target;
// // //     const title = form.tast.value;
// // //     const rawDate = form.data.value;
// // //     const endDate = form.dataend.value;
// // //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// // //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// // //     dispatch(
// // //       add_data({
// // //         title,
// // //         start: formattedDate,
// // //         end: formattedEndDate,
// // //         important,
// // //         complete: false,
// // //       })
// // //     );

// // //     form.reset();
// // //     setImportant(false);
// // //   }

// // //   function removedatafun(id) {
// // //     dispatch(remove_data(id));
// // //   }

// // //   function handleCheckbox(id) {
// // //     dispatch(complete_data(id));
// // //   }

// // //   return (
// // //     <div
// // //       className={`flex flex-col items-center shadow-[12px_10px_15px_rgba(12,12,12,0.9)] w-[65%] border rounded-3xl m-10 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
// // //     >
// // //       {/* 🔥 Gradient Heading */}
// // //       <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center mb-4">
// // //         📝 TO DO LIST
// // //       </h1>

// // //       {/* 📝 Form */}
// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="w-full max-w-3xl bg-white rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
// // //       >
// // //         <input
// // //           type="text"
// // //           name="tast"
// // //           placeholder="➕ Add a Task"
// // //           className="flex-grow bg-transparent text-black placeholder:text-black outline-none"
// // //           required
// // //         />

// // //         <input
// // //           type="date"
// // //           name="data"
// // //           placeholder="Start Date"
// // //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// // //           onFocus={(e) => (e.target.type = "date")}
// // //           onBlur={(e) => {
// // //             if (!e.target.value) e.target.type = "text";
// // //           }}
// // //         />

// // //         <input
// // //           type="date"
// // //           name="dataend"
// // //           placeholder="End Date"
// // //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// // //           onFocus={(e) => (e.target.type = "date")}
// // //           onBlur={(e) => {
// // //             if (!e.target.value) e.target.type = "text";
// // //           }}
// // //         />

// // //         <button
// // //           type="button"
// // //           onClick={() => setImportant((prev) => !prev)}
// // //           className="text-yellow-400 text-2xl focus:outline-none"
// // //         >
// // //           {important ? <FaStar /> : <FaRegStar />}
// // //         </button>

// // //         <button
// // //           type="submit"
// // //           className="text-black px-4 py-1 rounded-full shadow hover:bg-yellow-100 flex items-center gap-1"
// // //         >
// // //           <i className="fa-solid fa-house mr-2"></i>Tasks
// // //         </button>
// // //       </form>

// // //       {/* 📋 Task List with Animation */}
// // //       <div className="w-full max-w-3xl space-y-5">
// // //         {todos.map((task) => (
// // //  <motion.div
// // //     key={task.id}
// // //     layout // 👈 This line does the magic!
// // //     initial={{ opacity: 0, y: 30 }}
// // //     whileInView={{ opacity: 1, y: 0 }}
// // //     viewport={{ once: false, amount: 0.15 }}
// // //     whileHover={{ scale: 1.06 }}
// // //     transition={{
// // //       layout: { duration: 0.4, ease: "easeInOut" },
// // //       duration: 0.5,
// // //       ease: [0.25, 0.8, 0.25, 1],
// // //     }}
// // //     className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[0_4px_12px_rgba(255,165,0,0.4)] transition-transform duration-300 ease-in-out cursor-pointer`}
// // //   >


// // //             {/* ✅ LEFT SIDE */}
// // //             <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
// // //               <h2 className="font-bold text-xl text-white break-words whitespace-pre-wrap flex items-center gap-2">
// // //                 <FaHandPointRight className="text-red-500 text-2xl" />
// // //                 {task.complete ? (
// // //                   <>
// // //                     <span className="line-through">{task.title}</span>
// // //                     <motion.span
// // //                       initial={{ opacity: 0, scale: 0.9 }}
// // //                       animate={{ opacity: 1, scale: 1 }}
// // //                       transition={{ duration: 0.4 }}
// // //                       className="text-green-400 font-medium ml-2"
// // //                     >
// // //                       ✅ Completed 🎉
// // //                     </motion.span>
// // //                   </>
// // //                 ) : (
// // //                   task.title
// // //                 )}
// // //               </h2>

// // //               <div className="flex flex-wrap gap-4 mt-2 text-md text-white">
// // //                 <p>
// // //                   📅 <strong>Start:</strong> {task.start}
// // //                 </p>
// // //                 <p>
// // //                   ⏰ <strong>End:</strong> {task.end}
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             {/* ✅ RIGHT SIDE */}
// // //             <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
// // //               {task.important ? (
// // //                 <FaStar className="text-red-500 text-2xl hover:scale-110 transition-transform" />
// // //               ) : (
// // //                 <FaRegStar className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
// // //               )}

// // //               <label className="flex items-center gap-2 text-white">
// // //                 <input
// // //                   type="checkbox"
// // //                   className="w-5 h-5 accent-green-500"
// // //                   checked={task.complete}
// // //                   onChange={() => handleCheckbox(task.id)}
// // //                 />
// // //                 <span className="text-sm">Done</span>
// // //               </label>

// // //               <button
// // //                 onClick={() => removedatafun(task.id)}
// // //                 className="text-red-500 hover:text-red-700 text-xl transition-all"
// // //               >
// // //                 🗑️
// // //               </button>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ToDo;


// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { add_data, remove_data, complete_data } from "./Slice1";
// // import { FaStar, FaRegStar, FaHandPointRight } from "react-icons/fa";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";

// // const ToDo = () => {
// //   const dispatch = useDispatch();
// //   const bg = useSelector((state) => state.bgcolor.bg);
// //   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
// //   const todos = useSelector((state) => state.todo.data);
// //   const [important, setImportant] = useState(false);

// //   function formatDateToDDMMYYYY(isoDate) {
// //     if (!isoDate) return "";
// //     const [year, month, day] = isoDate.split("-");
// //     return `${day}-${month}-${year}`;
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     const form = e.target;
// //     const title = form.tast.value;
// //     const rawDate = form.data.value;
// //     const endDate = form.dataend.value;
// //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// //     dispatch(
// //       add_data({
// //         title,
// //         start: formattedDate,
// //         end: formattedEndDate,
// //         important,
// //         complete: false,
// //       })
// //     );

// //     form.reset();
// //     setImportant(false);
// //   }

// //   function removedatafun(id) {
// //     dispatch(remove_data(id));
// //   }

// //   function handleCheckbox(id) {
// //     dispatch(complete_data(id));
// //   }

// //   return (
// //     <div
// //       className={`flex flex-col items-center shadow-[12px_10px_15px_rgba(12,12,12,0.9)] w-[65%] border rounded-3xl m-10 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
// //     >
// //       <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-center mb-4">
// //         📝 TO DO LIST
// //       </h1>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-3xl bg-white rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
// //       >
// //         <input
// //           type="text"
// //           name="tast"
// //           placeholder="➕ Add a Task"
// //           className="flex-grow bg-transparent text-black placeholder:text-black outline-none"
// //           required
// //         />

// //         <input
// //           type="date"
// //           name="data"
// //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// //           onFocus={(e) => (e.target.type = "date")}
// //           onBlur={(e) => {
// //             if (!e.target.value) e.target.type = "text";
// //           }}
// //         />

// //         <input
// //           type="date"
// //           name="dataend"
// //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// //           onFocus={(e) => (e.target.type = "date")}
// //           onBlur={(e) => {
// //             if (!e.target.value) e.target.type = "text";
// //           }}
// //         />

// //         <button
// //           type="button"
// //           onClick={() => setImportant((prev) => !prev)}
// //           className="text-yellow-400 text-2xl focus:outline-none"
// //         >
// //           {important ? <FaStar /> : <FaRegStar />}
// //         </button>

// //         <button
// //           type="submit"
// //           className="text-black px-4 py-1 rounded-full shadow hover:bg-yellow-100 flex items-center gap-1"
// //         >
// //           <i className="fa-solid fa-house mr-2"></i>Tasks
// //         </button>
// //       </form>

// //       <div className="w-full max-w-3xl space-y-5">
// //         <AnimatePresence>
// //           {todos.map((task) => (
// //             <motion.div
// //               key={task.id}
// //               layout
// //               initial={{ opacity: 0, scale: 0.9, y: 20 }}
// //               animate={{ opacity: 1, scale: 1, y: 0 }}
// //               exit={{ opacity: 0, scale: 0.8, y: 40 }}
// //               transition={{ duration: 0.4, ease: "easeInOut" }}
// //                 viewport={{ once: false, amount: 0.2 }}
// //               className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[0_4px_12px_rgba(255,165,0,0.4)] mb-4 cursor-pointer`}
// //             >
// //               <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
// //                 <h2 className="font-bold text-xl text-white break-words whitespace-pre-wrap flex items-center gap-2">
// //                   <FaHandPointRight className="text-red-500 text-2xl" />
// //                   {task.complete ? (
// //                     <>
// //                       <span className="line-through">{task.title}</span>
// //                       <motion.span
// //                         initial={{ opacity: 0, scale: 0.9 }}
// //                         animate={{ opacity: 1, scale: 1 }}
// //                         transition={{ duration: 0.4 }}
// //                         className="text-green-400 font-medium ml-2"
// //                       >
// //                         ✅ Completed 🎉
// //                       </motion.span>
// //                     </>
// //                   ) : (
// //                     task.title
// //                   )}
// //                 </h2>

// //                 <div className="flex flex-wrap gap-4 mt-2 text-md text-white">
// //                   <p>
// //                     🗓 <strong>Start:</strong> {task.start}
// //                   </p>
// //                   <p>
// //                     ⏰ <strong>End:</strong> {task.end}
// //                   </p>
// //                 </div>
// //               </div>

// //               <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
// //                 {task.important ? (
// //                   <FaStar className="text-red-500 text-2xl hover:scale-110 transition-transform" />
// //                 ) : (
// //                   <FaRegStar className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
// //                 )}

// //                 <label className="flex items-center gap-2 text-white">
// //                   <input
// //                     type="checkbox"
// //                     className="w-5 h-5 accent-green-500"
// //                     checked={task.complete}
// //                     onChange={() => handleCheckbox(task.id)}
// //                   />
// //                   <span className="text-sm">Done</span>
// //                 </label>

// //                 <button
// //                   onClick={() => removedatafun(task.id)}
// //                   className="text-red-500 hover:text-red-700 text-xl transition-all"
// //                 >
// //                   🖑️
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </AnimatePresence>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ToDo;


// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { add_data, remove_data, complete_data } from "./Slice1";
// // import { FaStar, FaRegStar, FaHandPointRight } from "react-icons/fa";
// // import { motion } from "framer-motion";
// // import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";
// // import { FaTrash } from "react-icons/fa";
// // import Main_logo from "./MainHeading";

// // const ToDo = () => {
// //   const dispatch = useDispatch();
// //   const bg = useSelector((state) => state.bgcolor.bg);
// //   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
// //   const todos = useSelector((state) => state.todo.data);
// //   const [important, setImportant] = useState(false);

// //   function formatDateToDDMMYYYY(isoDate) {
// //     if (!isoDate) return "";
// //     const [year, month, day] = isoDate.split("-");
// //     return `${day}-${month}-${year}`;
// //   }

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     const form = e.target;
// //     const title = form.tast.value;
// //     const rawDate = form.data.value;
// //     const endDate = form.dataend.value;
// //     const formattedDate = formatDateToDDMMYYYY(rawDate);
// //     const formattedEndDate = formatDateToDDMMYYYY(endDate);

// //     dispatch(
// //       add_data({
// //         title,
// //         start: formattedDate,
// //         end: formattedEndDate,
// //         important,
// //         complete: false,
// //       })
// //     );

// //     form.reset();
// //     setImportant(false);
// //   }

// //   function removedatafun(id) {
// //     dispatch(remove_data(id));
// //   }

// //   function handleCheckbox(id) {
// //     dispatch(complete_data(id));
// //   }

// //   return (
// //     <div
// //       className={`flex flex-col items-center shadow-[5px_5px_10px_rgba(0,0,0,0.9)] w-[65%] border rounded-3xl mt-10 mb-10 mr-5 ml-5 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
// //     >
// //       <div className="mb-6 scale-[1.4]">
// //   <Main_logo />
// // </div>


// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-3xl bg-gray-800 rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
// //       >
// //         <input
// //           type="text"
// //           name="tast"
// //           placeholder=" Add a Task"
// //           className="flex-grow bg-transparent text-white placeholder:text-gray-300 outline-none text-xl"
// //           required
// //         />

// //         <input
// //           type="date"
// //           name="data"
// //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// //           onFocus={(e) => (e.target.type = "date")}
// //           onBlur={(e) => {
// //             if (!e.target.value) e.target.type = "text";
// //           }}
// //         />

// //         <input
// //           type="date"
// //           name="dataend"
// //           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
// //           onFocus={(e) => (e.target.type = "date")}
// //           onBlur={(e) => {
// //             if (!e.target.value) e.target.type = "text";
// //           }}
// //         />

// //         <button
// //           type="button"
// //           onClick={() => setImportant((prev) => !prev)}
// //           className="text-yellow-400 text-2xl focus:outline-none"
// //         >
// //           {important ? <FaStar /> : <FaRegStar />}
// //         </button>

// //         <button
// //           type="submit"
// //           className="text-white  text-xl px-4 py-1 rounded-full shadow  flex items-center gap-1"
// //         >
// //           <i className="fa-solid fa-house mr-2"></i>Tasks
// //         </button>
// //       </form>

// //       <div className="w-full max-w-3xl space-y-5">
// //         {todos.map((task) => (
// //           <motion.div
// //             key={task.id}
// //             layout
// //             initial={{ opacity: 0, y: 40, scale: 0.95 }}
// //             whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //             viewport={{ once: false, amount: 0.2 }}
// //             transition={{ duration: 0.5, ease: "easeInOut" }}
// //             whileHover={{ scale: 1.03 }}
// //             className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[5px_5px_12px_rgba(12,12,12,0.9)] mb-4 cursor-pointer transition-transform duration-300`}
// //           >
// //             {/* ✅ Task Left Section */}
// //             <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
// //               <h2 className="font-bold text-xl text-pink-800 break-words whitespace-pre-wrap flex items-center gap-2">
// //                 <FaHandPointRight className="text-pink-800 text-2xl" />
// //                 {task.complete ? (
// //                   <>
// //                     <span className="line-through"
// //                       style={{ textDecorationColor: 'rose-800' }}>{task.title}</span>
// //                     <motion.span
// //                       initial={{ opacity: 0, scale: 0.9 }}
// //                       animate={{ opacity: 1, scale: 1 }}
// //                       transition={{ duration: 0.4 }}
// //                       className="text-green-600 font-medium ml-2"
// //                     >
// //                       Task Completed ✅🎉
// //                     </motion.span>
// //                   </>
// //                 ) : (
// //                   task.title
// //                 )}
// //               </h2>

// //               <div className="flex flex-wrap gap-4 mt-2 text-md text-pink-800">
// //                 <p>
// //                   🗓 <strong>Start:</strong> {task.start}
// //                 </p>
// //                 <p>
// //                   ⏰ <strong>End:</strong> {task.end}
// //                 </p>
// //               </div>
// //             </div>

// //             {/* ✅ Task Right Section */}
// //             <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
// //               {task.important ? (
// //                 <FaStar className="text-yellow-400 text-2xl hover:scale-110 transition-transform" />
// //               ) : (
// //                 <FaRegStar className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
// //               )}

// //               {/* <label className="flex items-center gap-2 text-white">
// //                 <input
// //                   type="checkbox"
// //                   className="w-5 h-5 accent-green-500"
// //                   checked={task.complete}
// //                   onChange={() => handleCheckbox(task.id)}
// //                 />
// //                 <span className="text-sm">Done</span>
// //               </label> */}

// //               <label className="flex items-center gap-2 text-red-600 cursor-pointer">
// //   <input
// //     type="checkbox"
// //     className="peer hidden"
// //     checked={task.complete}
// //     onChange={() => handleCheckbox(task.id)}
// //   />
// //   <div className="w-6 h-6 rounded-full border-2 border-red peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:shadow-[0_0_5px_rgba(34,197,94,0.6)] transition-all duration-300 flex items-center justify-center">
// //     {task.complete && (
// //       <span className="text-white text-xs font-bold">✓</span>
// //     )}
// //   </div>
  
// // </label>


// //               <button
// //                 onClick={() => removedatafun(task.id)}
// //                 className="text-red-800 hover:text-red-700 text-xl transition-all"
// //               >
// //                   <FaTrash />
// //               </button>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ToDo;




// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add_data, remove_data, complete_data } from "./Slice1";
// import { FaStar, FaRegStar, FaHandPointRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";
// import { FaTrash } from "react-icons/fa";
// import Main_logo from "./MainHeading";
// import HomeAnimation from "./home.json";
// const ToDo = () => {
//   const dispatch = useDispatch();
//   const bg = useSelector((state) => state.bgcolor.bg);
//   const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
//   const todos = useSelector((state) => state.todo.data);
//   const [important, setImportant] = useState(false);

//   function formatDateToDDMMYYYY(isoDate) {
//     if (!isoDate) return "";
//     const [year, month, day] = isoDate.split("-");
//     return `${day}-${month}-${year}`;
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const form = e.target;
//     const title = form.tast.value;
//     const rawDate = form.data.value;
//     const endDate = form.dataend.value;
//     const formattedDate = formatDateToDDMMYYYY(rawDate);
//     const formattedEndDate = formatDateToDDMMYYYY(endDate);

//     dispatch(
//       add_data({
//         title,
//         start: formattedDate,
//         end: formattedEndDate,
//         important,
//         complete: false,
//       })
//     );

//     form.reset();
//     setImportant(false);
//   }

//   function removedatafun(id) {
//     dispatch(remove_data(id));
//   }

//   function handleCheckbox(id) {
//     dispatch(complete_data(id));
//   }

//   return (
//     <div
//       className={`flex flex-col items-center shadow-[5px_5px_10px_rgba(0,0,0,0.9)] w-[65%] border rounded-3xl mt-10 mb-10 mr-5 ml-5 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
//     >
//       <div className="mb-6 scale-[1.4]">
//   <Main_logo />
// </div>


//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-3xl bg-gray-800 rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
//       >
//         <input
//           type="text"
//           name="tast"
//           placeholder=" Add a Task"
//           className="flex-grow bg-transparent text-white placeholder:text-gray-300 outline-none text-xl"
//           required
//         />

//         <input
//           type="date"
//           name="data"
//           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
//           onFocus={(e) => (e.target.type = "date")}
//           onBlur={(e) => {
//             if (!e.target.value) e.target.type = "text";
//           }}
//         />

//         <input
//           type="date"
//           name="dataend"
//           className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
//           onFocus={(e) => (e.target.type = "date")}
//           onBlur={(e) => {
//             if (!e.target.value) e.target.type = "text";
//           }}
//         />

//         <button
//           type="button"
//           onClick={() => setImportant((prev) => !prev)}
//           className="text-yellow-400 text-2xl focus:outline-none"
//         >
//           {important ? <FaStar /> : <FaRegStar />}
//         </button>

//         <button
//           type="submit"
//           className="text-white  text-xl px-4 py-1 rounded-full shadow  flex items-center gap-1"
//         >
//           <i className="fa-solid fa-house mr-2"></i>Tasks
//         </button>
//       </form>

//       <div className="w-full max-w-3xl space-y-5">
//         {todos.map((task) => (
//           <motion.div
//             key={task.id}
//             layout
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             whileHover={{ scale: 1.03 }}
//             className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[5px_5px_12px_rgba(12,12,12,0.9)] mb-4 cursor-pointer transition-transform duration-300`}
//           >
//             {/* ✅ Task Left Section */}
//             <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
//               <h2 className="font-bold text-xl text-pink-800 break-words whitespace-pre-wrap flex items-center gap-2">
//                 <FaHandPointRight className="text-pink-800 text-2xl" />
//                 {task.complete ? (
//                   <>
//                     <span className="line-through"
//                       style={{ textDecorationColor: 'rose-800' }}>{task.title}</span>
//                     <motion.span
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.4 }}
//                       className="text-green-600 font-medium ml-2"
//                     >
//                       Task Completed ✅🎉
//                     </motion.span>
//                   </>
//                 ) : (
//                   task.title
//                 )}
//               </h2>

//               <div className="flex flex-wrap gap-4 mt-2 text-md text-pink-800">
//                 <p>
//                   🗓 <strong>Start:</strong> {task.start}
//                 </p>
//                 <p>
//                   ⏰ <strong>End:</strong> {task.end}
//                 </p>
//               </div>
//             </div>

//             {/* ✅ Task Right Section */}
//             <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
//               {task.important ? (
//                 <FaStar className="text-yellow-400 text-2xl hover:scale-110 transition-transform" />
//               ) : (
//                 <FaRegStar className="text-gray-400 text-2xl hover:scale-110 transition-transform" />
//               )}

//               {/* <label className="flex items-center gap-2 text-white">
//                 <input
//                   type="checkbox"
//                   className="w-5 h-5 accent-green-500"
//                   checked={task.complete}
//                   onChange={() => handleCheckbox(task.id)}
//                 />
//                 <span className="text-sm">Done</span>
//               </label> */}

//               <label className="flex items-center gap-2 text-red-600 cursor-pointer">
//   <input
//     type="checkbox"
//     className="peer hidden"
//     checked={task.complete}
//     onChange={() => handleCheckbox(task.id)}
//   />
//   <div className="w-6 h-6 rounded-full border-2 border-red peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:shadow-[0_0_5px_rgba(34,197,94,0.6)] transition-all duration-300 flex items-center justify-center">
//     {task.complete && (
//       <span className="text-white text-xs font-bold">✓</span>
//     )}
//   </div>
  
// </label>


//               <button
//                 onClick={() => removedatafun(task.id)}
//                 className="text-red-800 hover:text-red-700 text-xl transition-all"
//               >
//                   <FaTrash />
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ToDo;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_data, remove_data, complete_data } from "./Slice1";
import { FaStar, FaRegStar, FaHandPointRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { BackgroundChanger, TaskBackgroundChanger } from "./Slice2";
import { FaTrash } from "react-icons/fa";
import Main_logo from "./MainHeading";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

// ✅ import Lottie & animation
import Lottie from "lottie-react";
import homeAnimation from "./home.json"; // 👈 Put your file in `src` folder

const ToDo = () => {
  const dispatch = useDispatch();
  const bg = useSelector((state) => state.bgcolor.bg);
  const bgtask = useSelector((state) => state.bgcolor.bg_taskbox);
  const todos = useSelector((state) => state.todo.data);
  const [important, setImportant] = useState(false);

  function formatDateToDDMMYYYY(isoDate) {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.tast.value;
    const rawDate = form.data.value;
    const endDate = form.dataend.value;
    const formattedDate = formatDateToDDMMYYYY(rawDate);
    const formattedEndDate = formatDateToDDMMYYYY(endDate);

    dispatch(
      add_data({
        title,
        start: formattedDate,
        end: formattedEndDate,
        important,
        complete: false,
      })
    );

    form.reset();
    setImportant(false);
  }

  function removedatafun(id) {
    dispatch(remove_data(id));
  }

  function handleCheckbox(id) {
    dispatch(complete_data(id));
  }

  return (
    <div
      className={`flex flex-col items-center shadow-[5px_5px_10px_rgba(0,0,0,0.9)] w-[65%] border rounded-3xl mt-10 mb-10 mr-5 ml-5 max-h-screen transition-all duration-500 ease-in-out ${bg} p-4 overflow-y-auto hide-scrollbar`}
    >
      <div className="mb-6 scale-[1.4]">
        <Main_logo />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-800 rounded-full p-3 flex flex-wrap items-center gap-2 mb-6"
      >
        <input
          type="text"
          name="tast"
          placeholder=" Add a Task"
          className="flex-grow bg-transparent text-white placeholder:text-gray-300 outline-none text-xl"
          required
        />

        <input
          type="date"
          name="data"
          className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
        />

        <input
          type="date"
          name="dataend"
          className="bg-gray-200 text-black rounded px-3 py-1 placeholder:text-gray-500"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
        />

        <button
          type="button"
          onClick={() => setImportant((prev) => !prev)}
          className="text-yellow-400 text-2xl focus:outline-none"
        >
          {important ? <FaStar /> : <FaRegStar />}
        </button>

        <button
          type="submit"
          className="text-white text-xl px-4 py-1 rounded-full shadow flex items-center gap-1"
        >
          <i className="fa-solid fa-house mr-2"></i>Tasks
        </button>
      </form>

      {/* ✅ Show Lottie animation when no tasks */}
      {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full p-8">
          <div className="w-90 h-70">
            <Lottie animationData={homeAnimation} loop autoplay />
          </div>
          <p className="text-xl text-[blue] mt-4 font-semibold text-center">
            ✨ Focus on your day, Get things done with <span className="text-rose-500 text-center items-center  text-xl">To-Do list</span> that refreshes daily to keep you moving forward.
          </p>
        </div>
      ) : (
        <div className="w-full max-w-3xl space-y-5">
          {todos.map((task) => (
            <motion.div
              key={task.id}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
              className={`${bgtask} px-6 py-4 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center w-full shadow-[5px_5px_12px_rgba(12,12,12,0.9)] mb-4 cursor-pointer transition-transform duration-300`}
            >
              {/* ✅ Task Left Section */}
              <div className="flex-1 min-w-0 break-words overflow-hidden space-y-1">
                <h2 className="font-bold text-xl text-red-600 break-words whitespace-pre-wrap flex items-center gap-2">
                  <FaHandPointRight className="text-red-600 text-2xl" />
                  {task.complete ? (
                    <>
                      <span
                        className="line-through"
                        style={{ textDecorationColor: "rose-800" }}
                      >
                        {task.title}
                      </span>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-green-800 font-medium ml-2"
                      >
                        Task Completed ✅🎉
                      </motion.span>
                    </>
                  ) : (
                    task.title
                  )}
                </h2>

                <div className="flex flex-wrap gap-4 mt-2 text-md text-[blue]">
                  <p>
                    🗓️  <strong>Start:</strong> {task.start}
                  </p>
                  <p>
                  🕒<strong>End:</strong> {task.end}
                  </p>
                </div>
              </div>

              {/* ✅ Task Right Section */}
              <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0 sm:ml-6">
                {task.important ? (
                  <FaStar className="text-yellow-400 text-2xl hover:scale-110 transition-transform" />
                ) : (
                  <FaRegStar className="text-gray-600 text-2xl hover:scale-110 transition-transform" />
                )}

                <label className="flex items-center gap-2 text-red-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    checked={task.complete}
                    onChange={() => handleCheckbox(task.id)}
                  />
                  <div className="w-6 h-6 rounded-full border-2 border-red peer-checked:bg-green-600 peer-checked:border-green-600 peer-checked:shadow-[0_0_5px_rgba(34,197,94,0.6)] transition-all duration-300 flex items-center justify-center">
                    {task.complete && (
                      <span className="text-white text-xs font-bold">✓</span>
                    )}
                  </div>
                </label>

                <button
                  onClick={() => removedatafun(task.id)}
                  className="text-red-600 hover:text-red-700 text-xl transition-all"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToDo;
