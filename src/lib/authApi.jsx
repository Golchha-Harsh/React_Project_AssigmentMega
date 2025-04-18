import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://dummyjson.com',
});

export default authApi;
