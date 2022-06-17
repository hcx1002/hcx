// import api from '../../plugins/axiosInstance'
import hcxRequest from "@/utils/axios";

export function userLogin(){
    return  hcxRequest({url:'/login'})
}
