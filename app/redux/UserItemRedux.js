import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

//State
export const INITIAL_STATE = Immutable({
  user: {
    success: null,
    token: null,
    firstname: null,
    surname: null,
  },
});

//Types and creators
const { Types, Creators } = createActions({
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
      success: null,
      token: null,
      firstname: null,
      surname: null,
    },
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
  [Types.RESET_USER]: resetUser,
});
