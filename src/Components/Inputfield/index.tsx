import React from "react";
import "./Inputfield.css";

const Inputfield = () => {
  return (
    <>
      <div>
        <form className="input">
          <input
            className="input__box"
            type="input"
            placeholder="Inserisci un tuo desiderio..."
          />
          <button className="input__submit">Proponi</button>
        </form>
      </div>
    </>
  );
};

export default Inputfield;
