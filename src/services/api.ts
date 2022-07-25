import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.8.1.35:3333',
});

export default api;