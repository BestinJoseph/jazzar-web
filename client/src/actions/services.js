import { fetchServices, fetchOneService, postServices, putServices, putServicesImages } from '../api/serviceApi'

export const reinitializeServices = () => async (dispatch) => {
    try {
        dispatch({ type: 'CLEAR_SERVICES'})
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const getServices = () => async (dispatch) => {
    try {
        const {data} = await fetchServices()
        dispatch({ type: 'GET_ALL_SERVICES', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const getOneService = (slug, history) => async (dispatch) => {
    try {
        const {data} = await fetchOneService(slug)
        history.push({pathname: `/services/details`, search: `?slug=${slug}`})
        dispatch({ type: 'GET_ONE_SERVICE', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const newService = (service) => async (dispatch) => {
    try {
        const { data } = await postServices(service)
        dispatch({ type: 'POST_SERVICE', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const updateService = (slug, service) => async (dispatch) => {
    try {
        const { data } = await putServices(slug, service)
        dispatch({ type: 'PUT_SERVICE', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}

export const updateServiceImages = (id, service) => async (dispatch) => {
    try {
        const { data } = await putServicesImages(id, service)
        dispatch({ type: 'PUT_SERVICE', payload: data })
    } catch (err) {
        dispatch({ type: 'GET_ERRORS', payload: err.message })
    }
}