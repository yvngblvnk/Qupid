import React from "react";

const levels = [
  { id: "light", name: "Light", color: "bg-gradient-to-r from-yellow-300 to-yellow-500" },
  { id: "personal", name: "Personal", color: "bg-gradient-to-r from-blue-300 to-blue-500" },
  { id: "deep", name: "Deep", color: "bg-gradient-to-r from-purple-400 to-purple-600" },
  { id: "verydeep", name: "Very Deep", color: "bg-gradient-to-r from-red-400 to-red-600" },
];

const LevelMenu = ({  completedCounts, onSelectLevel }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }}>
      
      <div className="flex gap-4 overflow-x-auto px-6 snap-x snap-mandatory">
        
       {levels.map((level) => (
  <div
    key={level.name}
   onClick={() => onSelectLevel(level.id)}
    className={`min-w-[80%] h-40 ${level.color} snap-center flex flex-col items-center justify-center text-white text-xl font-bold rounded-2xl shadow-lg cursor-pointer transform transition duration-200 hover:scale-105 active:scale-95`}
  >
     <h5 className="text-xl font-bold">{level.name}</h5>
          <p className="text-sm mt-2">
            Completed {completedCounts[level.id] || 0}
          </p>
  </div>
))}

      </div>

    </div>
  );
};

export default LevelMenu;