import axios from 'axios'

export const fetchProjects = () => axios.get(`${process.env.REACT_APP_API_URI}/projects`)