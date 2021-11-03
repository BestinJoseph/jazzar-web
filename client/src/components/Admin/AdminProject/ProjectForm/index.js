import React, { useEffect, useState } from 'react'
import { Box, Tab, Tabs, AppBar } from '@material-ui/core'
import { Formik, } from 'formik'
import * as Yup from 'yup'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'


import useStyles from './ProjectFormStyles'
import { newProject, putProject } from '../../../../actions/projects'
import ProjectContentForm from './ProjectContentForm'
import ProjectImagesForm from './ProjectImagesForm'

const ProjectForm = ({ project }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const { services } = useSelector( state => state.services )
    const [ value, setValue ] = useState(0)
    const [initialValues, setInitialValues] = useState({ project: '', client: '', location: '', category: '', services: [], start_date: "", end_date: '', description: '', images: [] })

    useEffect( () => {
        let isSubscribed = true

        if(isSubscribed && !_.isEmpty(project)) {
            if(project.end_date === null) {
                const uProject = { ...project, end_date: '' }
                setInitialValues(uProject)
            } else {
                setInitialValues(project)
            }
        }

        return () => (isSubscribed = false)
    }, [project])

    console.log(project)

    const validateSchema = Yup.object().shape({
      project: Yup.string().required('Project Name is required.'),
      client: Yup.string().required('Client is required.'),
      location: Yup.string().required('Project Location is required.'),
      category: Yup.string().required('Select the category.'),
      start_date: Yup.date().required('Must be filled.').nullable()
    })

    const handleSubmit = (values, actions) => {
        if(!!_.isEmpty(project)) {
            dispatch(newProject(values))
            history.push('/admin/projects')
        } else {
            dispatch(putProject(project._id, values))
            history.push({pathname: '/admin/projects'})
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className={classes.projectform}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Project Form">
                    <Tab label="Content Section" { ...allyProps(0)} />
                    { _.isEmpty(project) ? null : <Tab label="Images Section" { ...allyProps(1)} /> }
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
                    <ProjectContentForm services={services} />
                </Formik>
            </TabPanel>
            { _.isEmpty(project) ? null : 
                <TabPanel value={value} index={1}>
                    <ProjectImagesForm images={ project && project.images} id={project._id}/>
                </TabPanel>
            }
        </Box>
    )
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props

    return (
        <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            { value === index && (
                <Box p={3}>
                    <Box>{children}</Box>
                </Box>
            )}
        </Box>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

const allyProps = (index) => {
    return{
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

export default ProjectForm
