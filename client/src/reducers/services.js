/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    services: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLEAR_SERVICES':
            return { ...state, services: []}
        case 'GET_ALL_SERVICES':
            return { ...state, services: action.payload }
        case 'GET_ONE_SERVICE':
            return state
        case 'POST_SERVICE':
            return { ...state, services: [ action.payload, ...state.services ] }
        case 'PUT_SERVICE':
            return { ...state, services: state.services.map( (ser) => ser._id === action.payload._id ? action.payload : ser ) }
        default:
            return state;
    }
}