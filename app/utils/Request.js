import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((req) => {
  return req;
});

export default request;
