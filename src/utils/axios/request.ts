import Request from "@/utils/axios/requestInstance";
import { baseUrl } from "@/common/server"

const request = new Request({
    baseURL: baseUrl,
    timeout:1000 * 60,
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => {
            return config
        },
        // 响应拦截器
        responseInterceptors: result => {
            return result
        },
    }
})
export default request
