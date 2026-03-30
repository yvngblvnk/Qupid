import React, { useState } from "react";
import LevelMenu from "./LevelMenu";

import lightQuestions from "../data/light.json";
import personalQuestions from "../data/personal.json";
import deepQuestions from "../data/deep.json";
import veryDeepQuestions from "../data/verydeep.json";

const Session = () => {
    const questionsByLevel = {
        light: lightQuestions,
        personal: personalQuestions,
        deep: deepQuestions,
        verydeep: veryDeepQuestions,
    };

    const [currentLevel, setCurrentLevel] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [completedCounts, setCompletedCounts] = useState({
        light: 0,
        personal: 0,
        deep: 0,
        verydeep: 0,
    });

    //showing the level menu first!

    if (!currentLevel) {
    return (
      <LevelMenu
        completedCounts={completedCounts}
        onSelectLevel={(level) => {
          setCurrentLevel(level);
          setCurrentIndex(0);
        }}
      />
    );
  }

    const questions = Object.values(questionsByLevel[currentLevel]);
    if (!questions || questions.length === 0) {
    return <div>No questions available.</div>;
  }

    const currentQuestion = questions[currentIndex];

    const nextQuestion = () => {
        setCompletedCounts(prev =>({
            ...prev,
            [currentLevel]: prev[currentLevel] + 1
        }));

         if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Level Complete!");
      setCurrentLevel(null);
      setCurrentIndex(0);
    };

    };

 return (
    <div className="p-8 max-w-lg mx-auto bg-transparent  ">

      <h2 className="text-lg font-bold mb-4 align-center text-white-700  text-center bg-black">
        {currentLevel.toUpperCase()} 
      </h2>

      <div className="bg-black p-6 rounded shadow mb-4  color-white ">
        {currentQuestion}
      </div>

     <button
        onClick={() => setCurrentLevel(null)}
        className="bg-transparent text-white text-lg px-4 py-2 rounded border border-pink-700  "
      >
        ← 
      </button>
      <button
        onClick={nextQuestion}
        className="bg-transparent text-white text-lg px-4 py-2 rounded border border-pink-700"
      >
         → 
      </button>

    </div>
  );
};

export default Session;