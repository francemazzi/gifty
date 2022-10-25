import React from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";
import HeaderUno from "./Components/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderUno></HeaderUno>
      <Inputfield></Inputfield>
    </div>
  );
};

export default App;
