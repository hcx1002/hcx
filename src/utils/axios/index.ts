import type { RequestConfig } from "@/utils/axios/types";
import request from "@/utils/axios/request";

interface HcxRequestConfig<T> extends RequestConfig {
    data?: T
}

interface HcxResponse<T> {
    code: Number
    msg: String
    data: T
}

const hcxRequest = <D, T = any>(config: HcxRequestConfig<D>) => {
    const {method = 'GET'} = config
    if (method === 'GET' || method === 'get') {
        config.params = config.data
    }
    return request.request<HcxResponse<T>>(config)
}
export default hcxRequest
