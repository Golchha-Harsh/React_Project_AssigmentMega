import axios from 'axios';
const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
});

api.interceptors.request.use(
  (config) => {
    console.log('request sent:', config);
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
        //as i have dummy json so i dont need to add custom headrs because it is 
        //for api to know that user is valid but as it is dummy api so we dont use
        config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    console.error('request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('response received:', response);
    return response;
  },
  (error) => {
    console.error('response error:', error);
    return Promise.reject(error);
  }
);

export default api;