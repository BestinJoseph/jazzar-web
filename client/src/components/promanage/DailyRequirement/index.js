import { Box, Button, TextField, Typography } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import {  } from 'formik-material-ui'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
// import { KeyboardDatePicker } from "@material-ui/pickers";
import _ from 'lodash'
import * as Yup from 'yup'

import useStyles from './DailyRequirementStyles'
import { postDailyAction } from '../../../actions/dailyActions'

const DailyRequirement = () => {
    const classes = useStyles()
    const { project } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const { projects } = useSelector( state => state.projects )
    const [roles, setRoles] = useState([])

    const query = (history.location.search).substring(1) 
    const projectQuery = _.isEmpty((history.location.search).substring(1)) ? query : ''
    const [initialValues, setInitialValues] = useState({ project: projectQuery, createdAt: moment().format('yyyy-MM-DD'), requirements: {}})

    // const validationSchema = Yup.object().shape({
    //     return roles.map( role => {
    //         role: Yup.number().required('Required, starts from 0.')
    //     })
    // })

    useEffect(() => {
        const proRoles = []
        Object.values(projects).forEach(({_id, roles}) => {
            if(_id === project) {
                proRoles.push(roles)
            } else {
                return []
            }
        })
        // console.log(proRoles[0])
        let obj = {}
        if(proRoles[0] !== undefined) {
            obj = proRoles[0].reduce( (acc, role) => {
                acc['requirements'] = {}
                acc['requirements'][role] = 0

                return acc
            },{})
        }  else {
            obj = {}
        }
        console.log(obj)
        setInitialValues({...initialValues, requirements: {...obj}})
        setRoles(proRoles)
    },[project, projects])

    // console.log(roles)

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        const projectValue = project === 'newproject' ? values.project : values.project = project
        
        values.createdAt = moment(values.createdAt, 'YYYY-MM-DD').format()

        // console.log(values)

        if(_.isEmpty(values.project)) {
            setSubmitting(false)
        } else {
            dispatch(postDailyAction(projectValue, values))
            resetForm()
            history.push('/promanage')
        }
    }

    return (
        <Box className={classes.dailyrequirements}>
            <Box className={classNames('dailyheader')}>
                <Typography>{ moment().format('MMM DD, YYYY') }</Typography>
                <Typography variant="h4">{ _.isEmpty(query) ?  'New Project' : query  }</Typography>
            </Box>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    {
                        roles[0] && roles[0].map((role, index) => (
                            <Box  style={{ marginTop: '1.25rem' }} key={index}>
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
            </Formik>
        </Box>
    )
}

export default DailyRequirement
