import React from "react";
import "./todolist.css";
import { Gift } from "../../model";
import GiftItem from "../GiftItem";

interface Props {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftsList: React.FC<Props> = ({ gifts, setGifts }: Props) => {
  console.log(gifts);
  return (
    <div className="list__container">
      <div className="gifts__container">
        {gifts.map((item) => (
          <GiftItem
            item={item}
            key={item.id}
            gifts={gifts}
            setGifts={setGifts}
          />
        ))}
      </div>
      {gifts.length > 0 ? (
        <button className="inviaProposte__button">Invia le proposte 🎁</button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default GiftsList;
