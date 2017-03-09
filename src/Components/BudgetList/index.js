import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './budgetList.css';
import BudgetItems from '../BudgetItems';
import { shareList } from '../../services/share';

const BudgetList = ({ gifts, match }) => {
  const listId = match.params.listId;
  return (
    <div className="list__container">
      {gifts.length > 0 ? (
        <div>
          <span>Le scelte del festeggiato sono: </span>
          <BudgetItems />
        </div>
      ) : (
        <button
          className="inviaProposte__button"
          onClick={() => listId && shareList(listId)}
        >
          Condividi al festeggiato 🚀
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ gifts: state.lists.gifts });

export default withRouter(connect(mapStateToProps)(BudgetList));
