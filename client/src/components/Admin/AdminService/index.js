import React from 'react'
import { Box, Grid, Paper, Typography, Breadcrumbs } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import classNames from 'classnames'
import EditIcon from '@material-ui/icons/Edit'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'
import moment from 'moment'

import useStyles from './AdminServiceStyles'

const AdminService = () => {
    const classes = useStyles()
    const { services } = useSelector( state => state.services )
    const history = useHistory()

    // console.log(services)

    const handleClick = (id) => {
        history.push({ pathname: '/admin/services/edit', state: {id:id}})
    }

    return (
        <Box className={classes.adminservice}>
            <Box className={classNames('adminserviceheaderContainer')}>
                <Box className={classNames('headercontainerBox')}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <HomeIcon onClick={() => history.push({ pathname: '/admin'})} className={classNames('headercontainerboxHomeLink')}/>
                        <Box className={classNames('headercontainerboxTitle')}>
                            <Typography variant="h6" style={{marginRight: '1rem'}}>Services Dashboard</Typography>
                            <Link to='/admin/services/create'><AddIcon /></Link>
                        </Box>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box className={classNames('adminservicecontents')}>
                <Grid container className={classNames('adminserviceContainer')} spacing={2}>
                    { 
                        services && services.map( (service, index) => (
                            <Grid item xs={3} className={classNames('adminserviceItem')} key={index}>
                                <Paper className={classNames('itemContainer')}>
                                    <Box>
                                        <Typography variant="h6">{ service.name }</Typography>
                                        <Typography variant="body2">{ moment(service.updatedAt).format('DD MMM, yyyy') }</Typography>
                                    </Box>
                                    <Box className={classNames('itemFooter')}>
                                        <EditIcon onClick={() => handleClick(service._id)} style={{ cursor: 'pointer', }}/>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AdminService
