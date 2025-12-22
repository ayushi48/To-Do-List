// import React from "react";
// import { useSelector } from "react-redux";
// import { FaSpinner, FaClock, FaClipboardCheck, FaBan } from "react-icons/fa";

// const TaskStatusCards = () => {
//   const todos = useSelector((state) => state.todo.data);

//   const onGoing = todos.filter((task) => !task.complete && !task.important).length;
//   const inProcess = todos.filter((task) => task.important && !task.complete).length;
//   const completed = todos.filter((task) => task.complete).length;
//   const canceled = todos.filter((task) => task.canceled).length; // You can add 'canceled' field logic later

//   const cards = [
//     {
//       title: "On going",
//       count: onGoing,
//       icon: <FaSpinner size={28} />,
//       bg: "bg-blue-500",
//     },
//     {
//       title: "In Process",
//       count: inProcess,
//       icon: <FaClock size={28} />,
//       bg: "bg-yellow-400",
//     },
//     {
//       title: "Completed",
//       count: completed,
//       icon: <FaClipboardCheck size={28} />,
//       bg: "bg-teal-400",
//     },
//     {
//       title: "Canceled",
//       count: canceled,
//       icon: <FaBan size={28} />,
//       bg: "bg-red-400",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-2 gap-4 w-full max-w-xl mx-auto mt-6">
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`rounded-2xl text-white p-4 flex flex-col items-start gap-1 ${card.bg} shadow-md`}
//         >
//           <div className="opacity-90">{card.icon}</div>
//           <h3 className="font-bold text-lg">{card.title}</h3>
//           <p className="text-sm opacity-80">{card.count} Tasks</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskStatusCards;


import React from "react";
import { useSelector } from "react-redux";
import { FaSpinner, FaClock, FaClipboardCheck, FaBan } from "react-icons/fa";

const TaskStatusCards = () => {
  const todos = useSelector((state) => state.todo.data);

  const onGoing = todos.filter((task) => !task.complete && !task.important).length;
  const inProcess = todos.filter((task) => task.important && !task.complete).length;
  const completed = todos.filter((task) => task.complete).length;
  const canceled = todos.filter((task) => task.canceled).length; // You can add 'canceled' field logic later

  const cards = [
    {
      title: "On going",
      count: onGoing,
      icon: <FaSpinner size={22} />,
      bg: "bg-[#3a3afe]",
    },
    {
      title: "In Process",
      count: inProcess,
      icon: <FaClock size={22} />,
      bg: "bg-[#f7c617]",
    },
    {
      title: "Completed",
      count: completed,
      icon: <FaClipboardCheck size={22} />,
      bg: "bg-green-600",
    },
    {
      title: "Canceled",
      count: canceled,
      icon: <FaBan size={22} />,
      bg: "bg-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-xl mx-auto mt-6  ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-2xl text-white p-2 flex flex-col items-start gap-1 ${card.bg} shadow-[5px_5px_20px_rgba(0,0,0,0.7)]`}
        >
          <div className="flex items-center gap-2">
            <span>{card.icon}</span>
            <h3 className="font-bold text-lg">{card.title}</h3>
          </div>
          <p className="text-lg font-bold opacity-100">{card.count} Tasks</p>
        </div>
      ))}
    </div>
  );
};

export default TaskStatusCards;
