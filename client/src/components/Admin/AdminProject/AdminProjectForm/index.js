import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import _ from 'lodash'
import classNames from 'classnames'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import useStyles from './AdminProjectFormStyles'
import ProjectForm from '../ProjectForm'
import { useSelector } from 'react-redux'

const AdminProjectForm = () => {
    const classes = useStyles()
    const location = useLocation()
    const { projects } = useSelector( state => state.projects )
    const [ project, setProject ] = useState({})

    useEffect(() => {
        let isSubscribed = true

        if( projects.length > 0 && isSubscribed && !_.isEmpty(location.state) ) {
            setProject(projects.find( pro => pro._id === location.state.id ))
        }

        return () => (isSubscribed = false)

    }, [projects, location])

    return (
        <Box className={classes.adminprojectform}>
            <Box className={classNames('adminprojectformHeader')}>
                <Typography variant="h6" className={classNames('formTitle')}>Project Form</Typography>
                <Link to='/admin/projects'><ArrowBackIcon /></Link>
            </Box>
            <ProjectForm project={project}/>
        </Box>
    )
}

export default AdminProjectForm
