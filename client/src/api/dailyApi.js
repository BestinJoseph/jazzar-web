// import axios from "axios"
import axiosInstance from "../helpers/axiosInstance"

export const getAllDailyApi = () => axiosInstance.get(`${process.env.REACT_APP_API_URI}/dailies`)

export const postDailyApi = (id, daily) => axiosInstance.post(`${process.env.REACT_APP_API_URI}/dailies/${id}/create`, daily)

export const putDailyApi = (id, daily) => axiosInstance.put(`${process.env.REACT_APP_API_URI}/dailies/${id}`, daily)
