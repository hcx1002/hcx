import axios from "axios";
import { ElMessage } from 'element-plus';
const config = {
    baseURL: 'http://localhost:8080',
    timeout: 2000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};
const API = axios.create(config)
// 默认 post 请求，使用 application/json 形式
API.defaults.headers.post['Content-Type'] = 'application/json';

//http请求拦截器
API.interceptors.request.use(require => {
    console.log(require)
    return require;
}, error => {
    console.log(error);

})
//http响应拦截器
API.interceptors.response.use((response):any => {
    console.log(response)
    if (response.data.status === 200) {
        return response.data
    }else{
        ElMessage({message:response.data.msg,type:'error'})
        return Promise.reject(response.data.data);
    }
}, error => {
    console.log(error)
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
})

export default API
