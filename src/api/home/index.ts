import api from '../../plugins/axiosInstance'
export function getBanner(){
    return api({
        url: '/getBanner'
    })
}
