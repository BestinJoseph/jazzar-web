import axios from 'axios'

export const registerApi = (user) => axios.post(`${process.env.REACT_APP_API_URI}/users/signup`, user)

export const loginApi = (user) => axios.post(`${process.env.REACT_APP_API_URI}/users/login`, user)