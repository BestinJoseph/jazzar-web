/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    projects: [],
    project: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: action.payload }
        case 'GET_SINGLE_PROJECT':
            return { ...state, project: action.payload}
        default:
            return state;
    }
}