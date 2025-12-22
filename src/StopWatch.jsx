// // // import React, { useState, useEffect } from "react";

// // // import { CountdownCircleTimer } from "react-countdown-circle-timer";
// // // import './index.css';

// // // function Stopwatch() {
// // //   const [time, setTime] = useState(0);
// // //   const [isRunning, setIsRunning] = useState(false);
// // //   const [key, setKey] = useState(0);

// // //   useEffect(() => {
// // //     let interval;
// // //     if (isRunning) {
// // //       interval = setInterval(() => {
// // //         setTime((prev) => {
// // //           const newTime = prev + 1;
// // //           if (newTime % 5 === 0) setKey((k) => k + 1);
// // //           return newTime;
// // //         });
// // //       }, 1000);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isRunning]);

// // //   const formatTime = (t) => {
// // //     const min = String(Math.floor(t / 60)).padStart(2, "0");
// // //     const sec = String(t % 60).padStart(2, "0");
// // //     return `${min}:${sec}`;
// // //   };

// // //   return (
// // //     <div className="flex flex-col items-center mt-16 space-y-6">
// // //       <h2 className=" text-2xl font-semibold px-6 py-2 rounded-md shadow-lg">
// // //        Stopwatch⏱️
// // //       </h2>

// // //       <CountdownCircleTimer
// // //         key={key}
// // //         isPlaying={isRunning}
// // //         duration={5}
// // //         colors="#00C851"
// // //         trailColor="#eee"
// // //         size={180}
// // //         strokeWidth={10}
// // //       >
// // //         {() => <div className="text-xl font-bold text-gray-800">{formatTime(time)}</div>}
// // //       </CountdownCircleTimer>

// // //       <div className="flex space-x-4 mt-4">
// // //         <button
// // //           className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
// // //           onClick={() => setIsRunning(true)}
// // //           disabled={isRunning}
// // //         >
// // //           Start
// // //         </button>

// // //         <button
// // //           className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:opacity-50"
// // //           onClick={() => setIsRunning(false)}
// // //           disabled={!isRunning}
// // //         >
// // //           Pause
// // //         </button>

// // //         <button
// // //           className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
// // //           onClick={() => {
// // //             setIsRunning(false);
// // //             setTime(0);
// // //             setKey(0);
// // //           }}
// // //         >
// // //           Reset
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Stopwatch;

// // import React, { useState, useEffect } from "react";
// // import { CountdownCircleTimer } from "react-countdown-circle-timer";
// // import "./index.css";

// // function Stopwatch() {
// //   const [time, setTime] = useState(0);
// //   const [isRunning, setIsRunning] = useState(false);
// //   const [key, setKey] = useState(0);

// //   useEffect(() => {
// //     let interval;
// //     if (isRunning) {
// //       interval = setInterval(() => {
// //         setTime((prev) => {
// //           const newTime = prev + 1;
// //           if (newTime % 5 === 0) setKey((k) => k + 1);
// //           return newTime;
// //         });
// //       }, 1000);
// //     }
// //     return () => clearInterval(interval);
// //   }, [isRunning]);

// //   const formatTime = (t) => {
// //     const min = String(Math.floor(t / 60)).padStart(2, "0");
// //     const sec = String(t % 60).padStart(2, "0");
// //     return `${min}:${sec}`;
// //   };

// //   return (
// //     <div className="w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#1e3c72] px-6 py-8 space-y-6">
// //       <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-xl">
// //         ⏱ Stopwatch
// //       </h2>

// //       <CountdownCircleTimer
// //         key={key}
// //         isPlaying={isRunning}
// //         duration={5}
// //         colors="#00C851"
// //         trailColor="#eee"
// //         size={220}
// //         strokeWidth={12}
// //       >
// //         {() => (
// //           <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
// //             {formatTime(time)}
// //           </div>
// //         )}
// //       </CountdownCircleTimer>

// //       {/* <div className="flex gap-4 flex-wrap justify-center">
// //         <button
// //           onClick={() => setIsRunning(true)}
// //           disabled={isRunning}
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50"
// //         >
// //           ▶ Start
// //         </button>
// //         <button
// //           onClick={() => setIsRunning(false)}
// //           disabled={!isRunning}
// //           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50"
// //         >
// //           ⏸ Pause
// //         </button>
// //         <button
// //           onClick={() => {
// //             setIsRunning(false);
// //             setTime(0);
// //             setKey(0);
// //           }}
// //           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
// //         >
// //           🔁 Reset
// //         </button>
// //       </div> */}

