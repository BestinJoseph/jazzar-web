import { Box, Button, TextField, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import {  } from 'formik-material-ui'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
// import { KeyboardDatePicker } from "@material-ui/pickers";
import _ from 'lodash'
// import * as Yup from 'yup'

import useStyles from './DailyRequirementStyles'
import { postDailyAction, putDailyAction } from '../../../actions/dailyActions'

const DailyRequirement = () => {
    const classes = useStyles()
    const { project } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const {projects: { projects }, dailies: { dailies }} = useSelector( state => state )
    const [daily, setDaily] = useState()

    // const [roles, setRoles] = useState([])

    const { dailyId } = location.state
    const query = (history.location.search).substring(1)
    const projectQuery = _.isEmpty((history.location.search).substring(1)) ? query : ''
    const [initialValues, setInitialValues] = useState({ project: projectQuery, createdAt: moment().format('yyyy-MM-DD'), requirements: {}})

    useEffect(() => {
        const proRoles = []
        Object.values(projects).forEach(({_id, roles}) => {
            if(_id === project) {
                proRoles.push(roles)
            } else {
                return []
            }
        })

        let obj = {}
        if( dailyId === null ) {
            if(proRoles[0] !== undefined) {
                proRoles[0].forEach( role => {
                    obj[role] = 0
                })
            }  else {
                obj = {}
            }
        } else {
            dailies.map( daily => {
                if(daily._id === dailyId) {
                    obj = daily.requirements
                    setDaily(daily)
                }
            })
        }
        setInitialValues({...initialValues, requirements: {...obj}})
        // setRoles(proRoles)
    },[project, projects])

    // console.log(project)

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        const projectValue = project === 'newproject' ? values.project : values.project = project
        
        values.createdAt = dailyId === null ? moment(values.createdAt, 'YYYY-MM-DD').format() : daily.createdAt

        if(_.isEmpty(values.project)) {
            setSubmitting(false)
        } else {
            if(dailyId === null) {
                dispatch(postDailyAction(project, values))
                resetForm()
                history.push('/promanage')
            } else {
                dispatch(putDailyAction(dailyId, values))
                resetForm()
                history.push({pathname: `/promanage/${project}/monthly`, search: `month=${moment(daily.createdAt).format('M')}`})
            }
        }
    }

    return (
        <Box className={classes.dailyrequirements}>
            <Box className={classNames('dailyheader')}>
                <Typography>{ moment().format('MMM DD, YYYY') }</Typography>
                <Typography variant="h4">{ _.isEmpty(query) ?  'New Project' : query  }</Typography>
            </Box>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize>
                {
                    
                    ({values}) => {

                        return (
                            <Form>
                                {
                                   Object.keys( values.requirements).map((role, index) => (
                                        <Box style={{ marginTop:'1.25rem' }} key={index}>
                                            <Field as={TextField} type="text" name={`requirements.${role}`} label={role}/>
                                        </Box>
                                    ))
                                }
                                <Box style={{ marginTop: '1.25rem' }} label="Date">
                                    <Field as={TextField} type="date" name={`createdAt`} fullWidth/>
                                </Box>
                                <Box style={{ marginTop: '2rem' }}>
                                    <Button type="submit" variant="contained" color="primary" style={{ marginRight: '1rem'}}>Submit</Button>
                                    <Link to={{pathname:"/promanage"}}>cancel</Link>
                                </Box>
                            </Form>
                        )
                    }
                }
            </Formik>
        </Box>
    )
}

export default DailyRequirement
