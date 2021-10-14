import React from 'react'
import { Box, Typography, Grid, Paper, Breadcrumbs } from '@material-ui/core'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
import moment from 'moment'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './AdminProjectStyles'
import { useSelector } from 'react-redux'

const AdminProject = () => {
    const classes = useStyles()
    const { projects } = useSelector(state => state.projects)
    const history = useHistory()

    const handleClick = (id) => {
        history.push({ pathname: '/admin/projects/edit', state: {id: id}})
    }

    return (
        <Box className={classes.adminproject}>
            <Box className={classNames('adminprojectheaderContainer')}>
                <Box className={classNames('headercontainerBox')}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <HomeIcon onClick={() => history.push({ pathname: '/admin'})} className={classNames('headercontainerboxHomeLink')}/>
                        <Box className={classNames('headercontainerboxTitle')}>
                            <Typography variant="h6" style={{marginRight: '1rem'}}>Project Dashboard</Typography>
                            <Link to='/admin/projects/create'><AddIcon /></Link>
                        </Box>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box className={classNames('adminprojectcontents')}>
                <Grid container className={classNames('adminprojectContainer')} spacing={2}>
                    {
                        projects && projects.map( (project, index) => (
                            <Grid item xs={3} className={classNames('adminprojectItem')} key={index}>
                                <Paper className={classNames('itemContainer')}>
                                    <Box>
                                        <Typography variant="h6">{ project.project }</Typography>
                                        <Typography variant="body2">{ moment(project.updatedAt).format('DD MMM, YYYY') }</Typography>
                                    </Box>
                                    <Box className={classNames('itemFooter')}>
                                        <EditIcon onClick={() => handleClick(project._id)} style={{ cursor: 'pointer', }}/>
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

export default AdminProject
