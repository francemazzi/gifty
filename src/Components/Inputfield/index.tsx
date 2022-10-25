import React, { useRef } from "react";
import "./Inputfield.css";

interface Props {
  gift: string;
  setGift: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<Props> = ({ gift, setGift, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
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
        placeholder="Inserisci un tuo desiderio..."
      />
      <button className="input__submit" type="submit">
        Inserisci
      </button>
    </form>
  );
};

export default Inputfield;
