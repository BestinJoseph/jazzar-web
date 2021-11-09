/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const headerOptions = {
    baseUrl: process.env.REACT_APP_API_URI
}

let axiosInstance = axios.create(headerOptions)

axiosInstance.interceptors.request.use( async (config) => {
    const token = localStorage.getItem('jwtToken')

    console.log(token)

    if (token) {
        config.headers.common.Authorization = `Bearer ${token}`
    } else {
        delete config.headers.common.Authorization
    }

    return config

}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance
