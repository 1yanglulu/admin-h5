import axios from 'axios';
import baseUrl from './env';

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials:true,
  timeout:2500
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

