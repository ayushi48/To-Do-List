
// // // // // // import React from "react";
// // // // // // import { useDispatch,useSelector } from "react-redux";
// // // // // // import { add_data, remove_data, complete_data } from "./Slice1";

// // // // // // const Taskbox3 = () => {
// // // // // // const dispatch = useDispatch();
// // // // // //    const todos = useSelector((state) => state.todo.data);


// // // // // //        dispatch(
// // // // // //          add_data({
// // // // // //            title,
// // // // // //            start: formattedDate,
// // // // // //            end: formattedEndDate,
// // // // // //            important,
// // // // // //            complete: false, // ✅ new task is not completed by default
// // // // // //          })
// // // // // //        );
// // // // // //   return (
// // // // // //     <div className="w-[25%] bg-amber-300 p-4 space-y-4 text-white m-7 mt-4 rounded-3xl transition-all">
// // // // // //       <h2 className="text-xl font-bold">List of task </h2>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Taskbox3;

// // // // // import React from "react";
// // // // // import { useSelector } from "react-redux";

// // // // // // Sample background colors (you can customize or expand this list)
// // // // // const cardColors = [
// // // // //   "bg-red-300",
// // // // //   "bg-yellow-300",
// // // // //   "bg-green-300",
// // // // //   "bg-blue-300",
// // // // //   "bg-purple-300",
// // // // //   "bg-pink-300",
// // // // //   "bg-orange-300",
// // // // //   "bg-lime-300",
// // // // // ];

// // // // // const Taskbox3 = () => {
// // // // //   const todos = useSelector((state) => state.todo.data);

// // // // //   return (
// // // // //     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4">
// // // // //       <h2 className="text-xl font-bold text-center text-pink-800 underline mb-2">
// // // // //         📋 List of Tasks
// // // // //       </h2>

// // // // //       {todos.length === 0 ? (
// // // // //         <p className="text-gray-600 text-center">No tasks available.</p>
// // // // //       ) : (
// // // // //         todos.map((todo, index) => (
// // // // //           <div
// // // // //             key={todo.id}
// // // // //             className={`p-4 rounded-xl shadow-md text-black font-semibold ${cardColors[index% cardColors.length]}`}>
// // // // //             📌 {todo.title}
// // // // //           </div>
// // // // //         ))
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };
// // // // // export default Taskbox3;

// // // // import React from "react";
// // // // import { useSelector } from "react-redux";

// // // // const cardColors = [
// // // //   "bg-red-300",
// // // //   "bg-yellow-300",
// // // //   "bg-green-300",
// // // //   "bg-blue-300",
// // // //   "bg-purple-300",
// // // //   "bg-pink-300",
// // // //   "bg-orange-300",
// // // //   "bg-lime-300",
// // // // ];

// // // // const Taskbox3 = () => {
// // // //   const todos = useSelector((state) => state.todo.data);

// // // //   return (
// // // //     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4">
// // // //       <h2 className="text-xl font-bold text-center text-pink-800 underline mb-2">
// // // //         📋 List of Tasks
// // // //       </h2>

// // // //       {todos.length === 0 ? (
// // // //         <p className="text-gray-600 text-center">No tasks available.</p>
// // // //       ) : (
// // // //         todos.map((todo, index) => (
// // // //           <div
// // // //             key={todo.id || index}
// // // //             className={`p-4 rounded-xl h-30 shadow-md text-black font-semibold  transition-transform duration-300 transform hover:scale-105 hover:shadow-xl 
// // // //                ${cardColors[index % cardColors.length]}`}
// // // //           >
// // // //             📌 {todo.title}
// // // //           </div>
// // // //         ))
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Taskbox3;
// // import React from "react";
// // import { useSelector } from "react-redux";

// // // Sample background colors
// // const cardColors = [
// //   "bg-red-300",
// //   "bg-yellow-300",
// //   "bg-green-300",
// //   "bg-blue-300",
// //   "bg-purple-300",
// //   "bg-pink-300",
// //   "bg-orange-300",
// //   "bg-lime-300",
// // ];

