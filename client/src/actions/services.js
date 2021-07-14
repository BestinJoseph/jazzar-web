import { fetchServices, fetchOneService } from '../api/serviceApi'

export const getServices = () => async (dispatch) => {
    try {
        const {data} = await fetchServices()
        dispatch({ type: 'GET_ALL_SERVICES', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const getOneService = (slug) => async (dispatch) => {
    try {
        const {data} = await fetchOneService(slug)
        dispatch({ type: 'GET_ALL_SERVICES', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}