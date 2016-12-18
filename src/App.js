import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './styles/globals.css';
import './App.css';
import Header from './Components/Header';
import Inputfield from './Components/Inputfield';
import GoogleLogin from './Components/GoogleLogin';
import NotFound from './Components/NotFound';

const Shell = ({ children }) => (
  <div className="App">
    <Header />
    {children}
  </div>
);

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={Inputfield} />
      <Route path="login" component={GoogleLogin} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default App;
