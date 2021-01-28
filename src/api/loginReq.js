import request from '@/api/request'

export function login(params) {
    return request({
        url: '/login',
        method: 'post',
        data:params
    })
}