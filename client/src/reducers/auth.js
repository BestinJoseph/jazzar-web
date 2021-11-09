/* eslint-disable import/no-anonymous-default-export */
import {SET_CURRENT_USER, USER_LOADING} from '../actions/types'
import { isEmpty } from 'lodash'
const initialState = {
    isAuthenticated: false,
    admin: false,
    user: {},
    loading: false,
    role: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return state
        case 'USER_REGISTER':
            return state
        case SET_CURRENT_USER:
            return {...state, isAuthenticated: !isEmpty(action.payload), user: action.payload, role: 'admin'}
        case USER_LOADING:
            return {...state, loading: true}
        default:
            return state
    }
}