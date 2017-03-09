import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './GitftItem.css';
import { editGift, removeGift } from '../../actions/lists';

class GiftItem extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, value: props.item.gift };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.edit && this.state.edit && this.input) {
      this.input.focus();
    }
  }

  getListId() {
    return this.props.match.params.listId;
  }

  handleDelete() {
    const listId = this.getListId();
    if (listId) this.props.removeGift(listId, this.props.item.id);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  toggleEdit() {
    this.setState(prev => ({ edit: !prev.edit }));
  }

  handleSave(e) {
    e.preventDefault();
    const listId = this.getListId();
    const next = this.state.value.trim();
    if (listId && next && next !== this.props.item.gift) {
      this.props.editGift(listId, this.props.item.id, next);
    }
    this.setState({ edit: false });
  }

  render() {
    const { item } = this.props;
    const { edit, value } = this.state;
    return (
      <div className="giftCard">
        <form className="giftCard__single" onSubmit={this.handleSave}>
          {edit ? (
            <div>
              <input
                ref={node => {
                  this.input = node;
                }}
                className="modify__input"
                value={value}
                onChange={this.handleChange}
              />
              <button className="buttonIcon" type="submit">
                ✅
              </button>
            </div>
          ) : (
            <span className="giftCar__single--text">{item.gift}</span>
          )}

          <button
            className="buttonIcon"
            type="button"
            onClick={this.toggleEdit}
          >
            📝
          </button>
          <button
            className="buttonIcon"
            type="button"
            onClick={this.handleDelete}
          >
            ❌
          </button>
        </form>
      </div>
    );
  }
}

GiftItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    gift: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(connect(null, { editGift, removeGift })(GiftItem));
