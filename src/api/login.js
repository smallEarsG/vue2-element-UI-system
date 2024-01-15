import axios from 'axios'

export function login (data) {
    return axios.post(`/login/user`,data)
}
export function loginOut () {
    return axios.post(`/login/out`)
}