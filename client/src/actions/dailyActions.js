import { getAllDailyApi, postDailyApi, putDailyApi } from '../api/dailyApi'

export const getDailesAction = () => async (dispatch) => {
    try {
        const { data } = await getAllDailyApi()
        dispatch({type: 'GET_ALL_DAILY', payload: data.daily})
        // dispatch({type: 'CLEAR_DAILY', payload: data.daily})
    } catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err})
    }
}

export const postDailyAction = (project, daily) => async (dispatch) => {
    console.log(project)
    try {
        const { data } = await postDailyApi(project, daily)
        dispatch({type: 'POST_DAILY', payload: data.daily})
    } catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err})
    }
}
export const putDailyAction = (dailyId, updatedDaily) => async (dispatch) => {
    try {
        const { data } = await putDailyApi(dailyId, updatedDaily)
        dispatch({type: 'PUT_DAILY', payload: data.daily})
    } catch (err) {
        dispatch({type: 'GET_ERRORS', payload: err})
    }
}