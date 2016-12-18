import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
  <div className="home__container">
    <h1>404 — pagina non trovata</h1>
    <Link to="/">Torna alla home</Link>
  </div>
);

export default NotFound;
