import { Box } from '@material-ui/core'
import React from 'react'

const ErrorMessageComponent = (props) => {
    console.log(props)
    return (
        <Box style={{ color: 'red', margin: '0.5rem 0 1rem', }}>
            { props.children }
        </Box>
    )
}

export default ErrorMessageComponent
