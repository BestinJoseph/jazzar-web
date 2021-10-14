import { Box, Button, TextField, Typography, Select, MenuItem } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import {  } from 'formik-material-ui'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
// import { KeyboardDatePicker } from "@material-ui/pickers";
import _ from 'lodash'

import useStyles from './DailyRequirementStyles'
import { postDailyAction } from '../../../actions/dailyActions'

const DailyRequirement = () => {
    const classes = useStyles()
    const { project } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    // const { project } = useParams()
    const { projects } = useSelector( state => state.projects )

    const query = (history.location.search).substring(1) 
    const projectQuery = _.isEmpty((history.location.search).substring(1)) ? query : ''
    const initialValues = { project: projectQuery, createdAt: '', requirements: {technicians: 0, rigs: 0, helpers: 0}}

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        // _.isEmpty(query) ? delete values.project : delete values.project_id
        const projectValue = project === 'newproject' ? values.project : values.project = project
        
        // console.log(values)
        // console.log(projectValue)
        if(_.isEmpty(values.project)) {
            
        } else {
            dispatch(postDailyAction(projectValue, values))
            resetForm()
            history.push('/promanage')
        }
        
    }
    console.log(query)
    console.log(project)

    return (
        <Box className={classes.dailyrequirements}>
            <Box className={classNames('dailyheader')}>
                <Typography>{ moment().format('MMM DD, YYYY') }</Typography>
                <Typography variant="h4">{ _.isEmpty(query) ?  'New Project' : query  }</Typography>
            </Box>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    {
                        _.isEmpty(query) ? 
                        <Box>
                            <Field name="project" fullWidth as={TextField} select>
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
                    <Box style={{ marginTop: '1rem' }}>
                        <Field as={TextField} type="date" name={`createdAt`} />
                    </Box>
                    <Box  style={{ marginTop: '1rem' }}>
                        <Field as={TextField} type="text" name={`requirements.technicians`} label="Technicians"/>
                    </Box>
                    <Box  style={{ marginTop: '1rem' }}>
                        <Field as={TextField} type="text" name={`requirements.rigs`} label="Rigs" InputLabelProps={{ shrink: true }}/>
                    </Box>
                    <Box style={{ marginTop: '1rem' }}>
                        <Field as={TextField} type="text" name={`requirements.helpers`} label="Helpers"/>
                    </Box><br />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>Submit</Button>
                    <Link to={{pathname:"/promanage"}}>cancel</Link>
                </Form>
            </Formik>
        </Box>
    )
}

export default DailyRequirement
