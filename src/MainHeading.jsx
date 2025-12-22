// // import React, { useState } from "react";
// // import { motion, useMotionValue, useSpring } from "framer-motion";

// // const letters = ["T", "O", "D", "O", "L", "I", "S", "T"];

// // const Main_logo = () => {
// //   const [activeIndex, setActiveIndex] = useState(0); // Which letter is being dragged

// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);
// //   return (
// //      <div className="h-[100%] w-[100%] flex justify-center items-center">
// //       <div className="flex ">
// //         {letters.map((letter, index) => {
// //           const springX = useSpring(x, { stiffness: 100, damping: 20 });
// //           const springY = useSpring(y, { stiffness: 100, damping: 20 });

// //           const isActive = index === activeIndex;

// //           return (
// //             <motion.div
// //               key={index}
// //               className={`w-7 h-8 rounded-xl flex items-center justify-center text-2xl font-bold shadow-lg cursor-grab active:cursor-grabbing
// //              bg-gradient-to-br from-amber-500 to-rose-800 bg-clip-text text-transparent`}
// //               style={isActive ? { x, y } : { x: springX, y: springY }}
// //               drag={isActive}
// //               dragElastic={0.8}
// //               dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
// //               whileTap={{ scale: 1.2 }}
// //               onMouseEnter={() => setActiveIndex(index)} // Change active box on click/drag
// //             >
// //               {letter}
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Main_logo

// import React, { useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const letters = ["T", "O", "D", "O", "L", "I", "S", "T"];

// const Main_logo = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Which letter is being dragged

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   return (
//     <div className="h-full w-full flex justify-center items-center">
//       <div className="flex gap-2">
//         {letters.map((letter, index) => {
//           const springX = useSpring(x, { stiffness: 100, damping: 20 });
//           const springY = useSpring(y, { stiffness: 100, damping: 20 });

//           const isActive = index === activeIndex;

//           return (
//             <motion.div
//               key={index}
//               className={`w-10 h-10 rounded-xl flex items-center justify-center 
//                 text-2xl font-extrabold text-rose-400 
//                 shadow-md hover:scale-110 transition-transform duration-300 cursor-grab active:cursor-grabbing`}
//               style={isActive ? { x, y } : { x: springX, y: springY }}
//               drag={isActive}
//               dragElastic={0.8}
//               dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
//               whileTap={{ scale: 1.3 }}
//               onMouseEnter={() => setActiveIndex(index)}
//             >
//               {letter}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Main_logo;

import React, { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const letters = ["T", "O", "D", "O", "L", "I", "S", "T"];

const Main_logo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex gap-1"> {/* Reduced spacing */}
        {letters.map((letter, index) => {
          const springX = useSpring(x, { stiffness: 100, damping: 20 });
          const springY = useSpring(y, { stiffness: 100, damping: 20 });

          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              className={`w-8 h-8 rounded-md flex items-center justify-center 
                text-xl font-extrabold text-[blue] 
                shadow-md hover:scale-110 transition-transform duration-300 
                cursor-grab active:cursor-grabbing`}
              style={isActive ? { x, y } : { x: springX, y: springY }}
              drag={isActive}
              dragElastic={0.8}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              whileTap={{ scale: 1.3 }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Main_logo;
