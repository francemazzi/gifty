import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// La config arriva dalle variabili d'ambiente REACT_APP_FIREBASE_* (vedi .env.example).
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
