import { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../services/firebase';
import { setUser } from '../../actions/auth';

// Garantisce sempre una sessione Firebase (anonima) senza alcuna schermata di
// login, cosi' le regole del database possono richiedere auth != null.
class AuthProvider extends Component {
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        this.props.setUser({
          uid: user.uid,
          displayName: user.displayName,
          isAnonymous: user.isAnonymous
        });
      } else {
        auth.signInAnonymously().catch(() => this.props.setUser(null));
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  render() {
    return this.props.children;
  }
}

export default connect(null, { setUser })(AuthProvider);
