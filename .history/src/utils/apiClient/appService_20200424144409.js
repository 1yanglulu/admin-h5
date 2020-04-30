import axios from 'axios';
import baseUrl from './env';

const instance = axios.create({
  baseURL: baseUrl
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.timeout = 2500;

