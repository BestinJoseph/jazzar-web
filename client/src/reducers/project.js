/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    project: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ONE_PROJECT':
            return { ...state, project: action.payload }
        case 'REMOVE_ONE_PROJECT':
            return { ...state, project: {} }
        default:
            return state;
    }
}