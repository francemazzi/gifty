import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Budgetplan.css';
import InputBudget from '../InputBudget';
import { loadList } from '../../actions/lists';

class Budgetplan extends Component {
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

  render() {
    return (
      <div className="budget__container">
        <span>Inserisci il budget per il regalo</span>
        <InputBudget />
      </div>
    );
  }
}

const mapStateToProps = state => ({ authReady: state.auth.ready });

export default connect(mapStateToProps, { loadList })(Budgetplan);
