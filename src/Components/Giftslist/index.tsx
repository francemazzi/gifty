import React from "react";
import "./todolist.css";
import { Gift } from "../../model";
import GiftItem from "../GiftItem";

//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";

const GiftsList: React.FC = () => {
  const gifts = useAppSelector((state) => state.counter.giftList);
  return (
    <div className="list__container">
      <div className="gifts__container">
        {gifts.map((item) => (
          <GiftItem item={item} key={item.id} />
        ))}
      </div>
      {/* Invio proposte  */}
      {gifts.length > 0 ? (
        <button className="inviaProposte__button">Invia le proposte 🎁</button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default GiftsList;
