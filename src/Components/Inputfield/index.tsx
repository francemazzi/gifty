import React, { useRef } from "react";
import "./Inputfield.css";
import GiftsList from "../Giftslist";
import { Gift } from "../../model";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { increment } from "../../features/Counter/Counter";
import { useSelector } from "react-redux";

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

  //redux -> counter poi input
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = UseAppDispatch();
  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <div className="input__container">
      <span className="budgetArea">
        Hai inserito {count} desideri. Il tuo Budget è: 150€
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
      <GiftsList gifts={gifts} setGifts={setGifts} />
    </div>
  );
};

export default Inputfield;
