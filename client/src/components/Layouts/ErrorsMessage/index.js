import React from 'react'
import { Box } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useDispatch } from 'react-redux'

import { clearErrors } from '../../../actions/authActions'

const ErrorsMessage = ({ errors }) => {
    const dispatch = useDispatch()

    const handleClearErrors = () => {
        dispatch(clearErrors())
    }

    return (
        <Box>
            <Box>
                { errors.message ? errors.message : null }
            </Box>
            <CloseIcon onClick={() => handleClearErrors() }/>
        </Box>
    )
}

export default ErrorsMessage
