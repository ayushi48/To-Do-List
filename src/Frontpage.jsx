
// //********************************************************************************************************************** */
// //##############################################################################################################################################################################################################




// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import CardSwap, { Card } from './CardSwap'
// import RollingGallery from './RollingGallery'

// const bookOpen = {
//   hidden: { opacity: 0, scaleX: 0.4},
//   visible: {
//     opacity: 1,
//     scaleX: 1,
//     transition: { duration: 1.2, ease: "easeOut" },
//     transformOrigin: "center",
//   },
// };

// const Frontpage = () => {
//   return (
//     <div className="   bg-black


//  w-screen min-h-screen flex flex-col space-y-10">
//       {/* Navigation Bar */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.1 }}
//         className="border border-gray-600 font-bold w-screen h-[6rem] flex items-center justify-around px-8 space-x-8 bg-gradient-to-r from-white/50 via-gray-100/50 to-white/50"
//       >
//         <img src="" alt="Logo" className="h-5 w-5 bg-white rounded-full" />
//         <Link to="/home" className="text-white text-2xl hover:text-orange-400">Home</Link>
//         <Link to="/download" className="text-white text-2xl hover:text-orange-400">Download</Link>
//         <Link to="/signin" className="text-white text-2xl hover:text-orange-400 border w-[11rem] h-14 rounded-3xl flex items-center justify-center">Sign In</Link>
//         <Link to="/signup" className="text-white text-2xl hover:text-orange-400 border w-[14rem] h-14 rounded-3xl flex items-center justify-center">Sign Up for Free</Link>
//       </motion.div>

//       {/* Hero Section */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="


//  flex items-center justify-start mt-10 px-10 gap-20"
//       >
//         <video width="720" autoPlay muted loop className="rounded-xl shadow-xl">
//           <source src="/3255275-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="max-w-xl">
//           <h1 className="text-7xl font-semibold text-white text-center leading-tight">
//             Your Tasks, Your Control <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-700">– Build For Doers</span>
//           </h1>
//           <p className="text-2xl text-gray-400 text-center font-bold mt-6">
//             From ideas to action — Empower your productivity and bring your task
//             management ideas to life with our smart To-Do List website.
//             Get started now and organize your tasks into real, achievable goals.
//           </p>
//           <div className="flex justify-center mt-6">
//             <Link to="/home" className="border border-white bg-orange-500 hover:bg-[#fe2504] text-white text-xl px-6 py-3 rounded-2xl  transition">Get Started</Link>
//           </div>
//         </div>
//       </motion.div>

//       {/* Feature Tagline */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         <p className="font-bold text-gray-400 text-3xl text-center">The Future of Productivity—At Your Fingertips.</p>
//         <img src="" alt="features of my website" />
//       </motion.div>

//       {/* Section 2 */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="flex justify-center items-center mt-10 space-x-4"
//       >
//         <div className="w-[35%] h-[35rem] border border-gray-400 flex flex-col items-center justify-center">
//           <p className="text-5xl text-gray-400 text-center font-bold mt-6">A Smarter Way to Stay on Track</p>
//           <p className="text-3xl text-gray-400 text-center font-bold mt-6">Whether it's work projects, personal tasks, or study plans — To-Do List helps you plan with clarity and act with confidence</p>
//         </div>
//         <div className="w-[65%] h-[35rem] border border-gray-400 flex items-center justify-center">

//   <div style={{ height: '600px', position: 'relative'  }}>
//     <CardSwap
//       cardDistance={60}
//       verticalDistance={70}
//       delay={5000}
//       pauseOnHover={false}
//     >
//       <Card>
//         <h3>Card 1</h3>
//         <p>Your content here</p>
//       </Card>
//       <Card>
//         <h3>Card 2</h3>
//         <p>Your content here</p>
//       </Card>
//       <Card>
//         <h3>Card 3</h3>
//         <p>Your content here</p>
//       </Card>
//     </CardSwap>
//   </div>

// </div>

//       </motion.div>

//       {/* Calendar Section */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="flex mt-10 space-x-10 w-full"
//       >
//         <div className="w-1/2 flex justify-end pr-0 ml-0">
//           <video width="750" autoPlay muted loop className="rounded-xl shadow-xl">
//             <source src="/calender.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="w-1/2 flex flex-col space-y-8 justify-center items-center border h-[35rem] border-gray-400">
//           <p className="text-5xl font-bold text-gray-400 text-center">Master every moment — visualize your time with stunning clarity</p>
//           <p className="text-3xl text-gray-400 text-center font-bold mt-6">Choose from monthly, weekly, daily, or agenda views — designed to match your planning style and help you manage time effortlessly</p>
//           <p className="text-2xl text-gray-400">Click Here for Switching to Smart Scheduling 👇</p>
//           <Link to="/calender" className="border border-white bg-orange-500 hover:bg-[#fe2504] text-white text-2xl w-[65%] h-[5rem] font-bold px-8 py-4 rounded-2xl  transition">📅 Calendar View – Your Time Hub</Link>
//         </div>
//       </motion.div>