// // const Taskbox3 = () => {
// //   const todos = useSelector((state) => state.todo.data);


// //   const handleClick=(id)=>{
// // const target=todos.find(todo=>todo.id===id);
// // const rest=todos.filter(todo=>todo.id!==id);
// // newArray= [target,...rest];

// //   }
// //   return (
// //     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4 bg-yellow-500">
// //       <h2 className="text-3xl font-bold text-center text-pink-800 underline mb-6">
// //         📋 List of Tasks
// //       </h2>

// //       {todos.length === 0 ? (
// //         <p className="text-gray-600 text-center text-2xl">No tasks available.</p>
// //       ) : (
// //         todos.map((todo, index) => (
// //           <div
// //             key={todo.id || index}
// //             onClick={() => handleClick(todo.id)}
// //             className={`relative z-[${index}] p-4 rounded-xl shadow-md text-black font-semibold
// //               transition-transform duration-300 transform hover:scale-105 hover:shadow-xl
// //               break-words whitespace-normal text-[20px] -mt-8 hover:z-50 
// //               ${cardColors[index % cardColors.length]}`}
// //           >
// //             <div className="flex items-center justify-between">
// //               <span className="max-w-[85%] break-words">{todo.title}</span>
// //               {todo.important && (
// //                 <span className="text-yellow-600 text-xl">⭐</span>
// //               )}
// //             </div>

// //             <p
// //               className={`mt-2 text-[15px] font-medium ${
// //                 todo.complete ? "text-green-600" : "text-red-600"
// //               }`}
// //             >
// //               {todo.complete ? "✅ Completed" : "⏳ Pending"}
// //             </p>
// //           </div>
// //         ))
// //       )}
// //     </div>
// //   );
// // };

// // export default Taskbox3;


// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const cardColors = [
//   "bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300",
//   "bg-purple-300", "bg-pink-300", "bg-orange-300", "bg-lime-300",
// ];

// const Taskbox3 = () => {
//   const todos= useSelector((state) => state.todo.data);

//   // Local state to control visual order
//   const [todolocal, setTodoLocal] = useState([]);

//   // Keep Redux todos in sync with local state
//   useEffect(() => {
//     setTodoLocal(todos);
//   }, [todos]);

//   // Move clicked todo to the top of the deck
//   const handleClick = (id) => {
//     const target = todolocal.find((todo) => todo.id === id);
//     const rest = todolocal.filter((todo) => todo.id !== id);
//     setTodoLocal([target, ...rest]);
//   };

//   return (
//     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4 bg-yellow-100">
//       <h2 className="text-3xl font-bold text-center text-pink-800 underline mb-6">
//         📋 List of Tasks
//       </h2>

//       {todos.length === 0 ? (
//         <p className="text-gray-600 text-center text-2xl">No tasks available.</p>
//       ) : (
//         todolocal.map((todo, index) => (
//           <div
//             key={todo.id}
//             onClick={() => handleClick(todo.id)}
//             className={`relative z-[${index}] p-4 rounded-xl shadow-md text-black font-semibold
//               transition-transform duration-300 transform hover:scale-105 hover:shadow-xl
//               break-words whitespace-normal text-[20px] -mt-8 hover:z-50 cursor-pointer
//               ${cardColors[index % cardColors.length]}`}
//           >
//             <div className="flex items-center justify-between">
//               <span className="max-w-[85%] break-words">{todo.title}</span>
//               {todo.important && <span className="text-yellow-600 text-xl">⭐</span>}
//             </div>
//             <p className={`mt-2 text-[15px] font-medium ${
//               todo.complete ? "text-green-600" : "text-red-600"
//             }`}>
//               {todo.complete ? "✅ Completed" : "⏳ Pending"}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Taskbox3;

//**********************************************************************************88888 */
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion"; // ✅ Import framer-motion

