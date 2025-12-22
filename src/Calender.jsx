// import { useState, useMemo } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import { MdOutlineDelete } from "react-icons/md";
// import { update_data, remove_data ,important_data} from './Slice1';
// import { FaStar } from "react-icons/fa6";
// import { IoIosStarOutline } from "react-icons/io";


// import { useDispatch, useSelector } from "react-redux";
// const locales = { 'en-US': enUS };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
//   getDay,
//   locales,
// });

// const DnDCalendar = withDragAndDrop(Calendar);

// // ✅ Utility to convert "DD-MM-YYYY" to Date
// function parseDDMMYYYY(dateStr) {
//   const [day, month, year] = dateStr.split('-').map(Number);
//   return new Date(year, month - 1, day); // month is 0-indexed
// }

//  function CalendarPage() {

//   const dispatch = useDispatch()

//   const todos = useSelector((state) => state.todo.data);
//   const [view, setView] = useState('month');
//   const [date, setDate] = useState(new Date());

//   // 👇 Sample input data in DD-MM-YYYY format
//   const rawEvents = todos.map((value) => ({
//     id: value.id,
//     title: value.title,
//     start: value.start,
//     end: value.end,
//   }));


//   // ✅ Convert to valid calendar event format
//   const events = useMemo(() =>
//     rawEvents.map(event => ({
//       ...event,
//       start: parseDDMMYYYY(event.start),
//       end: parseDDMMYYYY(event.end),
//     })), [rawEvents]);


//   const moveEvent = ({ event, start, end }) => {
//     dispatch(update_data({
//       id: event.id,
//       title: event.title, // keep title intact
//       start: format(start, 'dd-MM-yyyy'),
//       end: format(end, 'dd-MM-yyyy'),
//     }));
//   };

//   function removedatafun(e) {
//     dispatch(remove_data(e))
//     console.log(e);
//   }

//   function isimportantupdate(e){
//     dispatch(important_data(e))
//     console.log(e);
//   }

//   return (
//     <div className='max-h-screen w-[75%] mt-10 mb-10 ml-3 rounded-4xl bg-red-200 sm:flex justify-between'>
//       <div className='p-5 sm:w-[70%] sm:h-full border-white bg-red-200 rounded-xl shadow-xl'>
//         <h1 className="text-center text-3xl font-extrabold text-rose-600 mb-6">📅 Calendar</h1>
//         <DnDCalendar
//           className="h-full"
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: '70vh',color:'black' }}
//           views={['month', 'week', 'day', 'agenda']}
//           view={view}
//           onView={setView}
//           date={date}
//           onNavigate={setDate}
//           popup
//           selectable
//           onEventDrop={moveEvent}
//           resizable
//           onEventResize={moveEvent}

//                 eventPropGetter={() => ({
//     style: {
//       backgroundColor: '#fef08a', // Tailwind `yellow-200`
//       borderRadius: '10px',
//       color: 'rgb(193, 9, 9)', // optional text color
//       border: 'none',
//     },
//   })}
//         />
//       </div>

//       <div
//         className="h-full sm:w-[29.5%] bg-green-200 rounded-2xl overflow-y-scroll p-4 space-y-4
//              scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-amber-500
//              direction-rtl"
//       >
//         <div className="direction-ltr space-y-4">
//           {todos.map((value, key) => (
//             <li
//               key={key}
//               className="bg-yellow-100 text-black p-3 rounded-lg shadow-md list-none flex flex-col gap-1"
//             >
//               <strong className="text-lg text-rose-700">{value.title}</strong>
//               <span className="text-sm">📅 Start: {value.start}</span>
//               <span className="text-sm flex items-center gap-1">
//                 <button onClick={()=>isimportantupdate(value.id)}> {value.important ? (
//                   <FaStar className="text-yellow-500" size={24} />
//                 ) : (
//                   <IoIosStarOutline className="text-gray-400" size={24} />
//                 )}</button>
               
//               </span>
//               <button
//                 onClick={() => removedatafun(value.id)}
//                 className="mt-2 px-2 py-1 border border-rose-600 rounded text-rose-700 hover:bg-rose-100 transition flex items-center gap-1 w-fit"
//               >
//                 <MdOutlineDelete />
//                 Remove
//               </button>
//             </li>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CalendarPage;



