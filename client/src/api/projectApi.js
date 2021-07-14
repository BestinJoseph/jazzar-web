import axios from 'axios'

const url = 'https://api-ojce.herokuapp.com/api'

export const fetchProjects = () => axios.get(`${url}/projects`)