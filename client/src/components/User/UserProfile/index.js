import { Box, Button, Grid, Paper } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'

import useStyles from './UserProfileStyle'
import UserGeneralData from './UserGeneralData'
import UserCompanyProfile from './UserCompanyProfile'
import UserDrivingData from './UserDrivingData'
import { logoutUser } from '../../../actions/authActions'

const UserProfile = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <Box className={classes.userprofile}>
            <Grid container className={classNames('userprofileContainer')} spacing={3}>
                <Grid item lg={2}>
                    <UserGeneralData />
                    <Button variant="contained" color="secondary" style={{ marginTop: '1.5rem', }} onClick={ () => handleLogout() }>Logout</Button>
                </Grid>
                <Grid item lg={4}>
                    <UserCompanyProfile />
                    <UserDrivingData />
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classNames('personalProfile')}>
                    educational data
                    </Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper className={classNames('personalProfile')}>
                        Previous Professional
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default UserProfile
