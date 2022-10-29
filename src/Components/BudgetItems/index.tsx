import "./budgetItems.css";

import { useAppSelector } from "../../features/hooks";

const BudgetItems: React.FC = () => {
  const gifts = useAppSelector((state) => state.counter.giftList);

  return (
    <div className="giftCard__container">
      {gifts.map((item) => (
        <div className="giftCard" key={item.id}>
          {item.gift}
        </div>
      ))}
    </div>
  );
};
export default BudgetItems;
