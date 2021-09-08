/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    projects: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return { ...state, projects: action.payload }
        case 'POST_PROJECTS':
            return { ...state, projects: [ ...state.projects, action.payload] }
        case 'PUT_PROJECTS':
            return { ...state, projects: [ ...state.projects.map(pro => pro._id === action.payload._id ? action.payload : pro) ]}
        case 'PUT_PROJECT_IMAGES':
            return { ...state, projects: [ ...state.projects.map(pro => pro._id === action.payload._id ? action.payload : pro) ]}
        case 'DELETE_PROJECT_IMAGE':
            return { ...state, projects: [ ...state.projects.map(pro => pro._id === action.payload._id ? action.payload : pro) ]}
        default:
            return state;
    }
}