//       {/* Stopwatch Section */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="flex justify-center items-center mt-10 space-x-4"
//       >
//         <div className="w-[65%] h-[35rem] border border-gray-400 flex flex-col items-center justify-center space-y-10">
//           <p className="text-5xl text-gray-400 text-center font-bold mt-6">Track your time, Master Your Minutes, Maximize Your Focus</p>
//           <p className="text-3xl text-gray-400 text-center font-bold mt-6">Every great achievement starts with a single interval. Set the timer, silence the noise, and let focused sprints drive your productivity.</p>
//           <p className="text-2xl text-gray-400">Click Here for Focus Mode On 👇</p>
//           <Link to="/clocktools" className="border border-white bg-orange-500 hover:bg-[#fe2504] text-white text-2xl w-[35%] text-center h-[5rem] font-bold px-8 py-4 rounded-2xl  transition -mt-5">Stopwatch & Run Timer</Link>
//         </div>
//         <div className="w-[35%] h-[35rem] border border-gray-400 flex items-center justify-center">
//           <video autoPlay muted loop className="w-[900px] h-[500px] rounded-xl shadow-xl">
//             <source src="/stopwatch.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </motion.div>

//       {/* Sync Section */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="flex justify-center items-center mt-10 space-x-4"
//       >
//         <div className="w-[65%] h-[35rem] border border-gray-400 flex items-center justify-center">
//           <div>
//             <p className="text-5xl text-gray-400 text-center font-bold mt-6">Sync seamlessly across phone, tablet, and smartwatch — your time, always in sync</p>
//             <p className="text-3xl text-gray-400 text-center font-bold mt-6">From phone to computer, tablet to watch — To-Do List ensures seamless connection and real-time syncing across all your devices</p>
//           </div>
//         </div>
//         <div className="w-[35%] h-[35rem] border border-gray-400 flex flex-col items-center justify-center"></div>
//       </motion.div>

//       {/* Final CTA */}
//       <motion.div
//         variants={bookOpen}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.3 }}
//         className="border border-gray-500 flex flex-col justify-center items-center h-[25rem] space-y-10"
//       >
//         <p className="text-5xl text-gray-400 text-center font-bold mt-10">Ready to be more productive 🚀</p>
//         <div className="flex w-full justify-center text-center items-center gap-5">
//           <Link to="/home" className="border border-white bg-orange-500 hover:bg-[#fe2504] text-white text-2xl w-[12%] h-[5rem] font-bold px-8 py-4 items-center rounded-2xl  transition -mt-5">Get Started</Link>
//           <button className="border border-white bg-orange-500 hover:bg-[#fe2504] text-white text-2xl w-[12%] h-[5rem] font-bold px-8 py-4 rounded-2xl  transition -mt-5">Download</button>
//         </div>
//       </motion.div>

//       <div>  
// <RollingGallery autoplay={true} pauseOnHover={true} /></div>
//     </div>
//   );
// };

// export default Frontpage;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CardSwap, { Card } from './CardSwap';
import RollingGallery from './RollingGallery';
import ProductivityToolsSection from "./ProductiveToolSection";
import Footer from "./Footer";


const bookOpen = {
  hidden: { opacity: 0, scaleX: 0.4 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.4, ease: "easeOut" },
    transformOrigin: "center",
  },
};





