import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const combinedReducers = persistCombineReducers(persistConfig, {
  userItem: require('./UserItemRedux').reducer,
});

export default function configureStore(initialState = {}) {
  let store = createStore(combinedReducers, initialState, applyMiddleware(thunk));

  let persistor = persistStore(store);
  return { store, persistor };
}
