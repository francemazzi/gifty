import React from "react";
import "./todolist.css";
import { Gift } from "../../model";
import GiftItem from "../GiftItem";

interface Props {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftsList: React.FC<Props> = ({ gifts, setGifts }: Props) => {
  return (
    <div className="gifts__container">
      {gifts.map((item) => (
        <GiftItem item={item} key={item.id} gifts={gifts} setGifts={setGifts} />
      ))}
    </div>
  );
};

export default GiftsList;
