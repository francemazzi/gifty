import "./GitftItem.css";
import { Gift } from "../../model";
import React from "react";

interface Props {
  item: Gift;
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftItem = ({ item, gifts, setGifts }: Props) => {
  return (
    <div className="giftCard">
      <form className="giftCard__single">
        <span className="giftCar__single--text">{item.gift}</span>
      </form>
    </div>
  );
};

export default GiftItem;
