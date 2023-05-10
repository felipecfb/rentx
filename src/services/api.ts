import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.6.1.204:3333',
});

export default api;