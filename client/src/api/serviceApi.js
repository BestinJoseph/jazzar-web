import axios from 'axios'

export const fetchServices = () => axios.get(`${process.env.REACT_APP_API_URI}/services`)

export const fetchOneService = (slug) => axios.get(`${process.env.REACT_APP_API_URI}/services/${slug}`)