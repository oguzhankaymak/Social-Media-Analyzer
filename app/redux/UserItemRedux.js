import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

//State
export const INITIAL_STATE = Immutable({
  token: null,
  user: {
    firstname: null,
    surname: null,
  },
});

//Types and creators
const { Types, Creators } = createActions({
  setToken: ['token'],
  resetToken: null,
  setUser: ['user'],
  resetUser: null,
});

export const UserTypes = Types;
export default Creators;

//Reducers
export const setUser = (state, action) => {
  return {
    ...state,
    user: action.user,
  };
};

export const resetUser = (state, action) => {
  return {
    ...state,
    user: {
      firstname: null,
      surname: null,
    },
  };
};

export const setToken = (state, action) => {
  return {
    ...state,
    token: action.token,
  };
};

export const resetToken = (state, action) => {
  return {
    ...state,
    token: null,
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.RESET_USER]: resetUser,
  [Types.SET_TOKEN]: setToken,
  [Types.RESET_TOKEN]: resetToken,
});
