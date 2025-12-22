import React from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TaskSummaryCard = () => {
  const todos = useSelector((state) => state.todo.data);
  const total = todos.length;
  const completed = todos.filter((t) => t.complete).length;
  const pending = total - completed;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-[#3a3afe] shadow-[5px_5px_20px_rgba(0,0,0,0.7)] rounded-2xl p-5 text-white flex items-center gap-4 w-[20rem] ">
      <div className="w-16 h-16">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "22px",
            pathColor: "#fff",
            textColor: "#fff",
            trailColor: "rgba(255,255,255,0.3)",
          })}
        />
      </div>

      <div className="flex-1">
       
        <p className="text-base font-semibold">
          You have {pending} tasks left to do
        </p>
      </div>

      <div className="text-white text-xl cursor-pointer">⋯</div>
    </div>
  );
};

export default TaskSummaryCard;
