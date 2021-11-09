import axiosInstance from '../helpers/axiosInstance'

export const registerApi = (user) => axiosInstance.post(`${process.env.REACT_APP_API_URI}/users/signup`, user)

export const loginApi = (user) => axiosInstance.post(`${process.env.REACT_APP_API_URI}/users/login`, user)