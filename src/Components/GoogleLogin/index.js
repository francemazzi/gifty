import React from 'react';
import { connect } from 'react-redux';
import './googleLogin.css';
import { auth, provider } from '../../services/firebase';

// Login Google OPZIONALE: Gifty funziona anche senza, grazie alla sessione anonima.
const GoogleLogin = ({ user }) => {
  const isSignedIn = !!user && !user.isAnonymous;

  const signIn = () => {
    auth.signInWithPopup(provider).catch(() => {
      // Accesso annullato dall'utente.
    });
  };

  return (
    <div className="login__container">
      {isSignedIn ? (
        <div>
          <h3>Ciao {user.displayName || 'utente'} 👋🏻</h3>
          <button className="login__button" onClick={() => auth.signOut()}>
            Esci
          </button>
        </div>
      ) : (
        <div>
          <h3>Accedi con Google (opzionale)</h3>
          <p>
            Non è necessario: puoi creare e condividere liste anche senza login.
          </p>
          <button className="login__button" onClick={signIn}>
            Accedi con Google
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps)(GoogleLogin);
