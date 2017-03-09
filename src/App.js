import React from 'react';
import './styles/globals.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/AuthProvider';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Inputfield from './Components/Inputfield';
import Budgetplan from './Components/Budgetplan';
import GoogleLogin from './Components/GoogleLogin';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* Area festeggiato: aggiunge i desideri alla lista condivisa */}
          <Route path="/lista/:listId" component={Inputfield} />
          {/* Area organizzatore: imposta il budget e vede le scelte */}
          <Route path="/organizza/:listId" component={Budgetplan} />
          {/* Login Google opzionale (non obbligatorio per usare l'app) */}
          <Route path="/login" component={GoogleLogin} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
