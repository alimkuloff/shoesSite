import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-e-commerce-production.up.railway.app/api/v1',
});

export default api;
