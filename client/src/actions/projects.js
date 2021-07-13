import * as api from '../api/projectApi'

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects()
        dispatch({ type: 'GET_PROJECTS', payload: data.data})
    } catch (err) {
        console.log(err)
    }
}