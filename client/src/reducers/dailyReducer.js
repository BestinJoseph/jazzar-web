/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    dailies: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DAILY':
            return { ...state, dailies: action.payload}
        case 'POST_DAILY':
            return {...state, dailies: [...state.dailies, action.payload]}
        case 'CLEAR_DAILY':
            return {...state, dailies: []}
        default:
            return state
    }
}