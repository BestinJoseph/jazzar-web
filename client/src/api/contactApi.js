import axios from 'axios'

export const getAllContacts = () => axios.get(`${process.env.REACT_APP_API_URI}/contacts`)

export const postContacts = (form) => axios.post(`${process.env.REACT_APP_API_URI}/contacts`, form)