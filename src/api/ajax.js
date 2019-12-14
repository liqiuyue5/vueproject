import axios from "axios";
import qs from "qs";
const instance = axios.create({
  baseURL:"/api",
  timeout:20000
})
// 添加请求拦截器
instance.interceptors.request.use((config)=>{
  const data=config.data,
  if(data instanceof Object){
    config.data=qs.stringify(data)
  }
  return config
})
// 添加响应拦截器
instance.interceptors.response.use(
  (response)=>{
    return response.data
},(error)=>{
  return new Promise(()=>{})
})