// //****************************************************************************************************************
// //  */



import { useState, useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { MdOutlineDelete } from "react-icons/md";
import { update_data, remove_data, important_data } from './Slice1';
import { FaStar } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const locales = { 'en-US': enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(Calendar);

// ✅ Utility to convert "DD-MM-YYYY" to Date
function parseDDMMYYYY(dateStr) {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

function CalendarPage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());

  const rawEvents = todos.map((value) => ({
    id: value.id,
    title: value.title,
    start: value.start,
    end: value.end,
  }));

  const events = useMemo(() =>
    rawEvents.map(event => ({
      ...event,
      start: parseDDMMYYYY(event.start),
      end: parseDDMMYYYY(event.end),
    })), [rawEvents]);

  const moveEvent = ({ event, start, end }) => {
    dispatch(update_data({
      id: event.id,
      title: event.title,
      start: format(start, 'dd-MM-yyyy'),
      end: format(end, 'dd-MM-yyyy'),
    }));
  };

  function removedatafun(e) {
    dispatch(remove_data(e));
    console.log(e);
  }

  function isimportantupdate(e) {
    dispatch(important_data(e));
    console.log(e);
  }

  return (
    <div className='max-h-screen w-[75%] mt-10 mb-10 ml-3 rounded-3xl bg-gray-300 sm:flex justify-between hide-scrollbar'>
      <div className='p-5 sm:w-[70%] sm:h-full border-white bg-yellow-100 rounded-xl shadow-xl'>
        <h1 className="text-center text-4xl font-extrabold text-rose-600 mb-6">📅 Calendar</h1>
        <DnDCalendar
          className="h-full"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '70vh', color: 'black' }}
          views={['month', 'week', 'day', 'agenda']}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          popup
          selectable
          onEventDrop={moveEvent}
          resizable
          onEventResize={moveEvent}
          eventPropGetter={() => ({
            style: {
              backgroundColor: '#fef08a',
              borderRadius: '10px',
              color: 'rgb(193, 9, 9)',
              border: 'none',
            },
          })}
        />
      </div>

      {/* <div
        className="h-full sm:w-[29.5%] bg-green-200 rounded-2xl overflow-y-scroll p-4 space-y-4
            scrollbar-none
             direction-rtl"
      > */}
      <div
  className="h-full sm:w-[29.5%] bg-rose-100 rounded-2xl overflow-y-scroll scrollbar-none p-4 space-y-4 direction-rtl"
>

   <div className="direction-ltr space-y-4">
  {todos.map((value, key) => (
    <li
      key={key}
      className="bg-gray-200 text-black p-3 rounded-lg shadow-md list-none flex flex-col gap-2"
    >
      {/* ✅ Title and Star in the same row */}
      <div className="flex justify-between items-center">
        <strong className="text-lg text-rose-600">{value.title}</strong>
        <button onClick={() => isimportantupdate(value.id)}>
          {value.important ? (
            <FaStar className="text-yellow-300" size={20} />
          ) : (
            <IoIosStarOutline className="text-gray-400" size={22} />
          )}
        </button>
      </div>

   {/* Start Time + Delete Button Row */}
<div className="flex justify-between items-center text-[blue] text-sm">
  <span>📅 Start: {value.start}</span>
  <button
    onClick={() => removedatafun(value.id)}
    className="w-10 h-10 flex items-center justify-center border border-rose-500 rounded-full text-rose-700 bg-rose-200 hover:bg-rose-100 transition"
  >
    <MdOutlineDelete size={20} />
  </button>
</div>


    </li>
  ))}
</div>

      </div>
    </div>
  );
}

export default CalendarPage;



// // import { useState, useMemo } from 'react';
// // import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// // import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// // import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// // import 'react-big-calendar/lib/css/react-big-calendar.css';
// // import { format, parse, startOfWeek, getDay } from 'date-fns';
// // import enUS from 'date-fns/locale/en-US';
// // import { MdOutlineDelete } from "react-icons/md";
// // import { update_data, remove_data ,important_data} from './Slice1';
// // import { FaStar } from "react-icons/fa6";
// // import { IoIosStarOutline } from "react-icons/io";


