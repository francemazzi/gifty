import React, { useRef, useState } from "react";
import "./Inputfield.css";
import GiftsList from "../Giftslist";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { giftAdded, increment } from "../../features/Counter/Counter";

const Inputfield: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //redux -> counter poi input
  const count = useAppSelector((state) => state.counter.value);
  const budgetPresent = useAppSelector((state) => state.counter.budget);
  const dispatch = UseAppDispatch();
  const handleClick = () => {
    dispatch(increment());
  };

  //gift setup
  const [gift, setGift] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(giftAdded(gift));
    setGift("");
  };

  return (
    <div className="input__container">
      <span className="budgetArea">
        Hai inserito {count} desideri. Il tuo Budget è: {budgetPresent} €
      </span>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          ref={inputRef}
          value={gift}
          onChange={(e) => {
            setGift(e.target.value);
          }}
          className="input__box"
          placeholder="Cosa desideri? ..."
        />
        <button className="input__submit" type="submit" onClick={handleClick}>
          Inserisci
        </button>
      </form>
      <GiftsList />
    </div>
  );
};

export default Inputfield;
