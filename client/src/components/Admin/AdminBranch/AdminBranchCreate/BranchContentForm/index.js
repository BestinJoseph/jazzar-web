import React, { useEffect, useRef, useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import _ from 'lodash'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'

import useStyles from './BranchContentFormStyles'
import { postLocationAction, putLocationAction } from '../../../../../actions/locationActions'

const BranchContentForm = ({ branch }) => {
    const classes = useStyles()
    const _isMounted = useRef(true)
    const dispatch = useDispatch()
    const [initialValues, setInitialValues] = useState({name: '', address: '', telephone: '', fax: '', email: '', landmark: '', location: ''})
    const history = useHistory()

    useEffect(() => {
        if(_isMounted && !_.isEmpty(branch)){
            setInitialValues(branch)
        }

        return () =>{ _isMounted.current = false }
    }, [branch])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required.')
    })

    const handleSubmit = (values, actions) => {
        if(_.isEmpty(branch)) {
            dispatch(postLocationAction(values))
            actions.resetForm()
            history.push('/admin/branches')
        } else {
            dispatch(putLocationAction(branch._id, values))
        }
    }

    return (
        <Box className={classes.branchcontentform}>
            <Formik enableReinitialize={true}  initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {({values}) => (
                    <Form>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="name" InputLabelProps={{ shrink: true }} label="Branch Name" fullWidth/>
                            <ErrorMessage name="name" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="address" InputLabelProps={{ shrink: true }} label="Address" fullWidth/>
                            <ErrorMessage name="address" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="telephone" InputLabelProps={{ shrink: true }} label="Telephone" fullWidth/>
                            <ErrorMessage name="telephone" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="fax" InputLabelProps={{ shrink: true }} label="Fax" fullWidth/>
                            <ErrorMessage name="fax" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="email" InputLabelProps={{ shrink: true }} label="Email" fullWidth/>
                            <ErrorMessage name="email" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="landmark" InputLabelProps={{ shrink: true }} label="Landmark" fullWidth/>
                            <ErrorMessage name="landmark" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Field as={TextField} name="location" InputLabelProps={{ shrink: true }} label="Location" fullWidth/>
                            <ErrorMessage name="location" />
                        </Box>
                        <Box className={classNames('textfield')}>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default BranchContentForm