// //       <div className="flex gap-4 flex-wrap justify-center">
// //   {/* Start or Pause button (based on isRunning) */}
// //   {isRunning ? (
// //     <button
// //       onClick={() => setIsRunning(false)}
// //       className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
// //     >
// //       ⏸ Pause
// //     </button>
// //   ) : (
// //     <button
// //       onClick={() => setIsRunning(true)}
// //       className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
// //     >
// //       ▶ Start
// //     </button>
// //   )}

// //   {/* Reset button stays same */}
// //   <button
// //     onClick={() => {
// //       setIsRunning(false);
// //       setTime(0);
// //       setKey(0);
// //     }}
// //     className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
// //   >
// //     🔁 Reset
// //   </button>
// // </div>


// //  {/* <div className="flex items-center justify-center gap-6 mt-6">

// //   <button
// //     onClick={() => {
// //       setIsRunning(false);
// //       setTime(0);
// //       setKey(0);
// //     }}
// //     className="w-14 h-14 rounded-full bg-gray-200 text-black text-3xl font-bold flex items-center justify-center shadow-md hover:bg-gray-300 transition-transform hover:scale-110"
// //   >
// //     ⟲
// //   </button>

 
// //   <button
// //     onClick={() => setIsRunning(false)}
// //     disabled={!isRunning}
// //     className="w-16 h-16 rounded-full bg-pink-500 text-white text-3xl font-bold flex items-center justify-center shadow-lg hover:bg-pink-600 disabled:opacity-50 transition-transform hover:scale-110"
// //   >
// //     ⏸
// //   </button>

 
// //   <button
// //     onClick={() => setIsRunning(true)}
// //     disabled={isRunning}
// //     className="w-14 h-14 rounded-full bg-gray-200 text-black text-3xl font-bold flex items-center justify-center shadow-md hover:bg-gray-300 disabled:opacity-50 transition-transform hover:scale-110"
// //   >
// //     ⏱
// //   </button>
// // </div> */}


// //     </div>
// //   );
// // }

// // export default Stopwatch;


// import React, { useState, useEffect } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./index.css";

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [key, setKey] = useState(0);
//   const [laps, setLaps] = useState([]);

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prev) => {
//           const newTime = prev + 1;
//           if (newTime % 5 === 0) setKey((k) => k + 1);
//           return newTime;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const formatTime = (t) => {
//     const min = String(Math.floor(t / 60)).padStart(2, "0");
//     const sec = String(t % 60).padStart(2, "0");
//     return `${min}:${sec}`;
//   };

//   const handleLap = () => {
//     if (isRunning) {
//       setLaps((prevLaps) => [time, ...prevLaps]);
//     }
//   };

//   return (
//     // <div className="w-full h-full flex flex-col items-center justify-center text-white bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#1e3c72] px-6 py-8 space-y-6">
//     <div className="w-full h-screen overflow-y-auto flex flex-col items-center justify-start text-white bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#1e3c72] px-6 py-8 space-y-6">

//       <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-xl">
//         ⏱ Stopwatch
//       </h2>

//       <CountdownCircleTimer
//         key={key}
//         isPlaying={isRunning}
//         duration={5}
//         colors="#00C851"
//         trailColor="#eee"
//         size={220}
//         strokeWidth={12}
//       >
//         {() => (
//           <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
//             {formatTime(time)}
//           </div>
//         )}
//       </CountdownCircleTimer>

//       <div className="flex gap-4 flex-wrap justify-center">
//         {isRunning ? (
//           <button
//             onClick={() => setIsRunning(false)}
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//           >
//             ⏸ Pause
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsRunning(true)}
//             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//           >
//             ▶ Start
//           </button>
//         )}

//         <button
//           onClick={() => {
//             setIsRunning(false);
//             setTime(0);
//             setKey(0);
//             setLaps([]);
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//         >
//           🔁 Reset
//         </button>

//         <button
//           onClick={handleLap}
//           disabled={!isRunning}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50"
//         >
//           🏁 Lap
//         </button>
//       </div>

//       <div className="w-full max-w-md space-y-2 mt-6">
//         {laps.map((lap, index) => (
//           <div
//             key={index}
//             className="bg-white text-black text-center rounded-md py-2 px-4 shadow-md"
//           >
//             Lap {laps.length - index}: {formatTime(lap)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;
////******************************************************************************************************************************************************************************* */

// import React, { useState, useEffect } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./index.css";

