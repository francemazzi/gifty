import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './InputBudget.css';
import BudgetList from '../BudgetList';
import { saveBudget } from '../../actions/lists';

class InputBudget extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getListId() {
    return this.props.match.params.listId;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAdd(e) {
    e.preventDefault();
    if (this.input) this.input.blur();
    const listId = this.getListId();
    const amount = Number(this.state.value);
    if (listId && Number.isFinite(amount) && amount > 0) {
      this.props.saveBudget(listId, amount);
    }
    this.setState({ value: '' });
  }

  handleRemove() {
    const listId = this.getListId();
    if (listId) this.props.saveBudget(listId, 0);
  }

  render() {
    const { budget } = this.props;
    const { value } = this.state;
    return (
      <div className="budget__container">
        {budget < 1 ? (
          <form onSubmit={this.handleAdd}>
            <input
              ref={node => {
                this.input = node;
              }}
              className="input__box"
              type="number"
              min={1}
              value={value}
              onChange={this.handleChange}
              placeholder="Il budget è..."
            />
            <button className="input__submit" type="submit">
              Inserisci
            </button>
          </form>
        ) : (
          <div className="budget__container">
            <h1>Il tuo budget è di {budget} €</h1>
            <button className="input__submit" onClick={this.handleRemove}>
              ❌ Rimuovi
            </button>
          </div>
        )}
        <BudgetList />
      </div>
    );
  }
}

const mapStateToProps = state => ({ budget: state.lists.budget });

export default withRouter(connect(mapStateToProps, { saveBudget })(InputBudget));
