import axios from 'axios'

export const fetchProjects = () => axios.get(`${process.env.API_URI}/projects`)