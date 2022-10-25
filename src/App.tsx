import React from "react";
import "./App.css";
import { useState } from "react";
import Inputfield from "./Components/Inputfield";
import HeaderUno from "./Components/Header";
// import GiftsList from "./Components/Giftslist";
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
    <div className="App">
      <HeaderUno></HeaderUno>
      <Inputfield
        gift={gift}
        setGift={setGift}
        handleAdd={handleAdd}
      ></Inputfield>
      {/* <GiftsList /> */}
      {gifts.map((e) => (
        <li>{e.gift}</li>
      ))}
    </div>
  );
};

export default App;
