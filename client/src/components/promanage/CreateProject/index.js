import React, { useEffect, useState } from 'react'
import { Box, Paper, Typography, Button, Grid, MenuItem, TextField } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useHistory } from 'react-router'
import { Field, Form, Formik } from 'formik'
import classNames from 'classnames'
import { CheckboxWithLabel } from 'formik-material-ui'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'

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
        setInitialValues(proData)
    },[project, projects])

    const handleSubmit = ({projectId, roles}, { setSubmitting, resetForm }) => {
        const proId = _.isEmpty(projectId) ? project : projectId
        setSubmitting(true)
        dispatch(putProject(proId, {roles: roles}))
        resetForm()
        history.push('/promanage')
    }

    // console.log(moment().format('MM'))

    return (
        <Box className={classes.createproject}>
            <Box className={classNames('createdproject_container')}>
                <Typography variant="h6">create project here.</Typography>
                <ArrowBackIcon onClick={() => handleClick()} style={{cursor: 'pointer'}}/>
            </Box>

            <Paper className={classNames('createproject_form')}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {
                        ({values}) => {
                            return (
                                <Form>
                                    {
                                        _.isEmpty(project) ?
                                        <Box style={{ marginBottom: '1.5rem' }}>
                                            <Field name="projectId" fullWidth as={TextField} select label="Select Project">
                                                <MenuItem value=''>Select Project</MenuItem>
                                                {
                                                    projects.map((pro, index) => (
                                                        <MenuItem value={pro._id} key={index}>{pro.project}</MenuItem>
                                                    ))
                                                }
                                            </Field>
                                        </Box>
                                        : null
                                    }
                                    <Box>
                                        <Grid container>
                                        { 
                                            projectList.map((project, index) => (
                                                    <Grid item lg={6} key={index}>
                                                        <Field component={CheckboxWithLabel} type="checkbox" checked={values.roles.includes(project)} value={project} name={`roles`} Label={{ label: `${project}` }}/>
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
    )
}

export default CreateProject
