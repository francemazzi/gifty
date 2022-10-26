import React, { useRef } from "react";
import "./Inputfield.css";
import GiftsList from "../Giftslist";
import { Gift } from "../../model";

interface Props {
  gift: string;
  setGift: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const Inputfield: React.FC<Props> = ({
  gift,
  setGift,
  handleAdd,
  gifts,
  setGifts,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="input__container">
      <span className="budgetArea">Il tuo Budget è: 150€</span>
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
        <button className="input__submit" type="submit">
          Inserisci
        </button>
      </form>
      <GiftsList gifts={gifts} setGifts={setGifts} />
    </div>
  );
};

export default Inputfield;
