// import api from '../../plugins/axiosInstance'
import hcxRequest from "@/utils/axios";
export function getBanner(){
    return hcxRequest({
        url: '/getBanner'
    })
}
