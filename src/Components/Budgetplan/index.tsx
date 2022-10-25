import "./Budgetplan.css";
import React from "react";
import InputBudget from "../InputBudget";

//Budgetplan
const Budgetplan = () => {
  return (
    <div className="budget__container">
      <span>Inserisci il budget per il regalo</span>
      <InputBudget />
    </div>
  );
};

export default Budgetplan;
