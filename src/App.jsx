
// //***********************************************************************************************************************

// // import React from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Frontpage from "./Frontpage";
// // import ToDo from "./ToDo";
// // import Navbar from "./Navbar";
// // import Taskbox3 from "./Taskbox3";
// // import Important from "./Important";
// // import CalendarPage from "./Calender";
// // import OverallSetting from "./OverallSetting";
// // import ClockTools from "./ClockTools";

// // function AppLayout() {
// //   return (
// //     <div className="flex bg-[#ef440b] h-screen">
// //       <Navbar />
// //       <Routes>
// //         <Route path="/home" element={<ToDo />} />
// //         <Route path="/important" element={<Important />} />
// //         <Route path="/calender" element={<CalendarPage />} />
// //         <Route path="/overallsetting" element={<OverallSetting />} />
// //         <Route path="/clocktools" element={<ClockTools />} />
// //       </Routes>
// //       <Taskbox3 />
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Frontpage />} />
// //         <Route path="/*" element={<AppLayout />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// //********************************************************************************************************************************************************* */



import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./Frontpage";
import ToDo from "./ToDo";
import Navbar from "./Navbar";
import Taskbox3 from "./Taskbox3";
import Important from "./Important";
import CalendarPage from "./Calender";
import OverallSetting from "./OverallSetting";
import ClockTools from "./ClockTools";


function AppLayout() {
  return (
    <div className="flex bg-black/85 h-screen w-screen ">
      <Navbar />
      <Routes>
        <Route path="/home" element={<ToDo />} />
        <Route path="/important" element={<Important />} />
        <Route path="/calender" element={<CalendarPage />} />
        <Route path="/overallsetting" element={<OverallSetting />} />
        <Route path="/clocktools" element={<ClockTools />} />
     
      </Routes>
      <Taskbox3 />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
////////////finalllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll//////////////////

