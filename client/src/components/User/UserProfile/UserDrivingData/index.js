import { Paper } from '@material-ui/core'
import React from 'react'

import useStyles from './UserDrivingDataStyles'

const UserDrivingData = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.userdrivingdata}>
            driving informations.
        </Paper>
    )
}

export default UserDrivingData
