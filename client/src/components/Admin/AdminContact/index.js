import React from 'react'
import { Box, Typography, Grid, Breadcrumbs } from '@material-ui/core'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'

import useStyles from './AdminContactStyles'
// import { useSelector } from 'react-redux'

const AdminContact = () => {
    const classes = useStyles()
    // const { projects } = useSelector(state => state.projects)
    const history = useHistory()

    // const handleClick = (id) => {
    //     history.push({ pathname: '/admin/contacts/lists', state: {id: id}})
    // }

    return (
        <Box className={classes.admincontact}>
            <Box className={classNames('admincontactheaderContainer')}>
                <Box className={classNames('headercontainerBox')}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <HomeIcon onClick={() => history.push({ pathname: '/admin'})} className={classNames('headercontainerboxHomeLink')}/>
                        <Box className={classNames('headercontainerboxTitle')}>
                            <Typography variant="h6" style={{marginRight: '1rem'}}>Contact Dashboard</Typography>
                        </Box>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box className={classNames('admincontactcontents')}>
                <Grid container className={classNames('admincontactContainer')} spacing={2}>
                    {
                        "hello."
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminContact

