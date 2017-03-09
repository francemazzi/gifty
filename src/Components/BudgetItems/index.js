import React from 'react';
import { connect } from 'react-redux';
import './budgetItems.css';

const BudgetItems = ({ gifts }) => (
  <div className="giftCard__container">
    {gifts.map(item => (
      <div className="giftCard" key={item.id}>
        {item.gift}
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({ gifts: state.lists.gifts });

export default connect(mapStateToProps)(BudgetItems);
