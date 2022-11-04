import "./GitftItem.css";
import { Gift } from "../../model";
import React from "react";
import { useState, useRef, useEffect } from "react";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import {
  decremet,
  removeGift,
  giftAdded,
  modifyGift,
} from "../../features/Counter/Counter";
import { useSelector } from "react-redux";

//firebase
import GiftDataService from "../../services/gift.services";
import { DocumentData } from "firebase/firestore";

const GiftItem = ({ item }: any) => {
  //redux -> counter poi input
  const dispatch = UseAppDispatch();
  const gifts = useAppSelector((state) => state.counter.giftList);

  //firebase
  const [list, setList] = useState<DocumentData>([]);
  useEffect(() => {
    getGiftGroup();
  }, []);
  const getGiftGroup = async () => {
    const data: DocumentData = await GiftDataService.getAllGifts();
    setList(data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs);
  };

  const remove = async (id: string) => {
    await GiftDataService.deleteGift(+id);
    getGiftGroup();
  };

  //delete function
  const handleDelete = () => {
    dispatch(removeGift(item.id));
    remove(String(item.id));
    getGiftGroup();
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
    //editGift
    // dispatch(modifyGift({ payload: { id: item.id, gift: editGift } }));
    dispatch(modifyGift(item));
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
              className="modify__input"
              value={editGift}
              onChange={(e) => setEditgift(e.target.value)}
            />
            <button
              className="buttonIcon"
              value={editGift}
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
        <button className="buttonIcon" onClick={handleDelete}>
          ❌
        </button>
      </form>
    </div>
  );
};

export default GiftItem;
