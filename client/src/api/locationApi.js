import axios from 'axios'

export const getlocationapi = () => axios.get(`${process.env.REACT_APP_API_URI}/branches`)

export const postlocationapi = (branch) => axios.post(`${process.env.REACT_APP_API_URI}/branches`, branch)

export const putlocationapi = (id, branch) => axios.put(`${process.env.REACT_APP_API_URI}/branches/edit`, branch, {params: { id: id }})
