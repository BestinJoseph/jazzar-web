import axios from 'axios'

export const fetchProjects = () => axios.get(`https://api-ojce.herokuapp.com/api/projects`)