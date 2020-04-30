import axios from 'axios';
import baseUrl from './envConfig';

console.log("baseUrl",baseUrl)
// axios.defauls.baseURL = baseUrl
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
//配置请求拦截
axios.interceptors.request.use(config => {
  config.setHeaders([

      // 在这里设置请求头与携带token信息
  ])
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
   // 在这里判断后台返回数据携带的请求码
  if (response.data.retcode === 200 || response.data.retcode === '200') {
    return response.data.data || response.data
  }else {
    // 非200请求报错
    throw Error(response.data.msg || '服务异常')
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;