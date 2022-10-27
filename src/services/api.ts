import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.4.245.47:3333',
});

export default api;