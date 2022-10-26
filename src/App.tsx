import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Inputfield from "./Components/Inputfield";
import HeaderUno from "./Components/Header";
import GiftsList from "./Components/Giftslist";
import Budgetplan from "./Components/Budgetplan";
import Homepage from "./Components/Homepage";
//import model
import { Gift } from "./model";

const App: React.FC = () => {
  const [gift, setGift] = useState<string>("");
  const [gifts, setGifts] = useState<Gift[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setGifts([...gifts, { id: Date.now(), gift: gift, delete: false }]);
    setGift("");
  };

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderUno></HeaderUno>
        <Routes>
          {/* Area organizza regalo */}
          <Route path="/organizzaregalo" element={<Budgetplan />} />
          <Route path="/" element={<Homepage />} />
          {/* Area festeggiato */}
          <Route
            path="/festeggiato"
            element={
              <Inputfield
                gift={gift}
                setGift={setGift}
                gifts={gifts}
                setGifts={setGifts}
                handleAdd={handleAdd}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
