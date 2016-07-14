import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import { auth } from './services/firebase';
import { setUser } from './actions/auth';

// Tiene allineato lo stato Redux con la sessione Firebase corrente.
auth.onAuthStateChanged(user => {
  if (user) {
    store.dispatch(
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        isAnonymous: user.isAnonymous
      })
    );
  } else {
    store.dispatch(setUser(null));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
