import React from 'react'
import { Box, Typography, Grid, Paper } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { useDispatch } from 'react-redux';

import useStyles from './DashboardStyles'
import { logoutUser } from '../../../actions/authActions'

const Dashboard = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLink = (link, e) => {
      // e.target.classList.add('active')
      history.push(`/admin/${link}`)
    }

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <Box className={classes.dashboard}>
            <Box className={classNames('dashboardMenu')}>
                <Typography variant="h6">Dashboard</Typography>
                <PowerSettingsNewIcon className={classNames('logoutButton')} onClick={(e) => handleLogout()} />
            </Box>
            <Box style={{ padding: '2rem', }}>
                <Grid container spacing={3} style={{ cursor: 'pointer', }}>
                    <Grid item xs={3}>
                        <Paper onClick={(e) => handleLink('services', e)} style={{ height: '15rem', padding: '1rem', }}>
                            <Typography variant="h6">Services</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} style={{ cursor: 'pointer', }}>
                        <Paper onClick={(e) => handleLink('projects', e)} style={{ height: '15rem', padding: '1rem', }}>
                            <Typography variant="h6">Projects</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} style={{ cursor: 'pointer', }}>
                        <Paper onClick={(e) => handleLink('contacts', e)} style={{ height: '15rem', padding: '1rem', }}>
                            <Typography variant="h6">Contacts</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} style={{ cursor: 'pointer', }}>
                        <Paper onClick={(e) => handleLink('branches', e)} style={{ height: '15rem', padding: '1rem', }}>
                            <Typography variant="h6">Branches</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Dashboard