// const cardColors = [
//   "bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300",
//   "bg-purple-300", "bg-pink-300", "bg-orange-300", "bg-lime-300",
// ];

// const Taskbox3 = () => {
//   const todosFromRedux = useSelector((state) => state.todo.data);
//   // const todosize=todosFromRedux.length
//   // console.log(todosize)
//   // console.log("hello");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setTodos(todosFromRedux);
//   }, [todosFromRedux]);

//   const handleClick = (id) => {
//   const clicked = todos.find((todo) => todo.id === id);
//   const others = todos.filter((todo) => todo.id !== id);

//   if (clicked.important) {
//     // Move clicked important task to top of important group
//     const important = others.filter((todo) => todo.important);
//     const nonImportant = others.filter((todo) => !todo.important);
//     setTodos([clicked, ...important, ...nonImportant]);
//   } else {
//     // Move clicked non-important task to top of non-important group
//     const important = others.filter((todo) => todo.important);
//     const nonImportant = others.filter((todo) => !todo.important);
//     setTodos([...important, clicked, ...nonImportant]);
//   }
// };

 

//   return (
//     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4 bg-yellow-100">
//       <h2 className="text-3xl font-bold text-center text-pink-800 underline mb-6">
//         📋 List of Tasks
//       </h2>

//       {todos.length === 0 ? (
//         <p className="text-gray-600 text-center text-2xl">No tasks available.</p>
//       ) : (
//         <div className="relative">
//           <AnimatePresence>
//             {todos.map((todo, index) => (
//               <motion.div
//                 key={todo.id}
//                 layout // ✅ magic for smooth movement
//                 onClick={() => handleClick(todo.id)}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                 className={`relative z-[${index}] p-4 rounded-xl shadow-md text-black font-semibold
//                   break-all text-[20px] -mb-5  hover:z-50 cursor-pointer
// hover:scale-105 hover:shadow-2xl transition-transform duration-300

//                   ${cardColors[index % cardColors.length]}`}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="max-w-[85%] break-words">{todo.title}</span>
//                   {todo.important && (
//                     <span className="text-yellow-600 text-xl">⭐</span>
//                   )}
//                 </div>
//                 <p
//                   className={`mt-2 text-[15px] font-medium ${
//                     todo.complete ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {todo.complete ? "✅ Completed" : "⏳ Pending"}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Taskbox3;

//**********************************************************************************************8 */

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion"; // ✅ Import framer-motion

// const cardColors = [
//   "bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300",
//   "bg-purple-300", "bg-pink-300", "bg-orange-300", "bg-lime-300",
// ];

// const Taskbox3 = () => {
//   const todosFromRedux = useSelector((state) => state.todo.data);
//   // const todosize=todosFromRedux.length
//   // console.log(todosize)
//   // console.log("hello");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setTodos(todosFromRedux);
//   }, [todosFromRedux]);

//   const handleClick = (id) => {
//   const clicked = todos.find((todo) => todo.id === id);
//   const others = todos.filter((todo) => todo.id !== id);

//   if (clicked.important) {
//     // Move clicked important task to top of important group
//     const important = others.filter((todo) => todo.important);
//     const nonImportant = others.filter((todo) => !todo.important);
//     setTodos([clicked, ...important, ...nonImportant]);
//   } else {
//     // Move clicked non-important task to top of non-important group
//     const important = others.filter((todo) => todo.important);
//     const nonImportant = others.filter((todo) => !todo.important);
//     setTodos([...important, clicked, ...nonImportant]);
//   }
// };

 

//   return (
//     <div className="w-[25%] p-4 m-7 mt-4 rounded-3xl transition-all space-y-4 bg-yellow-100">
//       <h2 className="text-3xl font-bold text-center text-pink-800 underline mb-6">
//         📋 List of Tasks
//       </h2>

