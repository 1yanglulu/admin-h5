import axios from 'axios';
import baseUrl from './env';

axios.defauls.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

