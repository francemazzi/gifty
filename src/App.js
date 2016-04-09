import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/globals.css';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