//       {todos.length === 0 ? (
//         <p className="text-gray-600 text-center text-2xl">No tasks available.</p>
//       ) : (
//         <div className="relative">
//           <AnimatePresence>
//             {todos.map((todo, index) => (
//               <motion.div
//                 key={todo.id}
//                 layout // ✅ magic for smooth movement
//                 onClick={() => handleClick(todo.id)}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 25 }}
//                 className={`relative z-[${index}] p-4 rounded-xl shadow-md text-black font-semibold
//                   break-all text-[20px] -mb-5  hover:z-50 cursor-pointer
// hover:scale-105 hover:shadow-2xl transition-transform duration-300

//                   ${cardColors[index % cardColors.length]}`}
//               >
//                 <div className="flex items-center justify-between">
//                   <span className="max-w-[85%] break-words">{todo.title}</span>
//                   {todo.important && (
//                     <span className="text-yellow-600 text-xl">⭐</span>
//                   )}
//                 </div>
//                 <p
//                   className={`mt-2 text-[15px] font-medium ${
//                     todo.complete ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   {todo.complete ? "✅ Completed" : "⏳ Pending"}
//                 </p>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Taskbox3;
//***************************************************************************************8 */



import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import framer-motion

// const cardColors = [
//   "bg-red-300", "bg-yellow-300", "bg-green-300", "bg-blue-300",
//   "bg-purple-300", "bg-pink-300", "bg-orange-300", "bg-lime-300",
// ];


const cardColors = [
  "bg-red-300", 
  "bg-yellow-100", 
  "bg-green-300", 
  
  "bg-purple-300", 
  "bg-pink-300", 
  "bg-purple-300", 
  "bg-orange-300", 
  
  "bg-rose-300",
];

const Taskbox3 = () => {
  const todosFromRedux = useSelector((state) => state.todo.data);
  // const todosize=todosFromRedux.length
  // console.log(todosize)
  // console.log("hello");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(todosFromRedux);
  }, [todosFromRedux]);

  const handleClick = (id) => {
  const clicked = todos.find((todo) => todo.id === id);
  const others = todos.filter((todo) => todo.id !== id);

  if (clicked.important) {
    // Move clicked important task to top of important group
    const important = others.filter((todo) => todo.important);
    const nonImportant = others.filter((todo) => !todo.important);
    setTodos([clicked, ...important, ...nonImportant]);
  } else {
    // Move clicked non-important task to top of non-important group
    const important = others.filter((todo) => todo.important);
    const nonImportant = others.filter((todo) => !todo.important);
    setTodos([...important, clicked, ...nonImportant]);
  }
};

 

  return (
    <div className="w-[25%] hide-scrollbar p-4 m-10 rounded-3xl transition-all space-y-4 bg-gray-200 shadow-[5px_5px_10px_rgba(0,0,0,0.9)]">
  

      <h2 className="text-3xl font-bold text-center  text-[blue]  mb-6">
        📋 List of Tasks
        <hr></hr>
      </h2>

      {todos.length === 0 ? (
        <div className="flex items-center justify-center h-[300px] text-center">
    <p className="text-lg text-[blue] font-semibold  mt-25">
      Your task space is empty — ready for your next great idea! ✨📝
    </p>
  </div>
      ) : (
        <div className="relative">
          <AnimatePresence>
            {todos.map((todo, index) => (
              <motion.div
                key={todo.id}
                layout // ✅ magic for smooth movement
                onClick={() => handleClick(todo.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative z-[${index}] p-4 rounded-xl shadow-md text-black font-semibold
                  break-all text-[20px] -mb-5  hover:z-50 cursor-pointer
hover:scale-105 hover:shadow-2xl transition-transform duration-300

                  ${cardColors[index % cardColors.length]}`}
              >
                <div className="flex items-center justify-between">
                  <span className="max-w-[85%] text-[blue] break-words">{todo.title}</span>
                  {todo.important && (
                    <span className="text-yellow-500 text-xl">⭐</span>
                  )}
                </div>
                <p
                  className={`mt-2 text-[15px] font-medium ${
                    todo.complete ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {todo.complete ? "✅ Completed" : "⏳ Pending"}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Taskbox3;
