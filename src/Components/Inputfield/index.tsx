import React from "react";
import "./Inputfield.css";

interface Props {
  gift: string;
  setGift: React.Dispatch<React.SetStateAction<string>>;
}

const Inputfield: React.FC<Props> = ({ gift, setGift }: Props) => {
  return (
    <div>
      <form className="input">
        <input
          value={gift}
          onChange={() => setGift(e.target.value)}
          className="input__box"
          type="input"
          placeholder="Inserisci un tuo desiderio..."
        />
        <button className="input__submit">Proponi</button>
      </form>
    </div>
  );
};

export default Inputfield;
