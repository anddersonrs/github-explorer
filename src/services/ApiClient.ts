import axios from 'axios';

const ApiClient = axios.create({
  baseURL: 'https://api.github.com',
});

export default ApiClient;
