import axios from 'axios';

import configureStore from '../redux/Store';
const { store } = configureStore();

const request = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const tokenlessRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((req) => {
  let token = store.getState()?.userItem?.token;
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export { request, tokenlessRequest };
