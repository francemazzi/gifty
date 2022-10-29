import "./budgetList.css";
import BudgetItems from "../BudgetItems";
//Redux
import { useAppSelector, UseAppDispatch } from "../../features/hooks";

const BudgetList: React.FC = () => {
  const gifts = useAppSelector((state) => state.counter.giftList);
  return (
    <div className="list__container">
      {gifts.length > 0 ? (
        <div>
          <span>Le scelte del festeggiato sono: </span>
          <BudgetItems />
        </div>
      ) : (
        <button className="inviaProposte__button">
          Condividi al festeggiato 🚀
        </button>
      )}
    </div>
  );
};
export default BudgetList;
