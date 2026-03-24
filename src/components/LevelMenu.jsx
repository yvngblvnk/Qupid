import React from "react";

const levels = [
  { name: "Light", color: "bg-gradient-to-r from-yellow-300 to-yellow-500" },
  { name: "Personal", color: "bg-gradient-to-r from-blue-300 to-blue-500" },
  { name: "Deep", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
  { name: "Very Deep", color: "bg-gradient-to-r from-red-400 to-red-600" },
];

const LevelMenu = ({ onSelectLevel }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      
      <div className="flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory">
        
       {levels.map((level, index) => (
  <div
    key={index}
    onClick={() => onSelectLevel(level.name)}
    className={`min-w-[80%] h-40 ${level.color} snap-center flex items-center justify-center text-white text-xl font-bold rounded-2xl shadow-lg cursor-pointer transform transition duration-200 hover:scale-105 active:scale-95`}
  >
    {level.name}
  </div>
))}

      </div>

    </div>
  );
};

export default LevelMenu;