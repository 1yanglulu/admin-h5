import axios from 'axios';
import baseUrl from './env';

axios.defauls.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//配置请求拦截
axios.interceptors.request.use(config => {
    config.setHeaders([
        ...
        // 在这里设置请求头与携带token信息
    ])
    return config
 })

