import React from "react";
import Session from "./components/Session";
import LevelMenu from "./components/LevelMenu";

import light from "./data/light.json";
import personal from "./data/personal.json";
import deep from "./data/deep.json";
import verydeep from "./data/verydeep.json";

const questions = {
  Light: light,
  Personal: personal,
  Deep: deep,
  "Very Deep": verydeep
};

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/pageBg.jpg')" }}>
      <h1 className="text-white text-2xl">
        <Session/>
        </h1>
  </div>
);
}

export default App;
