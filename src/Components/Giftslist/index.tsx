import React from "react";
import "./todolist.css";
import { Gift } from "../../model";
interface Props {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftsList: React.FC<Props> = ({ gifts, setGifts }: Props) => {
  return (
    <div className="gifts">
      {gifts.map((item) => (
        <li>{item.gift}</li>
      ))}
    </div>
  );
};

export default GiftsList;
