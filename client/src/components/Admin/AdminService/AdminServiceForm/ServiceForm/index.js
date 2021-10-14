import React, { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import _ from 'lodash'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useStyles from './ServiceFormStyles'
import ErrorMessageComponent from '../../../CustomComponents/ErrorMessageComponent'
import { newService, updateService } from '../../../../../actions/services'

const ServiceForm = ({ service = {} }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [initialValues, setInitialValues] = useState({ name: '', abb: '', subtitle: '', content: '', scope: [], specialized: [], arname: 'some name', arsubtitle: 'some title', arcontent: 'cool content' })

    // console.log(service)
    // console.log(!_.isEmpty(service))

    useEffect( () => {
        let isSubscribed = true

        if(isSubscribed && !_.isEmpty(service)) {
            setInitialValues(service)
        }

        return () => (isSubscribed = false)
    }, [service])

    const validateSchema = Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        abb: Yup.string().required('Abberivation is required.'),
        subtitle: Yup.string().required('Sub Title is required.'),
        scope: Yup.array().of(Yup.string().required('Scope fields must be filled.')),
    })

    const handleSubmit = (values, actions) => {
        if(!!_.isEmpty(service)) {
            dispatch(newService(values))
            history.push('/admin/services')
        } else {
            dispatch(updateService(service.slug, values))
            history.push('/admin/services')
        }
    }

    return (
        <Box className={classes.serviceform}>
            <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validateSchema}>
                { ({values}) => (
                    <Form>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <Field as={TextField} type="text" name="name" label="Service Name" fullWidth InputLabelProps={{shrink: true}}/>
                            <ErrorMessage name="name" component={ErrorMessageComponent}/>
                        </Box>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <Field as={TextField} type="text" name="abb" label="Abbrevation" fullWidth InputLabelProps={{shrink: true}}/>
                            <ErrorMessage name="abb" component={ErrorMessageComponent}/>
                        </Box>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <Field as={TextField} type="text" name="subtitle" multiline label="Sub Title" fullWidth InputLabelProps={{shrink: true}}/>
                            <ErrorMessage name="subtitle" component={ErrorMessageComponent}/>
                        </Box>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <FieldArray name="scope" 
                                render={ arrayHelpers => {
                                    const { push, remove, form } = arrayHelpers
                                    return(
                                        <Box>
                                            <label>Scope</label><AddIcon onClick={() => push('')}/>
                                            { form.values.scope.map( (scop, index) => (
                                                <Box key={index}>
                                                    <Field name={`scope[${index}]`} as={TextField} fullWidth/>
                                                    { index + 1 > 0 && <RemoveIcon onClick={ () => remove(index)}/>}
                                                    <ErrorMessage name={`scope[${index}]`} component={ErrorMessageComponent}/>
                                                </Box>
                                            ))}
                                        </Box>
                                    )
                                }}
                            />
                        </Box>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <FieldArray name="specialized" 
                                render={ arrayHelpers => {
                                    const { push, remove, form } = arrayHelpers
                                    return(
                                        <Box>
                                            <label>Specialized</label><AddIcon onClick={() => push('')}/>
                                            { form.values.specialized.map( (spec, index) => (
                                                <Box key={index}>
                                                    <Field name={`specialized[${index}]`} as={TextField} fullWidth/>
                                                    { index + 1 > 0 && <RemoveIcon onClick={ () => remove(index)}/>}
                                                    <ErrorMessage name={`specialized[${index}]`} component={ErrorMessageComponent}/>
                                                </Box>
                                            ))}
                                        </Box>
                                    )
                                }}
                            />
                        </Box>
                        <Box className={classNames('serviceFormTextFieldCover')}>
                            <Field as={TextField} type="text" name="content" multiline label="Content" fullWidth InputLabelProps={{shrink: true}}/>
                            <ErrorMessage name="content" component={ErrorMessageComponent}/>
                        </Box>
                        <Button type="submit" variant="contained" color="secondary">Submit</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default ServiceForm
