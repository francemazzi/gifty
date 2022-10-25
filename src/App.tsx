import React from "react";
import "./App.css";
import { useState } from "react";
import Inputfield from "./Components/Inputfield";
import HeaderUno from "./Components/Header";

const App: React.FC = () => {
  const [gift, setGift] = useState<string>("");

  return (
    <div className="App">
      <HeaderUno></HeaderUno>
      <Inputfield gift={gift} setTodo={setGift}></Inputfield>
    </div>
  );
};

export default App;
