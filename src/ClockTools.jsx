//********************************************************************************************** */
// import React, { useState } from "react";
// import Stopwatch from "./StopWatch";
// import Timer from "./Timer";

// const ClockTools = () => {
//   const [activeTools, setActiveTools] = useState("stopwatch");

//   return (
  
//     <div className="w-[55%] h-[90vh] mx-auto mt-10 rounded-xl border-4 border-[#2e2e2e] shadow-2xl bg-[#1a1a1a] flex flex-col overflow-y-auto">

//       <div className="flex text-lg font-semibold text-white">
//         <button
//           onClick={() => setActiveTools("stopwatch")}
//           className={`w-1/2 h-14 transition-all duration-300 ${
//             activeTools === "stopwatch"
//               ? "bg-gradient-to-r from-cyan-500 to-blue-500"
//               : "bg-[#2b2b2b] hover:bg-[#3b3b3b]"
//           }`}
//         >
//           ⏱ Stopwatch
//         </button>
//         <button
//           onClick={() => setActiveTools("timer")}
//           className={`w-1/2 h-14 transition-all duration-300 ${
//             activeTools === "timer"
//               ? "bg-gradient-to-r from-pink-500 to-purple-600"
//               : "bg-[#2b2b2b] hover:bg-[#3b3b3b]"
//           }`}
//         >
//           ⏳ Timer
//         </button>
//       </div>

   
//       <div className="flex-grow">
//         {activeTools === "stopwatch" ? <Stopwatch /> : <Timer />}
//       </div>
//     </div>
//   );
// };

// export default ClockTools;
//****************************************************************************************************************8 */

import React, { useState } from "react";
import Stopwatch from "./StopWatch";
import Timer from "./Timer";

const ClockTools = () => {
  const [activeTools, setActiveTools] = useState("timer");

  return (
    // 
    <div className="w-[70%] h-[90vh] shadow-[5px_5px_10px_rgba(0,0,0,0.9)] mx-auto mt-10 rounded-xl border-4 border-[#2e2e2e]  bg-[#1a1a1a] flex flex-col overflow-y-auto">

      {/* Tabs */}
      <div className="flex text-3xl font-semibold text-white ">
        <button
          onClick={() => setActiveTools("stopwatch")}
          className={`w-1/2 h-14 transition-all duration-300 border-white ${
            activeTools === "stopwatch"
              ? "bg-gradient-to-r from-black/80 via-zinc-800/70 to-gray-700/50 backdrop-blur-md"
              : "bg-gray-700 text-black"
          }`}
        >
          ⏱ Stopwatch
        </button>
        <button
          onClick={() => setActiveTools("timer")}
          className={`w-1/2 h-14 transition-all duration-300 ${
            activeTools === "timer"
            ? "bg-gradient-to-r from-black/80 via-zinc-800/70 to-gray-700/50 backdrop-blur-md"
              : "bg-gray-700 text-black"
          }`}
        >
          ⏳ Timer
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow">
        {activeTools === "stopwatch" ? <Stopwatch /> : <Timer />}
      </div>
    </div>
  );
};

export default ClockTools;