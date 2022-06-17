import api from '../../plugins/axiosInstance'

export function userLogin(){
    return  api({url:'/login'})
}
