import axios from 'axios'

export const fetchProjects = () => axios.get(`${process.env.REACT_APP_API_URI}/projects`)

export const postProject = (project) => axios.post(`${process.env.REACT_APP_API_URI}/projects`, project)

export const putProject = (id, project) => axios.put(`${process.env.REACT_APP_API_URI}/projects/${id}`, project)

export const putProjectImages = (id, images) => axios.put(`${process.env.REACT_APP_API_URI}/projects/${id}/images`, images)

export const deleteProjectImage = (id, imageId) => axios.put(`${process.env.REACT_APP_API_URI}/projects/${id}/images/delete`, imageId)