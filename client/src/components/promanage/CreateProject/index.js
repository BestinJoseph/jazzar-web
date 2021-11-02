import React, { useEffect, useState } from 'react'
import { Box, Paper, Typography, Button, Grid, MenuItem, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router'
import { Field, Form, Formik } from 'formik'
import classNames from 'classnames'
import { CheckboxWithLabel } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import AddIcon from '@material-ui/icons/Add'

import useStyles from './CreateProjectStyles'
import { putProject } from '../../../actions/projects'
import moment from 'moment'


const CreateProject = () => {
    const classes = useStyles()
    const history = useHistory()
    const [initialValues, setInitialValues] = useState({ roles: [], projectId: '' })
    const projectList = ['technicians','helper','rigs','supervisor','engineer','secretary', 'driver', 'survivor', 'geologist']
    const dispatch = useDispatch()
    const { projects } = useSelector( state => state.projects )
    const { project } = history.location.state || {}
    const [updatedProjects, setUpdatedProjects] = useState()

    const handleClick = () => {
        history.push({pathname: '/promanage'})
    }

    useEffect(() => {
        let proData = {}
        if(project) {
            proData = projects.map( proj => {
                if(project === proj._id) {
                    return initialValues.roles = proj.roles
                } else {
                    return initialValues
                }
            })
        }

        setUpdatedProjects(projects.filter( pro => _.isEmpty(pro.roles) ? pro : null))

        setInitialValues(proData)
    },[project, projects])

    const handleSubmit = ({projectId, roles}, { setSubmitting, resetForm }) => {
        const proId = _.isEmpty(projectId) ? project : projectId
        setSubmitting(true)
        dispatch(putProject(proId, {roles: roles}))
        resetForm()
        history.push('/promanage')
    }

    const handleClickProject = () => {
        history.push('/admin/projects/create')
    }

    // console.log(moment().format('MM'))

    return (
        <Box className={classes.createproject}>
            <Box>
            <Box className={classNames('createdproject_container')}>
                <Typography variant="h6">{ project && project ? 'Update' : 'Create' } project here.</Typography>
                <ArrowBackIcon onClick={() => handleClick()} style={{cursor: 'pointer'}}/>
            </Box>

            <Paper className={classNames('createproject_form')}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {
                        ({values}) => {
                            return (
                                <Form>
                                    <Grid container style={{ display: 'flex', alignItems: 'center', }}>
                                        <Grid item lg={11}>
                                            {
                                                _.isEmpty(project) ?
                                                <Box style={{ marginBottom: '1.5rem' }}>
                                                    <Field name="projectId" fullWidth as={TextField} select label="Select Project">
                                                        <MenuItem value=''>Select Project</MenuItem>
                                                        {
                                                            updatedProjects && updatedProjects.map((pro, index) => (
                                                                <MenuItem value={pro._id} key={index}>{pro.project}</MenuItem>
                                                            ))
                                                        }
                                                    </Field>
                                                </Box>
                                                : null
                                            }
                                        </Grid>
                                        <Grid item lg={1}>
                                            <AddIcon onClick={() => handleClickProject()} className={classNames('addProjectBtn')} />
                                        </Grid>
                                    </Grid>
                                    <Box>
                                        <Grid container>
                                        { 
                                            projectList && projectList.map((project, index) => (
                                                    <Grid item lg={6} key={index}>
                                                        <Field component={CheckboxWithLabel} type="checkbox" checked={values.roles && values.roles.includes(project)} value={project} name={`roles`} Label={{ label: `${project}` }}/>
                                                    </Grid>
                                            ))
                                        }
                                        </Grid>
                                    </Box>
                                    <Box style={{ marginTop: '1rem'}}>
                                        <Button type="submit" variant="contained" color="primary">{ _.isEmpty(project) ? 'Submit' : 'Update' }</Button>
                                    </Box>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </Paper>
            </Box>
        </Box>
    )
}

export default CreateProject
