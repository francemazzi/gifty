import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Inputfield.css';
import GiftsList from '../Giftslist';
import { addGift, loadList } from '../../actions/lists';

const MAX_GIFTS = 8;
const MAX_LENGTH = 80;

class Inputfield extends Component {
  constructor(props) {
    super(props);
    this.state = { gift: '', message: '' };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadIfReady();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.listId !== this.props.match.params.listId ||
      prevProps.authReady !== this.props.authReady
    ) {
      this.loadIfReady();
    }
  }

  loadIfReady() {
    const listId = this.props.match.params.listId;
    if (listId && this.props.authReady) {
      this.props.loadList(listId);
    }
  }

  handleChange(e) {
    this.setState({ gift: e.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    if (this.input) this.input.blur();
    const value = this.state.gift.trim();
    if (!value) {
      this.setState({ message: 'Inserisci almeno un regalo' });
      return;
    }
    if (value.length > MAX_LENGTH) {
      this.setState({ message: 'Massimo ' + MAX_LENGTH + ' caratteri' });
      return;
    }
    if (this.props.gifts.length >= MAX_GIFTS) {
      this.setState({
        message: 'Puoi inserire al massimo ' + MAX_GIFTS + ' desideri'
      });
      return;
    }
    const listId = this.props.match.params.listId;
    if (!listId) return;
    this.setState({ message: '' });
    this.props.addGift(listId, value).then(() => {
      this.setState({ gift: '' });
    });
  }

  render() {
    const { gifts, budget } = this.props;
    const { gift, message } = this.state;
    return (
      <div className="input__container">
        <span className="budgetArea">
          {gifts.length === 0
            ? 'Non hai inserito alcun desiderio. Budget: ' + budget + ' €'
            : 'Hai inserito ' + gifts.length + ' desideri. Budget: ' + budget + ' €'}
        </span>
        <form className="input" onSubmit={this.handleAdd}>
          <input
            type="text"
            ref={node => {
              this.input = node;
            }}
            value={gift}
            maxLength={MAX_LENGTH}
            onChange={this.handleChange}
            className="input__box"
            placeholder="Cosa desideri? ..."
          />
          <button className="input__submit" type="submit">
            Inserisci
          </button>
        </form>
        {message && <span className="input__message">{message}</span>}
        <GiftsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifts: state.lists.gifts,
  budget: state.lists.budget,
  authReady: state.auth.ready
});

export default connect(mapStateToProps, { addGift, loadList })(Inputfield);
