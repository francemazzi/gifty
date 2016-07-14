import React from 'react';
import { connect } from 'react-redux';
import './todolist.css';
import GiftItem from '../GiftItem';

const GiftsList = ({ gifts }) => (
  <div className="list__container">
    <div className="gifts__container">
      {gifts.map(item => (
        <GiftItem item={item} key={item.id} />
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({ gifts: state.lists.gifts });

export default connect(mapStateToProps)(GiftsList);
