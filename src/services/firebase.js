import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// TODO: spostare la config in variabili d'ambiente
const config = {
  apiKey: 'INSERISCI_API_KEY',
  authDomain: 'gifty-app.firebaseapp.com',
  databaseURL: 'https://gifty-app.firebaseio.com',
  storageBucket: 'gifty-app.appspot.com',
  messagingSenderId: '000000000000'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
