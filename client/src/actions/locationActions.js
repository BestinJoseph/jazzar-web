import { GET_ERRORS, GET_LOCATIONS, POST_LOCATION, PUT_LOCATION } from "./types";
import { getlocationapi, postlocationapi, putlocationapi } from '../api/locationApi.js'

export const getLocationsAction = () => async (dispatch) => {
    try {
        const { data } = await getlocationapi()
        dispatch({type: GET_LOCATIONS, payload: data.branches })
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err})
    }
}

export const postLocationAction = (branch) => async (dispatch) => {
    try {
        const { data } = await postlocationapi(branch)
        dispatch({type: POST_LOCATION, payload: data.branch})
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err})
    }
}

export const putLocationAction = (id, branch) => async (dispatch) => {
    try {
        const { data } = await putlocationapi(id, branch)
        dispatch({type: PUT_LOCATION, payload: data.branch})
    } catch (err) {
        dispatch({ type: GET_ERRORS, payload: err })
    }
}