// // import { useDispatch, useSelector } from "react-redux";
// // const locales = { 'en-US': enUS };
// // const localizer = dateFnsLocalizer({
// //   format,
// //   parse,
// //   startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
// //   getDay,
// //   locales,
// // });

// // const DnDCalendar = withDragAndDrop(Calendar);

// // // ✅ Utility to convert "DD-MM-YYYY" to Date
// // function parseDDMMYYYY(dateStr) {
// //   const [day, month, year] = dateStr.split('-').map(Number);
// //   return new Date(year, month - 1, day); // month is 0-indexed
// // }

// //  function CalendarPage() {

// //   const dispatch = useDispatch()

// //   const todos = useSelector((state) => state.todo.data);
// //   const [view, setView] = useState('month');
// //   const [date, setDate] = useState(new Date());

// //   // 👇 Sample input data in DD-MM-YYYY format
// //   const rawEvents = todos.map((value) => ({
// //     id: value.id,
// //     title: value.title,
// //     start: value.start,
// //     end: value.end,
// //   }));


// //   // ✅ Convert to valid calendar event format
// //   const events = useMemo(() =>
// //     rawEvents.map(event => ({
// //       ...event,
// //       start: parseDDMMYYYY(event.start),
// //       end: parseDDMMYYYY(event.end),
// //     })), [rawEvents]);


// //   const moveEvent = ({ event, start, end }) => {
// //     dispatch(update_data({
// //       id: event.id,
// //       title: event.title, // keep title intact
// //       start: format(start, 'dd-MM-yyyy'),
// //       end: format(end, 'dd-MM-yyyy'),
// //     }));
// //   };

// //   function removedatafun(e) {
// //     dispatch(remove_data(e))
// //     console.log(e);
// //   }

// //   function isimportantupdate(e){
// //     dispatch(important_data(e))
// //     console.log(e);
// //   }

// //   return (
// //     <div className='max-h-screen  bg-amber-300 sm:flex justify-between shadow-[5px_5px_10px_rgba(0,0,0,0.9)] w-[75%] rounded-3xl mt-10 mb-10 ml-3 mr-3'>
// //       <div className='p-5 sm:w-[70%] sm:h-full border-2 bg-gradient-to-br from-yellow-100 to-rose-100 rounded-xl shadow-xl'>
// //         <h1 className="text-center text-3xl font-extrabold text-rose-600 mb-6">📅 Calendar</h1>
// //         <DnDCalendar
// //           className="h-full"
// //           localizer={localizer}
// //           events={events}
// //           startAccessor="start"
// //           endAccessor="end"
// //           style={{ height: '70vh' }}
// //           views={['month', 'week', 'day', 'agenda']}
// //           view={view}
// //           onView={setView}
// //           date={date}
// //           onNavigate={setDate}
// //           popup
// //           selectable
// //           onEventDrop={moveEvent}
// //           resizable
// //           onEventResize={moveEvent}
// //         />
// //       </div>

// //       <div
// //         className="h-full sm:w-[29.5%] bg-amber-700 shadow-[5px_5px_10px_rgba(0,0,0,0.9)] rounded-2xl overflow-y-scroll p-4 space-y-4
// //              scrollbar-thin scrollbar-thumb-rose-400 scrollbar-track-amber-500
// //              direction-rtl"
// //       >
// //         <div className="direction-ltr space-y-4">
// //           {todos.map((value, key) => (
// //             <li
// //               key={key}
// //               className="bg-white text-black p-3 rounded-lg shadow-md list-none flex flex-col gap-1"
// //             >
// //               <strong className="text-lg text-rose-700">{value.title}</strong>
// //               <span className="text-sm">📅 Start: {value.start}</span>
// //               <span className="text-sm flex items-center gap-1">
// //                 <button onClick={()=>isimportantupdate(value.id)}> {value.important ? (
// //                   <FaStar className="text-yellow-500" size={24} />
// //                 ) : (
// //                   <IoIosStarOutline className="text-gray-400" size={24} />
// //                 )}</button>
               
// //               </span>
// //               <button
// //                 onClick={() => removedatafun(value.id)}
// //                 className="mt-2 px-2 py-1 border border-rose-600 rounded text-rose-700 hover:bg-rose-100 transition flex items-center gap-1 w-fit"
// //               >
// //                 <MdOutlineDelete />
// //                 Remove
// //               </button>
// //             </li>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CalendarPage;


