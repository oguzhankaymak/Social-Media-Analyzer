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

let store = createStore(combinedReducers, undefined, applyMiddleware(thunk));
let persistor = persistStore(store);

const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
