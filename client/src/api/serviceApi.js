import axios from 'axios'

export const fetchServices = () => axios.get(`${process.env.REACT_APP_API_URI}/services`)

export const fetchOneService = (slug) => axios.get(`${process.env.REACT_APP_API_URI}/services/${slug}`)

export const postServices = (newService) => axios.post(`${process.env.REACT_APP_API_URI}/services`, newService)

export const putServices = (slug, editedService) => axios.put(`${process.env.REACT_APP_API_URI}/services/${slug}`, editedService)

export const putServicesImages = (id, serviceImages) => axios.put(`${process.env.REACT_APP_API_URI}/services/${id}/images`, serviceImages)