// import { useState, useMemo } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import { MdOutlineDelete } from "react-icons/md";
// import { update_data, remove_data, important_data } from './Slice1';
// import { FaStar } from "react-icons/fa6";
// import { IoIosStarOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";

// const locales = { 'en-US': enUS };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
//   getDay,
//   locales,
// });

// const DnDCalendar = withDragAndDrop(Calendar);

// function parseDDMMYYYY(dateStr) {
//   const [day, month, year] = dateStr.split('-').map(Number);
//   return new Date(year, month - 1, day);
// }

// function CalendarPage() {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todo.data);
//   const [view, setView] = useState('month');
//   const [date, setDate] = useState(new Date());

//   const rawEvents = todos.map((value) => ({
//     id: value.id,
//     title: value.title,
//     start: value.start,
//     end: value.end,
//   }));

//   const events = useMemo(() =>
//     rawEvents.map(event => ({
//       ...event,
//       start: parseDDMMYYYY(event.start),
//       end: parseDDMMYYYY(event.end),
//     })), [rawEvents]);

//   const moveEvent = ({ event, start, end }) => {
//     dispatch(update_data({
//       id: event.id,
//       title: event.title,
//       start: format(start, 'dd-MM-yyyy'),
//       end: format(end, 'dd-MM-yyyy'),
//     }));
//   };

//   const removedatafun = (id) => dispatch(remove_data(id));
//   const isimportantupdate = (id) => dispatch(important_data(id));

//   return (
//     <div className="max-h-screen bg-gradient-to-br from-amber-100 to-rose-200 sm:flex justify-between shadow-[5px_5px_12px_rgba(0,0,0,0.25)] w-[95%] mx-auto rounded-3xl mt-10 mb-10">
      
//       {/* Calendar Section */}
//       <div className="p-5 sm:w-[70%] border-2 border-white bg-green-200 rounded-l-3xl shadow-xl">
//         <h1 className="text-center text-3xl font-extrabold text-rose-600 mb-6">
//           📅 Schedule Calendar
//         </h1>

//         <DnDCalendar
//           className="h-full"
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: '70vh' }}
//           views={['month', 'week', 'day', 'agenda']}
//           view={view}
//           onView={setView}
//           date={date}
//           onNavigate={setDate}
//           popup
//           selectable
//           onEventDrop={moveEvent}
//           resizable
//           onEventResize={moveEvent}
//         />
//       </div>

//       {/* Task List Section */}
//       <div className="h-full sm:w-[30%] bg-gradient-to-br from-yellow-300 to-rose-300 shadow-inner rounded-r-3xl overflow-y-auto p-5 space-y-4
//         scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-yellow-200">
        
//         <h2 className="text-xl font-bold text-rose-800 mb-4 text-center">📋 Task List</h2>

//         {todos.length === 0 ? (
//           <p className="text-center text-gray-600 italic">No tasks found</p>
//         ) : (
//           todos.map((task) => (
//             <li
//               key={task.id}
//               className="bg-white border-l-4 border-yellow-500 text-black p-4 rounded-xl shadow-md list-none flex flex-col gap-2 transition hover:shadow-lg"
//             >
//               <strong className="text-lg text-rose-700">{task.title}</strong>
//               <span className="text-sm">📅 Start: {task.start}</span>
//               <span className="text-sm">⏳ End: {task.end}</span>

//               <div className="flex items-center justify-between mt-2">
//                 <button onClick={() => isimportantupdate(task.id)}>
//                   {task.important ? (
//                     <FaStar className="text-yellow-500" size={22} />
//                   ) : (
//                     <IoIosStarOutline className="text-gray-400" size={22} />
//                   )}
//                 </button>

//                 <button
//                   onClick={() => removedatafun(task.id)}
//                   className="flex items-center gap-1 px-2 py-1 border border-rose-600 rounded text-rose-700 hover:bg-rose-100 transition text-sm"
//                 >
//                   <MdOutlineDelete />
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default CalendarPage;


// import { useState, useMemo } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import { MdOutlineDelete } from "react-icons/md";
// import { update_data, remove_data, important_data } from './Slice1';
// import { FaStar } from "react-icons/fa6";
// import { IoIosStarOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";

