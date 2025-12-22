import React from "react";

const tools = [
  {
    title: "Focus Mode",
    desc: "   Capture every minute of meaningful progress. Perfect for deep work, this timer keeps you focused and accountable throughout your most productive hours.",
    img: "/focusfinal.png", // 🔁 Replace with your image
  },
  {
    title: "Smart Timer",
    desc: "Keep your workflow smooth with our task timer — it gently signals when it’s time to move on to your next task.",
    img: "/onlytimer.png",
  },
  {
    title: "Stopwatch",
    desc: "Monitor your task completion speed and stay on top of your daily productivity goals.",
    img: "/onlystopwatch.png",
  },
  {
    title: "Lap Tracker",
    desc: "Capture precise time segments and task activity using the lap feature for detailed tracking.",
    img: "/Laptracker2.png",
  },
];

const ProductivityToolsSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-8 py-20  rounded-3xl shadow-2xl">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-red-700 mb-12 text-center">
        Smart Tools to Boost Your Productivity at Work
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1600px]">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-900/80 backdrop-blur-xl rounded-xl p-5 shadow-lg hover:scale-105 transition transform duration-300"
          >
            <div className="w-full h-[180px] bg-gray-700 rounded-lg overflow-hidden mb-4">
              <img
                src={tool.img}
                alt={tool.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">
              {tool.title}
            </h3>
            <p className="text-white text-lg text-center">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductivityToolsSection;
