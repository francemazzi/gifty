import React from "react";
import "./todolist.css";
import { Gift } from "../../model";
interface Props {
  gifts: Gift[];
  setGifts: React.Dispatch<React.SetStateAction<Gift[]>>;
}

const GiftsList: React.FC = ({ gifts, setGifts }: Props) => {
  return (
    <div className="gifts">
      <div></div>
    </div>
  );
};

export default GiftsList;
