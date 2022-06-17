import api from '../../plugins/axiosInstance'

export function getData() {
    return api({
        url: '/test'
    })
}
