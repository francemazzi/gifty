import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Inputfield.css';
import GiftsList from '../Giftslist';
import { addGift, loadGifts } from '../../actions/lists';

class Inputfield extends Component {
  constructor(props) {
    super(props);
    this.state = { gift: '' };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadGifts();
  }

  handleChange(e) {
    this.setState({ gift: e.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    if (this.input) this.input.blur();
    const value = this.state.gift.trim();
    if (!value) return;
    this.props.addGift(value).then(() => {
      this.setState({ gift: '' });
    });
  }

  render() {
    const { gifts } = this.props;
    const { gift } = this.state;
    return (
      <div className="input__container">
        <span className="budgetArea">
          {gifts.length === 0
            ? 'Non hai inserito alcun desiderio.'
            : 'Hai inserito ' + gifts.length + ' desideri.'}
        </span>
        <form className="input" onSubmit={this.handleAdd}>
          <input
            type="text"
            ref={node => {
              this.input = node;
            }}
            value={gift}
            onChange={this.handleChange}
            className="input__box"
            placeholder="Cosa desideri? ..."
          />
          <button className="input__submit" type="submit">
            Inserisci
          </button>
        </form>
        <GiftsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({ gifts: state.lists.gifts });

export default connect(mapStateToProps, { addGift, loadGifts })(Inputfield);
