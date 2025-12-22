

// // import React, { useState } from "react";
// // import { CountdownCircleTimer } from "react-countdown-circle-timer";
// // import "./index.css"; // Ensure Tailwind is working

// // function Timer() {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [key, setKey] = useState(0);
// //   const [duration, setDuration] = useState(60);

// //   const formatTime = (remainingTime) => {
// //     const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
// //     const seconds = String(remainingTime % 60).padStart(2, "0");
// //     return `${minutes}:${seconds}`;
// //   };

// //   return (
// //     <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
// //       <h2 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-md">
// //         ⏳  Timer
// //       </h2>

// //   <CountdownCircleTimer
// //   key={key}
// //   isPlaying={isPlaying}
// //   duration={duration}
// //   colors={["#00f5c4", "#fdd835", "#ff4081"]} // cyan → yellow → pink
// //   colorsTime={[duration, duration - 60, duration - 10]} // every 5 seconds
// //   trailColor="#1a1a2e"
// //   size={240}
// //   strokeWidth={14}
// //   onComplete={() => {
// //     setIsPlaying(false);
// //     return { shouldRepeat: false };
// //   }}
// // >
// //   {({ remainingTime }) => (
// //     <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
// //       {formatTime(remainingTime)}
// //     </div>
// //   )}
// // </CountdownCircleTimer>


// //       <div className="flex gap-6 mt-8">
// //         <button
// //           onClick={() => setIsPlaying(true)}
// //           disabled={isPlaying || duration === 0}
// //           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
// //         >
// //           ▶ Start
// //         </button>

// //         <button
// //           onClick={() => setIsPlaying(false)}
// //           disabled={!isPlaying}
// //           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
// //         >
// //           ⏸ Pause
// //         </button>

// //         <button
// //           onClick={() => {
// //             setIsPlaying(false);
// //             setKey((prev) => prev + 1);
// //           }}
// //           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
// //         >
// //           🔁 Reset
// //         </button>
// //       </div>

// //       <div className="mt-6">
// //         <input
// //           type="number"
// //           min="1"
// //           value={duration}
// //           onChange={(e) => setDuration(Number(e.target.value))}
// //           className="w-60 py-2 px-4 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
// //           placeholder="Enter seconds"
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Timer;
// //*********************************************************************** */




// import React, { useState } from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./index.css"; // Ensure Tailwind is working

// function Timer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [key, setKey] = useState(0);
//   const [duration, setDuration] = useState(60);

//   const formatTime = (remainingTime) => {
//     const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
//     const seconds = String(remainingTime % 60).padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   return (
//     <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
//       <h2 className="text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-md">
//         ⏳  Timer
//       </h2>

//   <CountdownCircleTimer
//   key={key}
//   isPlaying={isPlaying}
//   duration={duration}
//   colors={["#00f5c4", "#fdd835", "#ff4081"]} // cyan → yellow → pink
//   colorsTime={[duration, duration - 60, duration - 10]} // every 5 seconds
//   trailColor="#1a1a2e"
//   size={240}
//   strokeWidth={14}
//   onComplete={() => {
//     setIsPlaying(false);
//     return { shouldRepeat: false };
//   }}
// >
//   {({ remainingTime }) => (
//     <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
//       {formatTime(remainingTime)}
//     </div>
//   )}
// </CountdownCircleTimer>


//       <div className="flex gap-6 mt-8">
//         <button
//           onClick={() => setIsPlaying(true)}
//           disabled={isPlaying || duration === 0}
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
//         >
//           ▶ Start
//         </button>

//         <button
//           onClick={() => setIsPlaying(false)}
//           disabled={!isPlaying}
//           className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50"
//         >
//           ⏸ Pause
//         </button>

//         <button
//           onClick={() => {
//             setIsPlaying(false);
//             setKey((prev) => prev + 1);
//           }}
//           className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
//         >
//           🔁 Reset
//         </button>
//       </div>

//       <div className="mt-6">
//         <input
//           type="number"
//           min="1"
//           value={duration}
//           onChange={(e) => setDuration(Number(e.target.value))}
//           className="w-60 py-2 px-4 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//           placeholder="Enter seconds"
//         />
//       </div>
//     </div>
//   );
// }

