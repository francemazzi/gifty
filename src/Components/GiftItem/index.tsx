import "./GitftItem.css";
import { Gift } from "../../model";
import React from "react";
import { useState, useRef, useEffect } from "react";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { decremet } from "../../features/Counter/Counter";
import { useSelector } from "react-redux";

interface Props {
  item: Gift;
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftItem = ({ item, gifts, setGifts }: Props) => {
  //redux -> counter poi input
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = UseAppDispatch();

  //delete function
  const handleDelete = (id: number) => {
    setGifts(gifts.filter((item) => item.id !== id));
    dispatch(decremet());
  };

  //edit area

  // edit
  const [edit, setEdit] = useState<Boolean>(false);
  // edit dentro a card
  const [editGift, setEditgift] = useState<string>(item.gift);
  //edit function
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setGifts(
      gifts.map((item) => (item.id === id ? { ...item, gift: editGift } : item))
    );

    // setEdit(false);
  };
  const handleOk = () => {
    setEdit(false);
  };

  //focus modify input (su inputbox)

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <div className="giftCard">
      <form
        className="giftCard__single"
        onSubmit={(e) => handleEdit(e, item.id)}
      >
        {edit ? (
          <div>
            <input
              ref={inputRef}
              value={editGift}
              onChange={(e) => setEditgift(e.target.value)}
              className="modify__input"
            />
            <button
              value={editGift}
              className="buttonIcon"
              onClick={() => handleOk()}
            >
              ✅
            </button>
          </div>
        ) : (
          <span className="giftCar__single--text">{item.gift}</span>
        )}

        <button
          className="buttonIcon"
          onClick={() => {
            if (!edit && !item.delete) {
              setEdit(!edit);
            }
          }}
        >
          📝
        </button>
        <button className="buttonIcon" onClick={() => handleDelete(item.id)}>
          ❌
        </button>
      </form>
    </div>
  );
};

export default GiftItem;
