/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    projects: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: action.payload }
        default:
            return state;
    }
}