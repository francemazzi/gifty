import React from "react";
import "./Inputfield.css";

interface Props {
  gift: string;
  setGift: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({ gift, setGift, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={(e) => handleAdd(e)}>
      <input
        value={gift}
        onChange={(e) => setGift(e.target.value)}
        className="input__box"
        type="input"
        placeholder="Inserisci un tuo desiderio..."
      />
      <button className="input__submit" type="submit">
        Proponi
      </button>
    </form>
  );
};

export default Inputfield;
