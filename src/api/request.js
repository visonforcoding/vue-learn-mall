import axios from 'axios'
import config from '@/config'
import Vue from 'vue'

// const development = config.isDev
// const baseURL = development ? `${config.getBaseUrl()}/api` : config.getBaseUrl()
const baseURL = config.getBaseUrl()+":"+config.serverPort.java;
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: baseURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000*120 // request timeout

})


// response interceptor
service.interceptors.response.use(
response => {
  const res = response.data
  //状态逻辑

  return res;
  
},
error => {
  console.log('err' + error) // for debug
  Vue.notify({
    group: 'common',
    title: '系统错误',
    text: error.message,
    type:"error"
  })
  return Promise.reject(error)
}
)

export default service