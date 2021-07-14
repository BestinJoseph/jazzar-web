/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    services: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_SERVICES':
            return { ...state, services: action.payload }
        default:
            return state;
    }
}