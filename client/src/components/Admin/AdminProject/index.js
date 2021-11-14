import React, { useEffect, useRef, useState } from 'react'
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
    const [allProjects, setAllProjects] = useState([])
    const _isMounted = useRef()
    // console.log(allProjects)

    useEffect(() => {
        setAllProjects(projects)
        return () => _isMounted.current = false
    },[projects])

    const handleClick = (id) => {
        history.push({ pathname: '/admin/projects/edit', state: {id: id}})
    }

    const handleBackToProManager = () => {
        history.push({pathname: '/promanage/create'})
    }

    const handleProjectCreate = () => {
        history.push({ pathname: '/admin/projects/create'} )
    }

    return (
        <Box className={classes.adminproject}>
            <Box className={classNames('adminprojectheaderContainer')}>
                <Box className={classNames('headercontainerBox')}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                        <HomeIcon onClick={() => history.push({ pathname: '/admin'})} className={classNames('headercontainerboxHomeLink')}/>
                        <Box className={classNames('headercontainerboxTitle')}>
                            <Typography variant="h6">Project Dashboard</Typography>
                        </Box>
                        <AddIcon onClick={() => handleProjectCreate()} className={classNames('projectCreateBtn')} />
                    </Breadcrumbs>
                </Box>
                <Typography  className={classNames('backToProManagerBtn')} onClick={() => handleBackToProManager()}>Back to ProManager</Typography>
            </Box>
            <Box className={classNames('adminprojectcontents')}>
                <Grid container className={classNames('adminprojectContainer')} spacing={2}>
                    {
                        allProjects.map( (project, index) => (
                            <Grid item xs={2} className={classNames('adminprojectItem')} key={index}>
                                <Paper className={classNames('itemContainer')}>
                                    <Box>
                                        <Typography variant="h6">{ project && project.project }</Typography>
                                        <Typography variant="body2">{project &&  moment(project.updatedAt).format('DD MMM, YYYY') }</Typography>
                                    </Box>
                                    <Box className={classNames('itemFooter')}>
                                        <EditIcon onClick={() => handleClick(project._id)} className={classNames('projectEditBtn')} />
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
