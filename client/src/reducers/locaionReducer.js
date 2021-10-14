/* eslint-disable import/no-anonymous-default-export */
import { GET_LOCATIONS, POST_LOCATION, PUT_LOCATION } from "../actions/types"

const initialState = {
    locations: []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return { ...state, locations: action.payload }
        case POST_LOCATION:
            return { ...state, locations: [ ...state.locations, action.payload ]}
        case PUT_LOCATION:
            console.log(action.payload)
            return { ...state, locations: state.locations.map((loc) => loc._id === action.payload._id ? action.payload : loc )}
        default:
            return state
    }
}