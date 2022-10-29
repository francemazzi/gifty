import "./InputBudget.css";
import React, { useRef, useState } from "react";
//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";
import { budgetAdd } from "../../features/Counter/Counter";
import BudgetList from "../BudgetList";

const InputBudget: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = UseAppDispatch();
  const budgetPresent = useAppSelector((state) => state.counter.budget);

  //budget setup
  const [budgetNumber, setBudgetNumber] = useState<number>(0);

  const handleClick = () => {};
  const handleRemove = () => {
    dispatch(budgetAdd(0));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(budgetAdd(budgetNumber));
    setBudgetNumber(0);
  };

  return (
    <div className="budget__container">
      {budgetPresent < 1 ? (
        <form
          onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
          }}
        >
          <input
            className="input__box"
            onChange={(e) => {
              setBudgetNumber(+e.target.value);
            }}
            placeholder="Il budget è..."
          />
          <button className="input__submit" type="submit" onClick={handleClick}>
            Inserisci
          </button>
        </form>
      ) : (
        <div className="budget__container">
          <h1>Il tuo budget è di {budgetPresent} €</h1>
          <button className="input__submit" onClick={handleRemove}>
            ❌ Rimuovi
          </button>
        </div>
      )}
      <BudgetList />
    </div>
  );
};
export default InputBudget;
