import React, { Component } from 'react';
import './homepage.css';
import { createList } from '../../services/gift.services';

const extractListId = input => {
  const trimmed = input.trim();
  if (!trimmed) return null;
  // Accetta sia un link completo (.../lista/ABC) sia il solo id.
  const parts = trimmed.split(/[/?#]/).filter(Boolean);
  return parts.length ? parts[parts.length - 1] : null;
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { busy: false, link: '' };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleCreate() {
    this.setState({ busy: true });
    createList()
      .then(id => {
        this.props.history.push('/lista/' + id);
      })
      .catch(() => {
        this.setState({ busy: false });
      });
  }

  handleChange(e) {
    this.setState({ link: e.target.value });
  }

  handleOpen(e) {
    e.preventDefault();
    const id = extractListId(this.state.link);
    if (id) this.props.history.push('/lista/' + id);
  }

  render() {
    const { busy, link } = this.state;
    return (
      <div className="home__container">
        <h1>La soluzione al problema della scelta del regalo giusto</h1>
        <div className="navigate">
          <button onClick={this.handleCreate} disabled={busy}>
            {busy ? 'Creo la lista…' : 'Crea una nuova lista 🎁'}
          </button>
        </div>
        <form className="home__open" onSubmit={this.handleOpen}>
          <input
            value={link}
            onChange={this.handleChange}
            placeholder="Hai già un link? Incollalo qui…"
          />
          <button type="submit">Apri lista</button>
        </form>
      </div>
    );
  }
}

export default Homepage;
