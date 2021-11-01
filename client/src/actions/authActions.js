import jwt_decode from 'jwt-decode'

import setAuthToken from '../utils/setAuthToken'
import { CLEAR_ERRORS, GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types'
import { registerApi, loginApi } from '../api/authApi'

export const registerUser = (user, history) => async (dispatch) => {
    console.log(user)
    try {
        const { data } = await registerApi(user)
        if(data) {
            history.push('/login')
        }
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err.response.data })
    }
}

export const loginUser = (user) => async (dispatch) => {
    try {
        const { data } = await loginApi(user)
        const { token } = data
        console.log(data)
        localStorage.setItem('jwtToken', token)
        setAuthToken(token)
        const decode = jwt_decode(token)
        dispatch({type: SET_CURRENT_USER, payload: decode})
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err.response })
    }
}

export const setUserLoading = () => {
    return { type: USER_LOADING }
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch({type: SET_CURRENT_USER, payload: {}})
}

export const clearErrors = () => (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
}