import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './todolist.css';
import GiftItem from '../GiftItem';
import { shareList } from '../../services/share';

const GiftsList = ({ gifts, match }) => {
  const listId = match.params.listId;
  return (
    <div className="list__container">
      <div className="gifts__container">
        {gifts.map(item => (
          <GiftItem item={item} key={item.id} />
        ))}
      </div>
      {gifts.length > 0 && listId && (
        <button
          className="inviaProposte__button"
          onClick={() => shareList(listId)}
        >
          Condividi le proposte 🎁
        </button>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ gifts: state.lists.gifts });

export default withRouter(connect(mapStateToProps)(GiftsList));
