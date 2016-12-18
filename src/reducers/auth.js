import { AUTH_SET_USER } from '../actions/types';

const initialState = {
  user: null,
  ready: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, user: action.user, ready: true };
    default:
      return state;
  }
};

export default auth;