const Frontpage = () => {
  return (
    <div className="bg-black w-screen min-h-screen flex flex-col space-y-10 overflow-x-hidden">

      {/* ✅ Sticky Navigation Bar */}
      <motion.div
        variants={bookOpen}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="fixed top-0 z-50 border border-gray-600 font-bold w-full h-[6rem] flex items-center justify-around px-8 space-x-8 bg-[linear-gradient(to_right,rgba(219,39,119,0.8),rgba(37,99,235,0.8))]
 backdrop-blur-md shadow-md"
      >
        <img src="./logo.png" alt="Logo" className="h-50 w-50   rounded-full" />
        <Link to="/home" className="text-white text-2xl hover:text-black">Home</Link>
        <Link to="/home" className="text-white text-2xl hover:text-black">About</Link>
        <Link to="/home" className="text-white text-2xl hover:text-black border w-[11rem] h-14 rounded-3xl flex items-center justify-center">Sign In</Link>
        <Link to="/home" className="text-white text-2xl hover:text-black border w-[14rem] h-14 rounded-3xl flex items-center justify-center">Sign Up for Free</Link>
      </motion.div>

      {/* ✅ Wrapper to prevent navbar overlap */}
      <div className="pt-[9rem]">

        {/* Hero Section */}
        <motion.div
          variants={bookOpen}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex items-center justify-start mt-0 px-10 gap-20"
        >
          <video width="720" autoPlay muted loop className="rounded-xl shadow-xl">
            <source src="/3255275-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="max-w-xl">
            <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-center leading-tight">
              Your Tasks, Your Control <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400
">– Build For Doers</span>
            </h1>
            <p className="text-2xl text-white text-center font-bold mt-6">
              From ideas to action — Empower your productivity and bring your task
              management ideas to life with our smart To-Do List website.
              Get started now and organize your tasks into real, achievable goals.
            </p>
            {/* <div className="flex justify-center mt-6">
              <Link to="/home" className="border border-white bg-white font-bold hover:bg-gray-300 text-black text-2xl px-6 py-3 rounded-2xl transition">Get Started</Link>
            </div> */}

<div className="flex justify-center gap-4 mt-6">
  {/* 🚀 Get Started Button */}
  <Link
    to="/home"
    className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-bold text-lg bg-gradient-to-r from-pink-200 to-blue-200 shadow-md hover:scale-105 transition"
  >
    🚀 Get Started
  </Link>

  {/* 📲 Download App Button */}
  <a
    href="#"
    className="flex items-center  bg-gradient-to-r from-pink-200 to-blue-200  gap-2 px-6 py-3 rounded-full text-black font-bold text-lg border border-gray-400 bg-transparent hover:bg-gray-700 transition"
  >
    📲 Visit Website
  </a>
</div>

          </div>
        </motion.div>

        {/* Tagline Section */}
        <motion.div
          variants={bookOpen}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="font-bold text-white text-3xl text-center mt-10">The Future of Productivity—At Your Fingertips.</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[38rem] mt-10 rounded-4xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  {/* 🧠 Left Content inside the box */}
  <div className="w-1/2 h-full flex flex-col justify-center space-y-6 pr-8">
  <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-900 text-center leading-snug">
    A Smarter Way to Stay on Track
  </p>

  <p className="text-2xl text-black text-center font-semibold leading-relaxed">
    Whether it's 
    <span className="text-purple-500"> important meetings</span>, 
    <span className="text-blue-500"> daily tasks</span>, or 
    <span className="text-pink-500"> upcoming deadlines</span>,  
    <span className="text-red-600 font-bold"> To-Do List</span> helps you plan with clarity and act with confidence.
    <br /><br />
    🎨 <span className="text-pink-500 font-semibold">Don’t settle for ordinary</span> — design a workspace that feels like 
    <span className="text-purple-400 font-semibold"> you!</span>
    Take full control of the <span className="text-blue-400 font-semibold">toolbar</span>, 
    <span className="text-blue-400 font-semibold"> sidebar</span>, and 
    <span className="text-blue-400 font-semibold"> background</span> to build your perfect productivity zone.
    
    Whether you prefer 
    <span className="text-emerald-400 font-semibold"> bold vibes</span> or 
    <span className="text-cyan-400 font-semibold"> calming tones</span>, choose a theme that inspires 
    <span className="text-yellow-300 font-semibold"> focus</span> and fuels 
    <span className="text-yellow-400 font-semibold"> creativity</span>.
  </p>
</div>


  {/* 🎴 Card Swap inside the same box */}
  <div className="w-1/2 h-full flex items-center justify-center ">
    <div className="relative h-[90%] w-[90%] -mt-35 -ml-30">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
  <div className="relative rounded-xl  bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      📝 Reminders
    </div>
    <img src="homewithtask.png" alt="Monthly Planner" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>
     <Card>
  <div className="relative rounded-xl bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      📅 Smart Calendar
    </div>
    <img src="/calender.png" alt="Smart Calendar" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>
<Card>
  <div className="relative rounded-xl  bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      🔔 Reminder
    </div>
    <img src="/homewithouttask.png" alt="Reminders" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>

<Card>
  <div className="relative rounded-xl border border-white bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      📖 Overall Overview
    </div>
    <img src="/importantwithtask.png" alt="Daily Overview" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>
<Card>
  <div className="relative rounded-xl  bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      📊 Lap Tracker
    </div>
    <img src="/laptracker.png" alt="Weekwise Tracker" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>
<Card>
  <div className="relative rounded-xl  bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      🔔 Settings
    </div>
    <img src="/Settings.png" alt="Reminders" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>

<Card>
  <div className="relative rounded-xl  bg-black text-white p-3 shadow-xl">
    <div className="absolute top-4 left-4 z-10 text-xl font-bold flex items-center gap-2">
      🔔 Timer
    </div>
    <img src="/timer.png" alt="Reminders" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</Card>

      </CardSwap>
    </div>
  </div>
</motion.div>

{/* home */}

      <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[38rem] mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>


    {/* 🎥 image left */}
  <div className="w-1/2 h-[15rem] flex items-center justify-center">
   <img src="./homewith task.png" alt="Logo" className="" />
  </div>
  {/* 📝 Text righgt */}
<div className="w-1/2 h-full flex flex-col items-center justify-center space-y-8 px-4">
 <p className="text-2xl text-gray-900 text-center font-semibold leading-relaxed">
  <span className="text-red-700 text-5xl font-bold">Personalize Your Setup, Your Way</span><br /><br />
  Don’t settle for a <span className="text-gray-600 font-medium">dull layout</span>! With full control over the 
  <span className="text-blue-600 font-bold"> toolbar</span>, 
  <span className="text-purple-600 font-bold"> sidebar</span>, and 
  <span className="text-green-600 font-bold"> background</span>, you can make your space 
  <span className="text-rose-600 font-semibold">uniquely yours</span>.<br /><br />
  Choose from <span className="text-yellow-500 font-bold">vibrant themes</span> and 
  <span className="text-cyan-500 font-bold"> calming tones</span> — create the perfect environment for 
  <span className="text-emerald-500 font-bold">focus</span> and 
  <span className="text-indigo-500 font-bold">productivity</span>.
</p>




  <p className="text-xl text-black font-bold text-center">
    Click Here To Reach Home Section👇
  </p>

  <Link
    to="/home"
    className=" text-black font-bold bg-gradient-to-r from-pink-200 to-blue-200 text-xl  px-8 py-4 rounded-xl shadow transition"
  >
   <i className="fa-solid fa-house mr-2"></i> Home
  </Link>
</div>



</motion.div>

{/* cardsoffocus */}

     <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[38rem] mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  <ProductivityToolsSection/>
</motion.div>

{/* important section  */}

    <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[38rem] mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  {/* 📝 Text Left */}
<div className="w-1/2 h-[55rem] flex flex-col items-center justify-center space-y-0.5 px-4">
<span className="text-red-700 text-center text-5xl font-bold">Your Task Universe, Organized Beautifully</span><br /><br />

 <p className="text-xl text-gray-900 text-start font-semibold leading-relaxed">
  
  From big wins to little reminders, your tasks deserve clarity and structure.<br /><br />
<span className="text-yellow-600 font-bold">📝 All Tasks:</span> See everything you need to do, all in one place.<br /><br />

<span className="text-pink-600 font-bold">⭐ Important Tasks:</span> Quickly access top-priority tasks you can’t miss.<br /><br />

<span className="text-green-600 font-bold">✅ Completed Tasks:</span> Track what’s done and feel your progress grow.<br /><br />

<span className="text-blue-600 font-bold">🕒 Pending Tasks:</span> Stay updated with what’s left on your list.<br /><br />



</p>





  <p className="text-xl text-black font-bold text-center">
    Click Here To Reach Home Section👇
  </p>

  <Link
    to="/important"
    className=" text-black font-bold bg-gradient-to-r from-pink-200 to-blue-200 text-xl  px-8 py-4 rounded-xl shadow transition"
  >
   <i className="fa-solid fa-house mr-2"></i> All Tasks
  </Link>
</div>


  {/* 🎥 image Right */}
  <div className="w-1/2 h-[15rem] flex items-center justify-center">
   <img src="./importantwithtask.png" alt="Logo" className="" />
  </div>
</motion.div>


        {/* Calendar Section */}
        <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[50rem] mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  {/* 🎥 Video Left */}
  <div className="w-1/2 h-full flex items-center justify-center">
    <video width="720" autoPlay muted loop className="rounded-xl shadow-xl">
      <source src="/calender.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* 📄 Text Right */}
  <div className="w-1/2 h-full flex flex-col justify-center items-center space-y-6 pl-8">
  <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-700 text-center">
    Master every moment — visualize your time with stunning clarity
  </p>

  <p className="text-2xl text-black text-center font-semibold leading-relaxed">
    Whether it's <span className="text-purple-500">important meetings</span>, 
    <span className="text-blue-500"> daily tasks</span>, or 
    <span className="text-pink-500"> upcoming deadlines</span>, 
    our intelligent calendar system keeps everything in sync. Easily 
    <span className="text-green-500"> add</span>, 
    <span className="text-yellow-500"> edit</span>, and 
    <span className="text-cyan-500"> visualize</span> your tasks in one beautifully organized interface.
    <br /><br />

  <div className="w-full text-left space-y-2">
  <p>✨ <span className="text-pink-400 font-semibold">Monthly View</span> offers a big-picture layout.</p>
  <p>📅 <span className="text-blue-400 font-semibold">Weekly View</span> shows busy and free intervals clearly.</p>
  <p>📋 <span className="text-purple-400 font-semibold">Agenda View</span> helps you execute tasks in proper order.</p>
  <p>🔁 <span className="text-green-400 font-semibold">Multi-Day View</span> allows flexible daily planning.</p>
  <p>🔄 <span className="text-yellow-400 font-semibold">Multi-Week View</span> makes shifting plans easy and intuitive.</p>
</div>
  </p>

  <p className="text-2xl text-black font-bold text-center">
    Click Here for Switching to Smart Scheduling 👇
  </p>

  <Link
    to="/calender"
    className="border border-white  bg-gradient-to-r from-pink-200 to-blue-200 text-black text-xl w-[65%] h-[5rem] font-bold px-8 py-4 rounded-2xl transition text-center flex items-center justify-center"
  >
    📅 <span className="ml-2 text-black ">Calendar View – Your Time Hub</span>
  </Link>
</div>

</motion.div>


        {/* Stopwatch Section */}
        <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[90%] h-[38rem] mt-10 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  {/* 📝 Text Left */}
<div className="w-1/2 h-full flex flex-col items-center justify-center space-y-8 px-4">
  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-700 text-center leading-tight">
    Track your time — <br /> Master Your Minutes, Maximize Your Focus
  </p>

  <p className="text-2xl text-gray-800 text-center font-semibold leading-relaxed">
    Every <span className="text-purple-500 font-bold">great achievement</span> begins with one 
    <span className="text-blue-500 font-bold"> focused interval</span>. <br />
    <span className="text-green-500">Set your timer</span>, 
    <span className="text-red-500"> silence the distractions</span>, and dive into 
    <span className="text-indigo-500 font-bold"> deep work</span>. <br />
    Let <span className="text-emerald-500 font-semibold">consistent, intentional sprints</span> fuel your 
    <span className="text-yellow-500 font-semibold">momentum</span> and turn effort into 
    <span className="text-orange-500 font-bold">excellence</span>.
  </p>

  <p className="text-xl text-black font-bold text-center">
    Click Here for Focus Mode On 👇
  </p>

  <Link
    to="/clocktools"
    className="bg-gradient-to-r from-pink-200 to-blue-200 text-black  text-xl font-bold px-8 py-4 rounded-xl shadow transition"
  >
    ⏱ Stopwatch & Run Timer
  </Link>
</div>


  {/* 🎥 Video Right */}
  <div className="w-1/2 h-full flex items-center justify-center">
      <img src="/laptracker.png" alt="clocktools" className="w-full h-[320px] object-contain rounded-xl mt-10" />
  </div>
</motion.div>



        {/* Rolling Gallery */}
        <div><RollingGallery autoplay={true} pauseOnHover={true} /></div>

       
      </div>

    {/* Final CTA */}
        <motion.div
          variants={bookOpen}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="border border-gray-500 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 m-10 rounded-4xl flex flex-col justify-center items-center h-[25rem] space-y-10"
        >
          <p className="text-5xl text-gray-400 text-center font-bold mt-10">Ready to be more productive 🚀</p>
          <div className="flex w-full justify-center text-center items-center gap-10 mt-10 ">
            <Link to="/home" className="border border-white bg-gradient-to-r from-pink-200 to-blue-200 text-black text-2xl w-[12%] h-[5rem] font-bold px-8 py-4 items-center rounded-2xl transition -mt-5">Get Started</Link>
            <button className="border border-white bg-gradient-to-r from-pink-200 to-blue-200 text-black text-2xl w-[12%] h-[5rem] font-bold px-8 py-4 rounded-2xl transition -mt-5">Download</button>
          </div>
        </motion.div>


              <motion.div
  variants={bookOpen}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
  className="mx-auto w-[100%] h-[38rem] mt-10  ml-10 mr-10 rounded-4xl bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 backdrop-blur-md border border-gray-400 flex items-center justify-between px-10 shadow-xl"
>
  <Footer/>
</motion.div>


    </div>
  );
};

export default Frontpage;



