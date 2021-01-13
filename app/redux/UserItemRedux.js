import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

//State
export const INITIAL_STATE = Immutable({
  user: null,
});

//Types and creators
const { Types, Creators } = createActions({
  setUser: ['user'],
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_USER]: setUser,
});
