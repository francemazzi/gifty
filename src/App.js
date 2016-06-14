import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/globals.css';
import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import GoogleLogin from './Components/GoogleLogin';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={GoogleLogin} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
