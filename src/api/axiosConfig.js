import axios from "axios"

const baseUrl = '/api'
axios.defaults.baseURL = baseUrl
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        }else{
            console.log(response);
        }
     
    },
    error => {
        return Promise.reject(error)
    }

)