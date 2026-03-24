import React from "react";
import QuestionLoader from "./components/QuestionLoader";
import Session from "./components/Session";
import LevelMenu from "./components/LevelMenu";

function App() {
  return (
    <div className="h-screen flex items-center  justify-center bg-gray-900">
      <h1 className="text-white text-2xl">
        <LevelMenu/>
        </h1>
  </div>
);
}

export default App;
