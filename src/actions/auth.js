import { AUTH_SET_USER } from './types';

export const setUser = user => ({
  type: AUTH_SET_USER,
  user
});
