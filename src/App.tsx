import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Inputfield from "./Components/Inputfield";
import HeaderUno from "./Components/Header";
import GiftsList from "./Components/Giftslist";
import Budgetplan from "./Components/Budgetplan";
import Homepage from "./Components/Homepage";
import LoginInput from "./Components/Login";

//import model
import { Gift } from "./model";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderUno></HeaderUno>
        <Routes>
          {/* Area organizza regalo */}
          <Route path="/organizzaregalo" element={<Budgetplan />} />
          <Route path="/" element={<Homepage />} />
          {/* Area festeggiato */}
          <Route path="/festeggiato" element={<Inputfield />} />
          {/* Area login */}
          <Route path="/login" element={<LoginInput />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
