import React, { useRef, useState } from "react";
import "./Inputfield.css";
import GiftsList from "../Giftslist";
import { Gift } from "../../model";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { giftAdded, increment } from "../../features/Counter/Counter";

//database import
import GiftDataService from "../../services/gift.services";

//test firestore
// import { db } from "../../services/firebase";
// import { collection, addDoc } from "firebase/firestore";

const Inputfield: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  //redux -> counter poi input
  let count = 0;
  count = +useAppSelector((state) => state.counter.value);
  const budgetPresent = useAppSelector((state) => state.counter.budget);
  const dispatch = UseAppDispatch();
  const handleClick = () => {
    dispatch(increment());
  };

  //Gift setup
  const [gift, setGift] = useState<string>("");

  const [id, setId] = useState<string>("");
  const [deleteGift, setDeleteGift] = useState<boolean>(false);

  //Errore setup
  interface MessageInput {
    errorMessage: boolean;
    msg: string;
  }
  const [messageInputField, setMessageInputField] = useState<MessageInput>({
    errorMessage: false,
    msg: "",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    //set error message
    const newGift: Gift = {
      id: count - 1,
      gift: gift,
      delete: deleteGift,
    };
    //cambiato gift in newGift
    gift === ""
      ? setMessageInputField({
          errorMessage: true,
          msg: "Inserisci almeno un regalo",
        })
      : dispatch(giftAdded(newGift));

    //Invio dati firebase
    try {
      await GiftDataService.addGifts(newGift);
      setMessageInputField({
        errorMessage: false,
        msg: "Nuova Gift aggiunta",
      });
    } catch (err) {
      setMessageInputField({
        errorMessage: true,
        msg: "errore caricamento",
      });
    }
    setGift("");
  };

  return (
    <div className="input__container">
      <span className="budgetArea">
        {count === 0
          ? `Non hai inserito alcun desiderio, il tuo budget è di ${budgetPresent}`
          : `Hai inserito ${count} desideri. Il tuo Budget è: ${budgetPresent} €`}
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
