import "./GitftItem.css";
import { Gift } from "../../model";
import React from "react";
import GiftsList from "../Giftslist";

interface Props {
  item: Gift;
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftItem = ({ item, gifts, setGifts }: Props) => {
  //delete function
  const handleDelete = (id: number) => {
    setGifts(gifts.filter((item) => item.id !== id));
  };
  return (
    <div className="giftCard">
      <form className="giftCard__single">
        <span className="giftCar__single--text">{item.gift}</span>
        <button className="buttonIcon">📝</button>
        <button className="buttonIcon" onClick={() => handleDelete(item.id)}>
          ❌
        </button>
      </form>
    </div>
  );
};

export default GiftItem;
