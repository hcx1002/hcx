// import api from '../../plugins/axiosInstance'
import hcxRequest from "@/utils/axios";


export function getData() {
    return hcxRequest({
        url: '/test'
    })
}
