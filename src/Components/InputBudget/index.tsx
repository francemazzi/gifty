import "./InputBudget.css";
import React from "react";

const InputBudget = () => {
  return (
    <form>
      <input className="input__box" placeholder="Inserisci il budget..." />
      <button className="input__submit" type="submit">
        Inserisci
      </button>
    </form>
  );
};
export default InputBudget;
