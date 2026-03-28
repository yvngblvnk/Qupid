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

    const questions = questionsByLevel[currentLevel];
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
    <div className="p-8 max-w-lg mx-auto">

      <h2 className="text-xl font-bold mb-4">
        {currentLevel.toUpperCase()} Level
      </h2>

      <div className="bg-white p-6 rounded shadow mb-4">
        {currentQuestion.question}
      </div>

      <button
        onClick={nextQuestion}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Next Question
      </button>

      <button
        onClick={() => setCurrentLevel(null)}
        className="block mt-4 text-purple-600 underline"
      >
        Back to Levels
      </button>

    </div>
  );
};

export default Session;