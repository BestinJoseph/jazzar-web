/* eslint-disable import/no-anonymous-default-export */
import { GET_CONTACTS } from "../actions/types";
const initialState = {
    contacts: [],
    contact: {}
}

export default (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_CONTACTS:
            return payload
        default:
            return state
    }
}