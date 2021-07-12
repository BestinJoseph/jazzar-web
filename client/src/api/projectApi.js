import axios from 'axios'

export const fetchProjects = () => axios.get('projects')