import React from 'react'
import { Box, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import useStyles from './CreateProjectStyles'
import { useHistory } from 'react-router'

const CreateProject = () => {
    const classes = useStyles()
    const history = useHistory()

    const handleClick = () => {
        history.push({pathname: '/promanage'})
    }

    return (
        <Box className={classes.createproject}>
            <Box>
                <Typography variant="h6">create project here.</Typography>
            </Box>
            <ArrowBackIcon onClick={() => handleClick()} style={{cursor: 'pointer'}}/>
        </Box>
    )
}

export default CreateProject
