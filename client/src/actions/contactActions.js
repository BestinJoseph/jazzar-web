import { GET_CONTACTS, GET_ERRORS, POST_CONTACT } from "./types";
import { getAllContacts, postContacts } from '../api/contactApi'

export const getContacts = () => async (dispatch) => {
    try {
        const { data } = await getAllContacts()
        dispatch({type: GET_CONTACTS, payload: data.contacts })
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err})
    }
}

export const postContactAction = (form) => async (dispatch) => {
    try {
        const { data } = await postContacts(form)
        dispatch({type: POST_CONTACT, payload: data.contacts})
    } catch (err) {
        dispatch({type: GET_ERRORS, payload: err})
    }
}