// const locales = { 'en-US': enUS };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
//   getDay,
//   locales,
// });

// const DnDCalendar = withDragAndDrop(Calendar);

// // Utility
// function parseDDMMYYYY(dateStr) {
//   const [day, month, year] = dateStr.split('-').map(Number);
//   return new Date(year, month - 1, day);
// }

// function CalendarPage() {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todo.data);
//   const [view, setView] = useState('month');
//   const [date, setDate] = useState(new Date());

//   const rawEvents = todos.map((value) => ({
//     id: value.id,
//     title: value.title,
//     start: value.start,
//     end: value.end,
//   }));

//   const events = useMemo(() =>
//     rawEvents.map(event => ({
//       ...event,
//       start: parseDDMMYYYY(event.start),
//       end: parseDDMMYYYY(event.end),
//     })), [rawEvents]);

//   const moveEvent = ({ event, start, end }) => {
//     dispatch(update_data({
//       id: event.id,
//       title: event.title,
//       start: format(start, 'dd-MM-yyyy'),
//       end: format(end, 'dd-MM-yyyy'),
//     }));
//   };

//   const removedatafun = (id) => dispatch(remove_data(id));
//   const isimportantupdate = (id) => dispatch(important_data(id));

//   return (
//     <div className="max-h-screen bg-gradient-to-br from-amber-100 to-rose-200 sm:flex justify-between shadow-[5px_5px_12px_rgba(0,0,0,0.25)] w-[95%] mx-auto rounded-3xl mt-10 mb-10">
      
//       {/* Calendar Section */}
//       <div className="p-5 sm:w-[70%] border-2 border-white bg-rose-200 rounded-l-3xl shadow-xl text-rose-600">
//         <h1 className="text-center text-3xl font-extrabold mb-6">
//           📅 Schedule Calendar
//         </h1>

//         <DnDCalendar
//           className="h-full text-rose-600"
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: '70vh', color: 'black' }} // Tailwind rose-600 hex
//           views={['month', 'week', 'day', 'agenda']}
//           view={view}
//           onView={setView}
//           date={date}
//           onNavigate={setDate}
//           popup
//           selectable
//           onEventDrop={moveEvent}
//           resizable
//           onEventResize={moveEvent}


//            eventPropGetter={() => ({
//     style: {
//       backgroundColor: '#fef08a', // Tailwind `yellow-200`
//       borderRadius: '10px',
//       color: 'rgb(193, 9, 9)', // optional text color
//       border: 'none',
//     },
//   })}
//         />
//       </div>

//       {/* Task List Section */}
//       <div className="h-full sm:w-[30%] bg-green-200 shadow-inner rounded-r-3xl overflow-y-auto p-3 space-y-4
//         scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-yellow-200 text-rose-600">
        
//         <h2 className="text-xl font-bold mb-4 text-center">📋 Task List</h2>

//         {todos.length === 0 ? (
//           <p className="text-center italic">No tasks found</p>
//         ) : (
//           todos.map((task) => (
//             <li
//               key={task.id}
//             >
//               <strong className="text-lg">{task.title}</strong>
//              <div className="flex items-center justify-between text-sm ">
//   <span>📅 Start: {task.start}</span>
//   <button onClick={() => isimportantupdate(task.id)}>
//     {task.important ? (
//       <FaStar className="text-yellow-500" size={18} />
//     ) : (
//       <IoIosStarOutline className="text-gray-400" size={18} />
//     )}
//   </button>
// </div>

//               <span className="text-sm">⏳ End: {task.end}</span>

//               <div className="flex items-center justify-between mt-2">
//                 {/* <button onClick={() => isimportantupdate(task.id)}>
//                   {task.important ? (
//                     <FaStar className="text-yellow-500" size={22} />
//                   ) : (
//                     <IoIosStarOutline className="text-gray-400" size={22} />
//                   )}
//                 </button> */}

//                 <button
//                   onClick={() => removedatafun(task.id)}
//                   className="flex items-center gap-1 px-2 py-1 border border-rose-600 rounded hover:bg-rose-100 transition text-sm"
//                 >
//                   <MdOutlineDelete />
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default CalendarPage;
