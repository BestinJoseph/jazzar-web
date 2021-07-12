import { Box } from '@material-ui/core'
import React from 'react'

import useStyles from '../../styles/ContactStyles/index'
import Form from './Form'
import Location from './Location'

const Contact = () => {
    const classes = useStyles()

    return (
      <Box className={classes.contact} >
        <Form />
        <Location />
      </Box>
    )
}

export default Contact