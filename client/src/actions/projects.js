import * as api from '../api/projectApi'

export const getProjects = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProjects()
        dispatch({ type: 'GET_PROJECTS', payload: data.data })
    } catch (err) {
        console.log(err)
    }
}

export const newProject = (project) => async (dispatch) => {
    try {
        const { data } = await api.postProject(project)
        dispatch({ type: 'POST_PROJECTS', payload: data.data })
    } catch (err) {
        console.log(err)
    }
}

export const putProject = (id, project) => async (dispatch) => {
    try {
        const { data } = await api.putProject(id, project)
        dispatch({ type: 'PUT_PROJECTS', payload: data.project })
    } catch (err) {
        console.log(err)
    }
}

export const updateProjectImages = (id, images) => async (dispatch) => {
    try {
        const { data } = await api.putProjectImages(id, images)
        dispatch({ type: 'PUT_PROJECT_IMAGES', payload: data.project })
    } catch (err) {
        console.log(err)
    }
}

export const deleteProjectImage = (id, imageId) => async (dispatch) => {
    try {
        const { data } = await api.deleteProjectImage(id, imageId)
        dispatch({ type: 'DELETE_PROJECT_IMAGE', payload: data.project })
    } catch (err) {
        console.log(err)
    }
}