// export default Timer;


import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./index.css"; // Ensure Tailwind is working

function Timer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [duration, setDuration] = useState(60);

  // Optional: You can use separate state for inputs if needed
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(60);

  const formatTime = (remainingTime) => {
    const minutes = String(Math.floor(remainingTime / 60)).padStart(2, "0");
    const seconds = String(remainingTime % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const updateDuration = (h, m, s) => {
    const total = h * 3600 + m * 60 + s;
    setDuration(total);
    setKey((prev) => prev + 1); // to reset the timer display
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 text-white px-4">
      <h2 className="text-6xl font-extrabold mb-8 flex items-center gap-3 drop-shadow-md">
        <i className="fas fa-hourglass-half text-black"></i>
        <span className="bg-clip-text text-black">
          Timer
        </span>
      </h2>

      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        duration={duration}
        colors="white"
        colorsTime={[duration, duration - 60, duration - 10]}
        trailColor="#1a1a2e"
        size={240}
        strokeWidth={14}
        onComplete={() => {
          setIsPlaying(false);
          return { shouldRepeat: false };
        }}
      >
        {({ remainingTime }) => (
          <div className="text-3xl font-mono font-bold text-white drop-shadow-lg">
            {formatTime(remainingTime)}
          </div>
        )}
      </CountdownCircleTimer>

      {/* Buttons */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={() => setIsPlaying(true)}
          disabled={isPlaying || duration === 0}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-100"
        >
          ▶ Start
        </button>

        <button
          onClick={() => setIsPlaying(false)}
          disabled={!isPlaying}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 disabled:opacity-100"
        >
          ⏸ Pause
        </button>

        <button
          onClick={() => {
            setIsPlaying(false);
            setKey((prev) => prev + 1);
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          🔁 Reset
        </button>
      </div>

      {/* Time Input Boxes */}
      {/* <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <input
          type="number"
          min="0"
          placeholder="HH"
          value={hours}
          onChange={(e) => {
            const val = Number(e.target.value);
            setHours(val);
            updateDuration(val, minutes, seconds);
          }}
          className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="number"
          min="0"
          max="59"
          placeholder="MM"
          value={minutes}
          onChange={(e) => {
            const val = Number(e.target.value);
            setMinutes(val);
            updateDuration(hours, val, seconds);
          }}
          className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="number"
          min="0"
          max="59"
          placeholder="SS"
          value={seconds}
          onChange={(e) => {
            const val = Number(e.target.value);
            setSeconds(val);
            updateDuration(hours, minutes, val);
          }}
          className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div> */}

      <div className="mt-8 flex gap-6 flex-wrap justify-center items-end">
  {/* Hours */}
  <div className="flex flex-col items-center">
    <input
      type="number"
      min="0"
      placeholder="HH"
      value={hours}
      onChange={(e) => {
        const val = Number(e.target.value);
        setHours(val);
        updateDuration(val, minutes, seconds);
      }}
      className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <label className="mt-2 text-md font-bold bg-clip-text text-white">
      Hours
    </label>
  </div>

  {/* Minutes */}
  <div className="flex flex-col items-center">
    <input
      type="number"
      min="0"
      max="59"
      placeholder="MM"
      value={minutes}
      onChange={(e) => {
        const val = Number(e.target.value);
        setMinutes(val);
        updateDuration(hours, val, seconds);
      }}
      className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <label className="mt-2 text-md font-bold bg-clip-text text-white">
      Minutes
    </label>
  </div>

  {/* Seconds */}
  <div className="flex flex-col items-center">
    <input
      type="number"
      min="0"
      max="59"
      placeholder="SS"
      value={seconds}
      onChange={(e) => {
        const val = Number(e.target.value);
        setSeconds(val);
        updateDuration(hours, minutes, val);
      }}
      className="w-20 py-2 px-3 bg-[#1c1b2a] border border-gray-600 rounded-md text-center text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
    <label className="mt-2 text-md font-bold bg-clip-text text-white">
      Seconds
    </label>
  </div>
</div>

    </div>
  );
}

export default Timer;