// function Stopwatch() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [key, setKey] = useState(0);
//   const [laps, setLaps] = useState([]);

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prev) => {
//           const newTime = prev + 1;
//           if (newTime % 5 === 0) setKey((k) => k + 1);
//           return newTime;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const formatTime = (t) => {
//     const min = String(Math.floor(t / 60)).padStart(2, "0");
//     const sec = String(t % 60).padStart(2, "0");
//     return `${min}:${sec}`;
//   };

//   const handleLap = () => {
//     if (isRunning) {
//       setLaps((prevLaps) => [time, ...prevLaps]);
//     }
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-start text-white bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#1e3c72] px-6 py-8 space-y-6">

//       <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-xl">
//         ⏱ Stopwatch
//       </h2>

//       <CountdownCircleTimer
//         key={key}
//         isPlaying={isRunning}
//         duration={5}
//         colors="#00C851"
//         trailColor="#eee"
//         size={220}
//         strokeWidth={12}
//       >
//         {() => (
//           <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
//             {formatTime(time)}
//           </div>
//         )}
//       </CountdownCircleTimer>

//       <div className="flex gap-4 flex-wrap justify-center">
//         {isRunning ? (
//           <button
//             onClick={() => setIsRunning(false)}
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//           >
//             ⏸ Pause
//           </button>
//         ) : (
//           <button
//             onClick={() => setIsRunning(true)}
//             className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//           >
//             ▶ Start
//           </button>
//         )}

//         <button
//           onClick={() => {
//             setIsRunning(false);
//             setTime(0);
//             setKey(0);
//             setLaps([]);
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
//         >
//           🔁 Reset
//         </button>

//         <button
//           onClick={handleLap}
//           disabled={!isRunning}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50"
//         >
//           🏁 Lap
//         </button>
//       </div>

//       {/* Lap List - Full scroll from main container */}
//       <div className="w-full max-w-md space-y-2 mt-6">
//         {laps.map((lap, index) => (
//           <div
//             key={index}
//             className="bg-white text-black text-center rounded-md py-2 px-4 shadow-md"
//           >
//             Lap {laps.length - index}: {formatTime(lap)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stopwatch;

//*************************************************************************************** */



import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./index.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => {
          const newTime = prev + 1;
          if (newTime % 5 === 0) setKey((k) => k + 1);
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (t) => {
    const min = String(Math.floor(t / 60)).padStart(2, "0");
    const sec = String(t % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps((prevLaps) => [time, ...prevLaps]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 text-white  px-6 py-8 space-y-6">

      {/* <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 drop-shadow-xl">
        ⏱ Stopwatch
      </h2> */}

      <h2 className="text-6xl font-extrabold drop-shadow-xl flex items-center gap-2">
  <span> <i className="fas fa-stopwatch text-black mr-3"></i></span>
  <span className="bg-clip-text text-black">
    Stopwatch
  </span>
</h2>


      <CountdownCircleTimer
        key={key}
        isPlaying={isRunning}
        duration={60}
        colors="white"
        trailColor="#eee"
        size={220}
        strokeWidth={12}
      >
        {() => (
          <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
            {formatTime(time)}
          </div>
        )}
      </CountdownCircleTimer>

      <div className="flex gap-4 flex-wrap justify-center">
        {isRunning ? (
          <button
            onClick={() => setIsRunning(false)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            ⏸ Pause
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            ▶ Start
          </button>
        )}

        <button
          onClick={() => {
            setIsRunning(false);
            setTime(0);
            setKey(0);
            setLaps([]);
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          🔁 Reset
        </button>

        <button
          onClick={handleLap}
          disabled={!isRunning}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-100"
        >
          🏁 Lap
        </button>
      </div>

      {/* Lap List - Full scroll from main container */}
      {/* <div className="w-full max-w-md space-y-2 mt-6">
        {laps.map((lap, index) => (
          <div
            key={index}
            className="bg-white text-black text-center rounded-md py-2 px-4 shadow-md"
          >
            Lap {laps.length - index}: {formatTime(lap)}
          </div>
        ))}
      </div> */}


      <div className="w-full max-w-md mt-6 space-y-2 flex flex-col items-center">
  {laps.map((lap, index) => (
    <div
      key={index}
      className="w-full bg-gray-100 text-black px-4 py-2 rounded-2xl shadow-md font-semibold flex items-center"
    >
      {/* Left: Flag + Lap number */}
      <div className="w-1/3 text-left pl-2">
        <i className="fa-solid fa-flag mr-2"></i>
        Lap {laps.length - index}
      </div>

      {/* Center: Time */}
      <div className="w-1/3 text-center text-black font-bold">
        {formatTime(lap)}
      </div>

      {/* Right: Delete or Edit button */}
      <div className="w-1/3 text-right pr-2">
        <button
          className="text-red-500 hover:text-red-700 transition"
          onClick={() => handleDeleteLap(index)}
          title="Delete this lap"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Stopwatch;
