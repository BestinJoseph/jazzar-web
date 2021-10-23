import axios from "axios"

export const getAllDailyApi = () => axios.get(`${process.env.REACT_APP_API_URI}/dailies`)

export const postDailyApi = (id, daily) => axios.post(`${process.env.REACT_APP_API_URI}/dailies/${id}/create`, daily)

export const putDailyApi = (id, daily) => axios.put(`${process.env.REACT_APP_API_URI}/dailies/${id}`, daily)